---
title: 右键菜单，用VSCode打开文件和文件夹
tags: [Window, 注册表]
date modified: 2023-08-05 12:57:26
date created: 2022-12-09 16:01:02
---
# 右键菜单，用VSCode打开文件和文件夹
  
## 修改注册表

#### 右键打开文件

1, `Win+R` 打开运行，输入`regedit`，打开`注册表`，找到`HKEY_CLASSES_ROOT\*\shell`分支，如果没有shell分支，则在\*下点击右键，选择“`新建`－`项`”，建立shell分支。

2, 在shell下新建“`VisualCode`”项，在右侧窗口的“**默认**”双击，在数据里输入“`用VSCode打开`”。~这是右键上显示的文字，可以随便写，只是为了方便查看~

3, 在“`VisualCode`”下再新建`Command`项，在右侧窗口的“**默认**”键值栏内输入程序所在的安装路径，我的是：`"D:\anzhuang\Microsoft VS Code\Code.exe" "%1"`。**其中的%1表示要打开的文件参数**。

4, 配置缩略图。在`VisualCode`项上新建`可扩充字符串值`，命名为`Icon`，双击，把`"D:\anzhuang\Microsoft VS Code\Code.exe"`放进数据就可以了。

5, 关闭注册表，即可生效。

![](26df70d76ebc8d35baf83e14b87b55f2-17855471-47d477f373b0e009.png)

注册表设置

![](0e972ae07209cb979fefbe4395376bed-17855471-1cb50ff689c88e81.png)

Command 设置

* * *

#### 右键打开文件夹

1, `Win+R` 打开运行，输入`regedit`，打开`注册表`，找到`HKEY_CLASSES_ROOT\Directory\shell`分支

2, 同上面的2一样，数据内的值为“`用VSCode打开文件夹`”

3、4、5、步骤完全一样，不再重复说明了。

  

![](7f60b8ac9a26784660ec5979c96ea122-17855471-8c00684b0394661c.png)

image.png

  

![](cddbd16f64cd02b263fe0de475998eb5-17855471-e686340f32d87aeb.png)

image.png

* * *

#### 右键文件夹空白处，打开文件夹

1.  `Win+R` 打开运行，输入`regedit`，打开`注册表`，找到`HKEY_CLASSES_ROOT\Directory\Background\shell\`分支

2、同上面的2完全一样

3、同上，把 `%1` 改为`%V`，例如：`"D:\anzhuang\Microsoft VS Code\Code.exe" "%V"`

4、5同上，完全一样

  

![](e35837c85315033316e1ffdebffcf59d-17855471-59e59d9242c9ab9b.png)

image.png

![](cb54fd435fc19ebe03c860601f30dbbc-17855471-50db5976fb405d45.png)

注意是 “%V”

##### 最终效果如下：

![](24ffe9ec8906d27ed45cf29b5f9d17fa-17855471-abd0793f346b7de2.png)

* * *