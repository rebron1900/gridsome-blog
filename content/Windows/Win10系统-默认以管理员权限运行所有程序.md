---
title: Win10系统 默认以管理员权限运行所有程序
tags: [windows]
date modified: 2023-08-05 12:57:26
date created: 2023-01-15 14:18:07
---
# Win10系统 默认以管理员权限运行所有程序
非原创，用的是网址 [win10如何默认所有软件以管理员身份运行－系统城](https://link.zhihu.com/?target=http%3A//www.xitongcheng.com/jiaocheng/win10_article_56741.html) 的方法。

百度上类似的修改管理员方式有很多，但都不是很彻底，有时会出现两个管理员共存，你还要看另一个管理员心情执行操作的情况。

具体方法如下:

一、 win+R, 输入 regedit 运行注册表

二、 在注册表地址栏输入 HKEY\_LOCAL\_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\System

![](Rsources/Assets/0b304e6512084cf81f84bd31aa1bd5bc-v2-ee88cfa882eb793786ebfb3c2c43ea62_720w.webp)

三、 选中左边System文件夹，在右侧找到 EnableLUA，将值从1改为0

![](Rsources/Assets/cf5bbb3b9fb15dd0e65b28110146e3ee-v2-6b41ca1e8c1d78baf9431dbbb01db548_720w.webp)

四、 重启系统即可，然后就可以看到管理员就变成了你现操作的系统。执行的各种程序也都是直接以管理员权限执行

![](Rsources/Assets/b3e2fa6c8f6f5eab75ffebd236ff4d8f-v2-6872fb7588ee8d8d7f2d2f9ea7588cdc_720w.webp)

这样就不会出现百度的一些管理员修改方法，修改后还是要右键点管理员运行的情况。

网上还有些方法因为家庭版没组策略表不能执行（不过家庭版也可以可以用[https://jingyan.baidu.com/article/bea41d43dec21ab4c41be645.html](https://link.zhihu.com/?target=https%3A//jingyan.baidu.com/article/bea41d43dec21ab4c41be645.html) 的方法添加组策略表就是）

本文的这个方法是改注册表，家庭版可以直接用。

再次申明此文章非原创，只是分享出来给饱受管理员权限困扰的大家看看。每次重装系统我都要百度找各种方法，这次安心收藏起来躺备忘录，省得以后再一直百度找这个了。