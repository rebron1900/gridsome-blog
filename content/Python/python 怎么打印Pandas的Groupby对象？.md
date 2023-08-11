---
title: python 怎么打印Pandas的Groupby对象？
tags: [python, pandas]
date modified: 2023-08-05 12:57:26
date created: 2022-12-08 11:18:04
---
# python 怎么打印Pandas的Groupby对象？

## 如果直接打印grouby的结果默认是一个对象格式：

```python
print(df.groupby('A'))
<pandas.core.groupby.DataFrameGroupBy object at 0x05416E90>
```

## 国外找到如下资料[^1]：

In Jupyter Notebook, if you do the following, it prints a nice grouped version of the object. The `apply` method helps in creation of a multiindex dataframe.

```python
by = 'A'  # groupby 'by' argument
df.groupby(by).apply(lambda a: a[:])
```

Output:

```python
             A  B
A                
one   0    one  0
      1    one  1
      5    one  5
three 3  three  3
      4  three  4
two   2    two  2
```

If you want the `by` column(s) to not appear in the output, just drop the column(s), like so.

```python
df.groupby(by).apply(lambda a: a.drop(by, axis=1)[:])
```

Output:

```python
         B
A         
one   0  0
      1  1
      5  5
three 3  3
      4  4
two   2  2
```

Here, I am not sure as to why `.iloc[:]` does not work instead of `[:]` at the end. So, if there are some issues in future due to updates (or at present), `.iloc[:len(a)]` also works.

[^1]: [python - How to print a groupby object - Stack Overflow](https://stackoverflow.com/questions/22691010/how-to-print-a-groupby-object)