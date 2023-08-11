---
title: Windows Server 2016中文版安装docker的详细步骤
tags: []
date modified: 2023-08-05 12:57:26
date created: 2023-01-14 15:28:10
---
# Windows Server 2016中文版安装docker的详细步骤
## 实验环境：

一台Windows Server 2016中文版，关闭防火墙，IP地址192.168.10.1/24

还需要一张网卡，需要连接外网，给Windows Server 2016下载更新文件 12

## 下载更新

> sconfig                # 打开参数菜单

![](Rsources/Assets/d10571585cd029d07b8b7be165a71108-2022071510284530.png)

下载最新版的安装包，安装并重启

![](Rsources/Assets/558ae7f429125e25199f16a88a9a9b22-2022071510284531.png)

 选择数字6，下载并安装更新，弹出黑色对话框后，选择A

![](Rsources/Assets/966c6db199f07f65ebb54b7048452313-2022071510284532.png)

 让它下载更新并重启，此操作必须进行，否则后续安装会失败或者各种报错类似于linux各种软件版本依 赖

打开 powershell 以管理员方式运行

![](Rsources/Assets/c0e9db97ec426be85161d78d01c08f58-2022071510284533.jpg)

![](Rsources/Assets/a87c8650f4c9c30e2b64c5a3a57e9182-2022071510284534.png)

 由于Windows Server 2016中文版不支持安装的NuGet，需要使用命令将原有的Tls一级，修改成二 级，才能安装NuGet服务

```plain
[System.Net.ServicePointManager]::SecurityProtocol =  
[System.Net.SecurityProtocolType]::Tls12; #修改成二级
```

![](Rsources/Assets/0f26799e36eb51e2cfb0bd7fa613717a-2022071510284635.png)

## 安装NuGet服务 

```plain
Install-PackageProvider -Name NuGet -MinimumVersion 2.8.5.201 -Force
#指定 NuGet安装包最小版本
```

![](Rsources/Assets/e397a6fe4208eab76463a22575fc90a9-2022071510284636.png)

```plain
Install-Module -Name DockerMsftProvider -Force #安装docker模块
```

![](Rsources/Assets/d222d99e1b11eb1b01804f63698b8bae-2022071510284637.png)

```plain
Install-Package -Name docker -ProviderName DockerMsftProvider -Force #安装 docker包
```

![](Rsources/Assets/db74754324f5be23f10e841a0f627e56-2022071510284638.png)

 注意：如果这一步没有安装成功的话，报错如下

![](Rsources/Assets/eafcbc6f6617d97850ce7debd471c1f9-2022071510284639.jpg)

 去C盘下面找到这个路径，如果是空白的，需要下载补丁包

![](Rsources/Assets/e198ba1f41316bcc7014a11a8819d116-2022071510284740.jpg)

![](Rsources/Assets/a975e897b871eb5844226043918f74d5-2022071510284741.png)

```plain
https://dockermsft.blob.core.windows.net/dockercontainer/docker-1-12-2-cs2-ws-beta.zip
以上是补丁包文件，把它下载下来后放入刚刚空白的文件夹下
```

![](Rsources/Assets/578ce1e995a095d31b6c5cf470ea24f8-2022071510284742.png)

 然后重新运行上面的docker包就可以安装了

```plain
Restart-Computer -Force #安装完成后重启计算机生效
```

![](Rsources/Assets/b26e5ff301aa1fde910f6cd9a0fbb056-2022071510284743.png)

 重启好了之后，打开powershell输入`docker info`

![](Rsources/Assets/c4e5dc8d95d36e53e31a76a0a2e10b9e-2022071510284744.jpg)

![](Rsources/Assets/dbe90a144c77259f08ae5e40e9b6d5d6-2022071510284745.png)

```plain
docker version #查看docker版本
```

![](Rsources/Assets/0861d539f1b8020656c5fa417f473d8b-2022071510284846.jpg)

docker安装就完成了

## 总结

到此这篇关于Windows Server 2016中文版安装docker的文章就介绍到这了,更多相关Windows Server安装docker内容请搜索脚本之家以前的文章或继续浏览下面的相关文章希望大家以后多多支持脚本之家！

**您可能感兴趣的文章:**

*   [windows server 2016安装docker的方法步骤](https://www.jb51.net/article/163501.htm "windows server 2016安装docker的方法步骤")
*   [Windows Server 2016 安装 Docker的过程及遇到问题](https://www.jb51.net/article/223961.htm "Windows Server 2016 安装 Docker的过程及遇到问题")
*   [Windows Server 2012 R2 安装 Docker的详细步骤](https://www.jb51.net/article/245184.htm "Windows Server 2012 R2 安装 Docker的详细步骤")