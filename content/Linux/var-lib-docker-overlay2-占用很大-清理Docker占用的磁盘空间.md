---
title: /var/lib/docker/overlay2 占用很大，清理Docker占用的磁盘空间
tags: []
date modified: 2023-08-05 12:57:26
date created: 2023-04-16 18:03:17
---
今天收到一个磁盘告警，告警的原因是一台 Jenkins 机器上某个磁盘空间满了。

马上使用 df -h 命令看下使用情况

[![image-20210813170032247](../Rsources/Assets/136c187fb43dad3579daabc9eba5f8bd-image-20210813170032247.png)](https://gitee.com/chensongxia/picture/raw/master/image-20210813170032247.png)

上图是我优化后的截图，告警的时候磁盘使用量已经接近 100%。

上图中看到的 overlay 分区是 Docker 的虚拟文件系统，其真实的文件系统是 /dev/vda1。所以我们要找到是什么原因大量占据了 /dev/vda1。

一般有两种情况。

## 无用的镜像和容器太多[#](#无用的镜像和容器太多)

我们可以使用以下命令大致看下情况

```bash
docker system df -v
```

[![image-20210813170931101](../Rsources/Assets/e872b3e0b0a268708df4c7d66212e376-image-20210813170931101.png)](https://gitee.com/chensongxia/picture/raw/master/image-20210813170931101.png)

```bash
# 用于清理磁盘，删除关闭的容器、无用的数据卷和网络，以及无tag的镜像。
docker system prune
# 可以将没有容器使用 Docker 镜像都删掉。注意，这两个命令会把你暂时关闭的容器，以及暂时没有用到的Docker镜像都删掉了
docker system prune -a
```

## 容器输出的日志太大[#](#容器输出的日志太大)

这种情况往往是容器长时间运行，容器打印了大量的日志未清理，占据了大量磁盘空间。比如之前运行的一个Jenkins容器，运行几个月后，打印的日志占了近10个G的磁盘。这种情况下清理日志文件就行了。

容器的日志文件在/var/lib/docker/containers/{containerId}下。

```lua
[root@i-h8v5dv1n 55406a3ac6f4a59555897c606677201853973f4266c32284eeb8274682fd099d]# ls -al
total 512
drwx-----x 4 root root   4096 Feb  8 17:57 .
drwx-----x 4 root root   4096 Feb  8 17:54 ..
# -json.log就是日志文件
-rw-r----- 1 root root 478546 Feb  8 18:05 55406a3ac6f4a59555897c606677201853973f4266c32284eeb8274682fd099d-json.log
drwx------ 2 root root   4096 Oct 28 15:01 checkpoints
-rw------- 1 root root   4911 Feb  8 17:57 config.v2.json
-rw-r--r-- 1 root root   1782 Feb  8 17:57 hostconfig.json
-rw-r--r-- 1 root root     13 Feb  8 17:57 hostname
-rw-r--r-- 1 root root    174 Feb  8 17:57 hosts
drwx-----x 2 root root   4096 Oct 28 15:01 mounts
-rw-r--r-- 1 root root    131 Feb  8 17:57 resolv.conf
-rw-r--r-- 1 root root     71 Feb  8 17:57 resolv.conf.hash
```

可以删除日志文件，也可调整应用程序让打印的日志保持在某种大小。

## 日志、大文件占用了 /dev/vda1 分区[#](#日志大文件占用了-devvda1-分区)

还有一种情况就是 一些日志文件，大文件占用了 /dev/vda1 分区。这个分区一般是挂载在 “/” 下面。

所以我们可以重点关注下面几个目录：

*   /var/tmp
*   /var/log
*   /root