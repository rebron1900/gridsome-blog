---
title: Python动态参数的使用
tags: [python]
date modified: 2023-08-05 12:57:26
date created: 2022-12-22 14:41:39
---
# Python动态参数的使用
## 1\. ' \* ' 的作用

*   用在**动态参数**前，打包多个参数并将其转化为**元组**

```go
def func(*args):
    print(args)

func(1, 2, 3)  # (1, 2, 3)
```

输入参数为`1, 2, 3`，最后返回的结果是一个元组 `(1, 2, 3)`。

*   用在**可迭代对象**前，进行自动解包转化为多个**单变量参数**

```swift
def func(a, b, c):
    print(a, b, c)

args = [1, 2, 3]
func(*args)  # 1 2 3
```

输入参数为一个列表`[1, 2, 3]`，解释器自动进行解包然后分别传递给3个变量。

## 2\. ' \*\* ' 的作用

*   用在**动态参数**前，打包多个赋值形式的参数并将其转化为**字典**

```go
def func(**kwargs):
    print(kwargs)

func(a=1, b=2, c=3)  # {'a': 1, 'b': 2, 'c': 3}
```

函数接收类似于关键参数一样赋值形式的多个实参，并返回一个字典。

*   用在**字典**前，解包字典中的数据项作为键值参数传给函数

```go
def func(a, b, c):
    print(a, b, c)

kwargs = {'a': 1, 'b': 2, 'c': 3}
func(**kwargs)  # 1 2 3
```

## 3\. 参数类型

*   **位置参数**

所有参数的顺序必须一一对应，且数量一致。

```swift
def func(a, b, c):
    print(a, b, c)

func(1, 2, 3)  # 1 2 3
```

*   **关键字参数**

函数调用通过键值对形式加以指定。**关键字参数之间不存在先后顺序；有位置参数时，位置参数必须在关键字参数的前面。**

```swift
def func(a, b, c):
    print(a, b, c)

func(a=1, b=2, c=3)    # 1 2 3
func(b=2, c=3, a=1)    # 1 2 3
func(4, b=5, c=6)      # 4 5 6
# 错误的调用方式
func(a=4, b=5, 6)      # SyntaxError: positional argument follows keyword argument
```

*   **默认参数**

为参数提供默认值，调用函数时可传可不传。**所有位置参数必须放在默认参数前面。**

```go
# 正确的定义方式
def func(a, b=2):
    print(a, b)

func(1)     # 1 2
func(1, 3)  # 1 3

# 错误的定义方式
def func(a=1, b):
    print(a, b)  # SyntaxError: non-default argument follows default argument
```

# 4\. ' \*args ' 与 ' \*\*kwargs '

定义函数时，如果不确定调用的时候会传递多少个参数，可以打包位置参数或者关键字参数来进行参数传递。

*   **位置传递**

```go
def func(*args):
    print(args)

func(1)        # (1,)
func(1, 2)     # (1, 2)
func(1, 2, 3)  # (1, 2, 3)
```

*   **关键字传递**

```go
def func(**kwargs):
    print(kwargs)

func(a=1)            # {'a': 1}
func(a=1, b=2)       # {'a': 1, 'b': 2}
func(a=1, b=2, c=3)  # {'a': 1, 'b': 2, 'c': 3}
```

**注意：`*`和`**`只有在传参时才有用。**

```bash
# 错误的使用方法
args = (1,2,3)
a, b, c = *args  # SyntaxError: can't use starred expression here
```

## 5\. 参数混合使用

**函数定义和调用时的参数类型必须一致；位置参数放在`*args`参数前，`*args`参数放在`**kwargs`参数前，`**kwargs`参数放在最后。**

```go
# 位置参数 默认参数 *args **kwargs
def func(a, b, c=0, *args, **kwargs):
    print(a, b, c, args, kwargs)

func(1, 2, m=7, n=8)              # 1 2 0 () {'n': 8, 'm': 7}
func(1, 2, 3, 4, 5, 6, m=7, n=8)  # 1 2 3 (4, 5, 6) {'m': 7, 'n': 8}

# 位置参数 *args 默认参数 **kwargs
def func(a, b, *args, c=0, **kwargs):
      print(a, b, c, args, kwargs)

func(1, 2, 3, 4, 5, 6, m=7, n=8)       # 1 2 0 (3, 4, 5, 6) {'m': 7, 'n': 8}
func(1, 2, 3, 4, 5, 6, c=9, m=7, n=8)  # 1 2 9 (3, 4, 5, 6) {'m': 7, 'n': 8}
```