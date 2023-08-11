---
title: Python轻量级ORM框架peewee用法详解
tags: [python]
date modified: 2023-08-05 12:57:26
date created: 2022-12-23 12:59:20
---
# Python轻量级ORM框架peewee用法详解
本文中代码样例所使用的 _Person_ 模型如下：

```javascript
class Person(Model):    Name = CharField()    Age = IntegerField()    Birthday = DateTimeField()    Remarks = CharField(null=True)
```

### **一、新增**

#### **1、create**

`Model.create` 向[数据库](https://cloud.tencent.com/solution/database?from=10680)中插入一条记录，并返回一个新的实例。

```javascript
p = Person.create(Name='张三', Age=30, Birthday=date(1990, 1, 1))
```

#### **2、save**

**语法：**

```javascript
save(force_insert=False, only=None)
```

**参数：**

*   force\_insert：是否强制插入
*   only(list)：需要持久化的字段，当提供此参数时，只有提供的字段被持久化。

**示例：**

```javascript
p1 = Person(Name='王五', Age=50, Birthday=date(1970, 1, 1))p1.save()
```

这里说的比较简单，下面会详细说明。

#### **3、insert**

`insert` 只插入数据而不创建模型实例，返回新行的主键。

```javascript
Person.insert(Name='李四', Age=40, Birthday=date(1980, 1, 1)).execute()
```

#### **4、insert\_many**

**语法：**

```javascript
insert_many(rows, fields=None)
```

**参数：**

*   rows：元组或字典列表，要插入的数据
*   fields(list)：需要插入的字段名列表。

> 说明： 1、当 rows 传递的是字典列表时，fields 是不需要传的，如果传了，那么，rows 中的字段在字典中必须存在，否则报错。如果没有传递 fields 参数，那么默认取所有字典的交集作为插入字段。这个也好理解，比如一个字典的键是`a、b、c`，一个是 `b、c、d`，那么就取 `b、c` 作为需要插入的字段。_peewee_ 不会为缺失的字段做默认处理。 2、当 rows 传递的是元组列表时，必须指定 fields，并且 fields 中字段名的顺序跟元组一致。元组中值的数量必须大于等于 fields 中字段的数量，一般建议是保持一致。

**示例：**

```javascript
Person.insert_many([    ('张三', 30, date(1990, 1, 1)),    ('李四', 40, date(1980, 1, 1)),    ('王五', 50, date(1970, 1, 1))],    ['Name', 'Age', 'Birthday']).execute()Person.insert_many([    {'Name': '张三', 'Age': 30, 'Birthday': date(1990, 1, 1)},    {'Name': '李四', 'Age': 40, 'Birthday': date(1980, 1, 1)},    {'Name': '王五', 'Age': 50, 'Birthday': date(1970, 1, 1)}]).execute()
```

对于批量操作，应该放在事务中执行：

```javascript
with db.atomic():    Person.insert_many(data, fields=fields).execute()
```

> 在使用批量插入时，如果是 SQLite，SQLite3 版本必须为 3.7.11.0 或更高版本才能利用批量插入API。此外，默认情况下，SQLite 将 SQL 查询中的绑定变量数限制为 999。

SQLite 中，当批量插入的行数超过 999 时，就需要使用循环来将数据批量分组：

```javascript
with db.atomic():    for idx in range(0, len(data), 100):        Person.insert_many(data[idx: idx+100], fields=fields).execute()
```

_Peewee_ 中带有一个分块辅助函数 `chunked()`，使用它可以有效地将通用迭代块分块为一系列批量迭代的迭代：

```javascript
from peewee import chunked# 一次插入 100 行.with db.atomic():    for batch in chunked(data, 100):        Person.insert_many(batch).execute()
```

#### **5、bulk\_create**

**语法：**

```javascript
bulk_create(model_list, batch_size=None)
```

**参数：**

*   model\_list (iterable)：未保存的模型实例的列表或其他可迭代对象。
*   batch\_size (int)：每次批量插入的行数。如果未指定，则一次性全部插入。

**示例：** 简单来说，`insert_many` 使用字典或元组列表作为参数，而 `model_list` 使用模型实例列表作为参数，就这区别。

```javascript
data = [Person(Name='张三~', Age=30, Birthday=date(1990, 1, 1)),        Person(Name='李四~', Age=40, Birthday=date(1980, 1, 1))]with db.atomic():    Person.bulk_create(data)
```

> **注意：**如果使用的是 Postgresql（支持该RETURNING子句），则先前未保存的模型实例将自动填充其新的主键值。

例如用的是 SQLite，执行上述代码之后，`print(data[0].id)` 显示的结果是 `None`。

#### **6、batch\_commit**

这不是一个好的方法，来看下面的例子

```javascript
data_dict = [{'Name': '张三', 'Age': 30, 'Birthday': date(1990, 1, 1)},             {'Name': '李四', 'Age': 40, 'Birthday': date(1980, 1, 1)},             {'Name': '王五', 'Age': 50, 'Birthday': date(1970, 1, 1)}]for row in db.batch_commit(data_dict, 100):    p = Person.create(**row)
```

查看 SQL 语句如下：

```javascript
('BEGIN', None)('INSERT INTO "person" ("Name", "Age", "Birthday") VALUES (?, ?, ?)', ['张三', 30, datetime.date(1990, 1, 1)])('INSERT INTO "person" ("Name", "Age", "Birthday") VALUES (?, ?, ?)', ['李四', 40, datetime.date(1980, 1, 1)])('INSERT INTO "person" ("Name", "Age", "Birthday") VALUES (?, ?, ?)', ['王五', 50, datetime.date(1970, 1, 1)])
```

其实，`batch_commit` 就是自动添加了一个事务，然后一条条的插入，所以返回的模型实例中能获取到主键。 参数第一个是字典列表，第二个就是每多少条启用一个事务，大家可以把它改成 1 看下 SQL 语句就明白了。

#### **7、insert\_from**

使用 _SELECT_ 查询作为源 _INSERT_ 数据。此 API 应用于 _INSERT INTO … SELECT FROM …_ 形式的查询。

**语法：**

```javascript
insert_from(query, fields)
```

**参数：**

*   query：SELECT查询用作数据源
*   fields：要将数据插入的字段，此参数必须要的 **示例：**我们将 Person 表按原结构复制一个 Person2 表出来，以做演示。

```javascript
data = Person.select(Person.Name, Person.Age, Person.Birthday)Person2.insert_from(data, ['Name', 'Age', 'Birthday']).execute()
```

> **注意：** 因为是 _INSERT INTO … SELECT FROM …_ 形式的，所以数据源的列跟要插入的列必须保持一致。

### **二、删除**

#### **1、delete**

`delete` 后加 `where` 删除指定记录，如果不加 `where`，则删除全部记录。

```javascript
Person.delete().where(Person.Name=='王五').execute()
```

#### **2、delete\_instance**

删除给定的实例。 **语法：**

```javascript
delete_instance(recursive=False, delete_nullable=False)
```

**示例：**

```javascript
p = Person.get(Person.Name=='张三')p.delete_instance()
```

`delete_instance` 直接执行删除了，不用调用`execute()` 方法。

**参数：** 一般我都是先讲参数再讲示例的，这次倒过来，示例其实很简单，一看就明白。但是这个参数缺需要好好讲下。

这两个参数都跟外键有关。我们修改一下测试用的模型。假设有这样两个模型，一个人员，一个部门，人员属于部门。

```javascript
class Department(Model):    Name = CharField()    class Meta:        database = dbclass Person(Model):    Name = CharField()    Age = IntegerField()    Birthday = DateTimeField()    Remarks = CharField(null=True)    Department = ForeignKeyField(Department, null=True) # 这里外键可为空和不可为空是不一样的，下面说明    class Meta:        database = db
```

① 当 `recursive=False` 时，只删除了【部门】，【人员】没有影响，从 SQL 语句中可以看出。

```javascript
d = Department.get(1)d.delete_instance(recursive=False)# 执行的 SQL 语句('SELECT "t1"."id", "t1"."Name" FROM "department" AS "t1" WHERE ? LIMIT ? OFFSET ?', [1, 1, 0])('DELETE FROM "department" WHERE ("department"."id" = ?)', [1])
```

② 当 `recursive=True` ，并且外键**不可为空**时，会先删除【部门】下的【人员】，再删除【部门】。

```javascript
d = Department.get(1)d.delete_instance(recursive=True)# 执行的 SQL 语句('SELECT "t1"."id", "t1"."Name" FROM "department" AS "t1" WHERE ? LIMIT ? OFFSET ?', [1, 1, 0])('DELETE FROM "person" WHERE ("person"."Department_id" = ?)', [1])('DELETE FROM "department" WHERE ("department"."id" = ?)', [1])
```

③ 当 `recursive=True` ，并且外键**可为空**时，先将【人员】的【部门ID（外键字段）】置为了 _NULL_，再删除【部门】。

```javascript
d = Department.get(1)d.delete_instance(recursive=True)# 执行的 SQL 语句('SELECT "t1"."id", "t1"."Name" FROM "department" AS "t1" WHERE ? LIMIT ? OFFSET ?', [1, 1, 0])('UPDATE "person" SET "Department_id" = ? WHERE ("person"."Department_id" = ?)', [None, 1])('DELETE FROM "department" WHERE ("department"."id" = ?)', [1])
```

④ `delete_nullable` 仅在 `recursive=True` 且外键**可为空**时有效，和 ③ 一样，当 `delete_nullable=True` 时，会删除【人员】，而不是将【人员的部门ID】置为 _NULL_。

```javascript
d = Department.get(1)d.delete_instance(recursive=True, delete_nullable=True)# 执行的 SQL 语句('SELECT "t1"."id", "t1"."Name" FROM "department" AS "t1" WHERE ? LIMIT ? OFFSET ?', [1, 1, 0])('DELETE FROM "person" WHERE ("person"."Department_id" = ?)', [1])('DELETE FROM "department" WHERE ("department"."id" = ?)', [1])
```

### **三、修改**

#### **1、save**

之前说过，`save()` 方法可以插入一条记录，一旦模型实例具有主键，任何后续调用 `save()` 都将导致 _UPDATE_ 而不是另一个 _INSERT_。模型的主键不会改变。

```javascript
p = Person(Name='王五', Age=50, Birthday=date(1970, 1, 1))p.save()print(p1.id)p.Remarks = 'abc'p.save()
```

这个例子，第一次执行的 `save` 是 _INSERT_，第二次是 _UPDATE_。

> 这里解释一下，`Person` 这个模型，我并没有指定主键，_peewee_ 会自动增加一个名为 _id_ 的自增列作为主键。在执行第一个 `save()` 方法的时候，主键没值，所以执行 _INSERT_，`save()` 方法执行之后，自增列的值就返回并赋给了模型实例，所以第二次调用 `save()` 执行的是 _UPDATE_。 如果模型中一开始就用 `PrimaryKeyField` 或 `primary_key` 指定了主键，那么 `save` 执行的永远都是 `update`，所以什么主键不存在则 _INSERT_，存在则 _UPDATE_ 这种操作根本不存在，只能自己来写判断。

#### **2、update**

`update` 用于批量更新，方法相对简单，以下三种写法都可以

```javascript
# 方法一Person.update({Person.Name: '赵六', Person.Remarks: 'abc'}).where(Person.Name=='王五').execute()# 方法二Person.update({'Name': '赵六', 'Remarks': 'abc'}).where(Person.Name=='张三').execute()# 方法三Person.update(Name='赵六', Remarks='abc').where(Person.Name=='李四').execute()
```

#### **3、原子更新**

看这样的一个需求，有一张表，记录博客的访问量，每次有人访问博客的时候，访问量+1。

因为懒得新建模型，我们就以 Person 模型的 Age + 1 来演示。

我们可以这样来写：

```javascript
for p in Person.select():    p.Age += 1    p.save()
```

这样当然是可以实现的，但是这不仅速度慢，而且如果多个进程同时更新计数器，它也容易受到竞争条件的影响。

我们可以用 `update` 方法来实现。

```javascript
Person.update(Age=Person.Age+1).execute()
```

### **四、查询**

#### **1、get**

`Model.get()` 方法检索与给定查询匹配的单个实例。 **语法：**

```javascript
get(*query, **filters)
```

**参数：**

*   query：查询条件
*   filters：Mapping of field-name to value for Django-style filter. 我翻遍网上文章和官方文档都没找到这玩意怎么用！

**示例：**

```javascript
p1 = Person.get(Name='张三')
```

或者

```javascript
p2 = Person.get(Person.Name == '李四')
```

当获取的结果不存在时，报 `Model.DoesNotExist` 异常。如果有多条记录满足条件，则返回第一条。

#### **2、get\_or\_none**

如果当获取的结果不存在时，不想报错，可以使用 `Model.get_or_none()` 方法，会返回 `None`，参数和 `get` 方法一致。

#### **3、get\_by\_id**

对于主键查找，还可以使用快捷方法`Model.get_by_id()`。

```javascript
Person.get_by_id(1)
```

#### **4、get\_or\_create**

_Peewee_ 有一个辅助方法来执行“获取/创建”类型的操作： `Model.get_or_create()` 首先尝试检索匹配的行。如果失败，将创建一个新行。

```javascript
p, created = Person.get_or_create(Name='赵六', defaults={'Age': 80, 'Birthday': date(1940, 1, 1)})print(p, created)# SQL 语句('SELECT "t1"."id", "t1"."Name", "t1"."Age", "t1"."Birthday", "t1"."Remarks" FROM "person" AS "t1" WHERE ("t1"."Name" = ?) LIMIT ? OFFSET ?', ['赵六', 1, 0])('BEGIN', None)('INSERT INTO "person" ("Name", "Age", "Birthday") VALUES (?, ?, ?)', ['赵六', 80, datetime.date(1940, 1, 1)])
```

**参数：** `get_or_create` 的参数是 `**kwargs`，其中 defaults 为非查询条件的参数，剩余的为尝试检索匹配的条件，这个看执行时的 SQL 语句就一目了然了。对于“创建或获取”类型逻辑，通常会依赖唯一 约束或主键来防止创建重复对象。但这并不是强制的，比如例子中，我以 `Name` 为条件，而 `Name` 并非主键。只是最好不要这样做。

**返回值：** `get_or_create` 方法有两个返回值，第一个是“获取/创建”的模型实例，第二个是是否新创建。

#### **5、select**

使用 `Model.select()` 查询获取多条数据。`select` 后可以添加 `where` 条件，如果不加则查询整个表。

**语法：**

```javascript
select(*fields)
```

**参数：**

*   fields：需要查询的字段，不传时返回所有字段。传递方式如下例所示。

**示例：**

```javascript
ps = Person.select(Person.Name, Person.Age).where(Person.Name == '张三')
```

`select()` 返回结果是一个 `ModelSelect` 对象，该对象可迭代、索引、切片。当查询不到结果时，不报错，返回 `None`。并且 `select()` 结果是延时返回的。如果想立即执行，可以调用 `execute()` 方法。

> **注意：**`where` 中的条件不支持 `Name='张三'` 这种写法，只能是 `Person.Name == '张三'`。

#### **6、获取记录条数 count 方法**

使用 `.count()` 方法可以获取记录条数。

```javascript
Person.select().count()
```

也许你会问，用 `len()` 方法可以吗？当然也是可以的，但是是一种不可取的方法。

```javascript
len(Person.select())
```

这两者的实现方式天差地远。用 `count()` 方法，执行的 _SQL_ 语句是：

```javascript
('SELECT COUNT(1) FROM (SELECT 1 FROM "person" AS "t1") AS "_wrapped"', [])
```

而用 `len()` 方法执行的 _SQL_ 语句却是：

```javascript
('SELECT "t1"."id", "t1"."Name", "t1"."Age", "t1"."Birthday", "t1"."Remarks" FROM "person" AS "t1"', [])
```

直接返回所有记录然后获取长度，这种方法是非常不可取的。

#### **7、排序 order\_by 方法**

```javascript
Person.select().order_by(Person.Age)
```

排序默认是升序排列，也可以用 `+` 或 `asc()` 来明确表示是升序排列：

```javascript
Person.select().order_by(+Person.Age)Person.select().order_by(Person.Age.asc())
```

用 `-` 或 `desc()` 来表示降序：

```javascript
Person.select().order_by(-Person.Age)Person.select().order_by(Person.Age.desc())
```

如要对多个字段进行排序，逗号分隔写就可以了。

### **五、查询条件**

当查询条件不止一个，需要使用逻辑运算符连接，而 Python 中的 `and`、`or` 在 Peewee 中是不支持的，此时我们需要使用 Peewee 封装好的运算符，如下：

![](Rsources/Assets/Pasted%20image%2020221223130833.png)


> **特别注意：**有多个条件时，每个条件**必须**用 () 括起来。

当条件全为 _and_ 时，也可以用逗号分隔，_get_ 和 _select_ 中都可以：

```javascript
Person.get(Person.Name == '张三', Person.Age == 30)
```

### **六、支持的比较符**

![](Rsources/Assets/Pasted%20image%2020221223130845.png)

> 注意：由于 SQLite 的 LIKE 操作默认情况下不区分大小写，因此 peewee 将使用 SQLite GLOB 操作进行区分大小写的搜索。glob 操作使用星号表示通配符，而不是通常的百分号。如果您正在使用 SQLite 并希望区分大小写的部分字符串匹配，请记住使用星号作为通配符。

解释一下，在 SQLite 中，如果希望 like 的时候区分大小写，可以这么写：

```javascript
Person.select().where(Person.Remarks % 'a*')
```

如果不希望区分大小写，这么写：

```javascript
Person.select().where(Person.Remarks ** 'a%')
```