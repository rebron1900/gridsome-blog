---
title: Windows系统使用make 执行makefile 指令进行项目启动,编译,运行 - 腾讯云开发者社区-腾讯云
tags: []
date modified: 2023-08-05 12:57:27
date created: 2023-02-26 19:35:18
---
# Windows系统使用make 执行makefile 指令进行项目启动,编译,运行 - 腾讯云开发者社区-腾讯云
最近需要开始开启一个go语言写的项目,项目开启需要使用make指令,但在windows上需要配置一些东西.

使用make指令在windows上推荐安装**mingw 官网下载** [https://osdn.net/projects/mingw/releases/](https://osdn.net/projects/mingw/releases/)

![](Rsources/Assets/fc78afaafb6bbb0bf7409888c6211d9e-64dbdfd5dc78638b31c51cbef1343d2e.png)

点击下载,下载后直接安装, 安装目录选默认的

![](Rsources/Assets/52fa76709a4e8a0c5ded603db97567d0-91dfe8a331d8825bc4357c00fd5dd471.png)

![](Rsources/Assets/7b49bd28eb1143c7f2d35d164d8f95f6-3fc04aa58deb734f283a220fa7647f46.png)

![](Rsources/Assets/d0fa88b64c26744e402ee9365d5202b0-eb962f5b1293b6b9753a294069d3fcd4.png)

![](Rsources/Assets/54acbeed85fd9fca9b5c49cbf38efd99-240e3a90ee80ee7a8646ad70409c16fa.png)

![](Rsources/Assets/fd9cb31d88f13a6afc78c95da81db27a-b4368ddc8ab160c0f60adf89c7141cde.png)

![](Rsources/Assets/643e7a1fdfe4b541cf17e07ba0ee1231-5990000b812b4f9abb399b72c22a0f03.png)

![](Rsources/Assets/9d872b3526aee155143221d1f6f5aa61-0878b22061269fa5ba72d3baa373f0f8.png)

![](Rsources/Assets/918b4c04104d28ac128e054238ebe6bf-aee161690263de4c451b0cd194f75da6.png)

在minggw的bin目录里将

很关键的一步 到此 make的指令就能在windows使用了

**mingw32-make.exe 复制一份修改为 make.exe**

本文参与 [腾讯云自媒体分享计划](https://cloud.tencent.com/developer/support-plan) ，欢迎热爱写作的你一起参与！

本文分享自作者个人站点/博客：https://blog.csdn.net/github\_35631540?spm=1011.2124.3001.5343[复制](javascript:)

如有侵权，请联系 cloudcommunity@tencent.com 删除。