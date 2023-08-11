---
title: windows下使用makefile
tags: []
date modified: 2023-08-05 12:57:27
date created: 2023-02-26 19:39:24
---
# windows下使用makefile
1      Makefile

一个工程中的源文件不计其数，其按类型、功能、模块分别放在若干个目录中，makefile定义了一系列的规则来指定，哪些文件需要先编译，哪些文件需要后编译，哪些文件需要重新编译，甚至于进行更复杂的功能操作，因为 makefile就像一个 [Shell脚本](http://baike.baidu.com/view/1440787.htm)一样，其中也可以执行操作系统的 [命令](http://baike.baidu.com/subview/446604/12517945.htm)。

2      MinGW

MinGW，是Minimalist  [GNU](http://baike.baidu.com/view/36272.htm)forWindows的缩写。它是一个可自由使用和自由发布的Windows特定 [头文件](http://baike.baidu.com/view/668911.htm)和使用GNU工具集导入库的集合，允许你在 [GNU](http://baike.baidu.com/view/36272.htm)/ [Linux](http://baike.baidu.com/view/1634.htm)和 [Windows](http://baike.baidu.com/view/4821.htm)平台生成本地的Windows程序而不需要第三方C运行时（C Runtime）库。MinGW 是一组包含文件和端口库，其功能是允许控制台模式的程序使用微软的标准C运行时（C Runtime）库（ [MSVCRT.DLL](http://baike.baidu.com/view/665378.htm)）,该库在所有的 NT OS 上有效，在所有的  [Windows 95](http://baike.baidu.com/view/41207.htm)发行版以上的 Windows OS 有效，使用基本运行时，你可以使用 GCC 写控制台模式的符合美国标准化组织（ANSI）程序，可以使用微软提供的 C 运行时（C Runtime）扩展，与基本运行时相结合，就可以有充分的权利既使用 CRT（C Runtime）又使用 Windows [API](http://baike.baidu.com/view/16068.htm)功能。

3      下载地址：

 [https://sourceforge.net/projects/mingw/files/latest/download?source=files](https://sourceforge.net/projects/mingw/files/latest/download?source=files)

mingw-get-setup.exe

l  安装选上C和C++编译器。

l  将路径C:\\MinGW\\bin中的mingw32-make.exe改成make.exe

l  将路径C:\\MinGW\\bin加到PATH环境变量上。

在控制台输入测试，如下：

gcc

gcc: fatal error: no input files

compilation terminated.

make

C:\\MinGW\\bin