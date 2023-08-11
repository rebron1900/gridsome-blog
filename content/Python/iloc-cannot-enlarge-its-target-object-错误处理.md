---
title: “iloc cannot enlarge its target object”错误处理
tags: [python]
date modified: 2023-08-05 12:57:26
date created: 2022-12-23 18:25:44
---
# “iloc cannot enlarge its target object”错误处理
这个是问题代码，报“[iloc](https://so.csdn.net/so/search?q=iloc&spm=1001.2101.3001.7020) cannot enlarge its target object”，也就是说iloc越界了。

```python
# 去除非中文，与长度为一的字符
for index, row in pos.iterrows():
    temp = []
    for i in row['分词后'].split(' '):
        if '\u4e00' <= i <= '\u9fff' and len(i) > 1:
            temp.append(i)
    pos.iloc[index, 4] = " ".join(temp)
```

其实原因很简单，我先区分一下iloc和loc，写这俩的文章我感觉没有重点强调下面这点：

```python
import pandas as pd

data = [[1, 10, 'A'],
        [2, 20, 'B'],
        [3, 30, 'C']]

df = pd.DataFrame(data, columns=['month', 'price', 'level'])

print(df)
#   month  price level
#0      1     10     A
#1      2     20     B
#2      3     30     C

print(df.iloc[1])
#month     2
#price    20
#level     B

print(df.loc[1])
#month     2
#price    20
#level     B

df = df.drop(1)  # 删除索引为1的行 

print(df)
#   month  price level
#0      1     10     A
#2      3     30     C

print(df.iloc[1])
#month     3
#price    30
#level     C

print(df.loc[1])
# 报错

print(df.loc[2])
#month     3
#price    30
#level     C
```

通过上面这个小实验，可以发现iloc\[index\]，这个index代表着是真正的第index行；loc\[index\]，这个index是代表着索引的标号为index的行。  
所以我上面的代码改成下面这样就可以正确运行了，需要注意的是loc列那里不能写数字，要写列名。这也再次说明：iloc\[row，line\]，行和列都是真正的位置；loc\[row，line\]，这里的行和列可以理解为是个str，loc是找和row和line相同字符所对应的地方。

```python
pos.loc[index, '分词后'] = " ".join(temp)
```