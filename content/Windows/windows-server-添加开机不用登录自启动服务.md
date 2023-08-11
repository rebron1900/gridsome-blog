---
title: windows server 添加开机不用登录自启动服务
tags: [windows]
date modified: 2023-08-05 12:57:27
date created: 2023-05-24 13:15:32
---

**服务器管理器  ~>  工具（右上角） **~> 任务计划程序  **~> 创建任务******

![](Rsources/Assets/e44a697eb34dd2ea2fbc7ef8b0bd36a6-6ac2f774b3cc4444b700f1f3e0262954.png)

设置不登录可运行

 ![](Rsources/Assets/70364ec67c5b2ff9cd30a2aff417c5b5-9218b36db1e84d7baafb31a30a29d6b2.png)

设置服务器启动时运行：

![](Rsources/Assets/3285497a6a5f870d764701c23ef43380-96f4549350304ca88d62461ac34598a3.png)

指定自启动脚本目录：

![](Rsources/Assets/21c494e71f9c1bcdf00945216f417451-cdadd7a9d221458b9a6a2a3b188c13e7.png)

启动设置：

![](Rsources/Assets/6209fcf7375915038cc1b40711d2a540-980af3fb4ba5482bada2b26c5112191f.png)

上述都设置完成后[重启服务器](https://so.csdn.net/so/search?q=%E9%87%8D%E5%90%AF%E6%9C%8D%E5%8A%A1%E5%99%A8&spm=1001.2101.3001.7020)，若预设的服务未启动，可以继续到计划中去查看执行情况：

![](Rsources/Assets/47c3780d8d7c3f99dfa91568709b0efe-78e3304afcaf4f198c30a88c0f1d426f.png)

上图为正常执行的结果，若执行报错“任务尚未运行（0x41303）”的状态

打开“本地安全策略->安全设置->本地策略->[用户权限](https://so.csdn.net/so/search?q=%E7%94%A8%E6%88%B7%E6%9D%83%E9%99%90&spm=1001.2101.3001.7020 "用户权限")分配”：  
![在这里插入图片描述](Rsources/Assets/5b332e5be563fe541cd48e5f6ab24e5e-20190510122129543.png)  
2、在右侧列表双击“作为批处理作业登录”：  
![在这里插入图片描述](Rsources/Assets/00a7989442199dcf38dcb204eef6539e-20190510122053406.png)  
点击“添加用户或组”按钮，将执行批处理作业的用户添加进去。