---
title: 手动安装wsl2-ubuntu20(指定安装位置)--小亮yuu
tags: [windows]
date modified: 2023-08-05 12:57:26
date created: 2023-01-15 11:33:36
---
# 手动安装wsl2-ubuntu20(指定安装位置)--小亮yuu
系统版本: win10家庭中文版-20H2

1、检查windows版本

    若要更新到 WSL 2，需要运行 Windows 10。  
        对于 x64 系统：版本 1903 或更高版本，采用 内部版本 18362 或更高版本。  
        对于 ARM64 系统：版本 2004 或更高版本，采用 内部版本 19041 或更高版本。  
        低于 18362 的版本不支持 WSL 2。 使用 Windows Update 助手更新 Windows 版本。  
    小亮的是x64版本20H2，可以安装wsl2。

原文地址: https://www.cnblogs.com/xiaoliangyuu/p/15506352.html

2、需要先启用“适用于 Linux 的 Windows 子系统”可选功能，然后才能在 Windows 上安装 Linux 分发。以管理员身份打开 PowerShell 并运行：

```powershell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

3、安装 WSL 2 之前，必须启用“虚拟机平台”可选功能。 计算机需要虚拟化功能才能使用此功能。 以管理员身份打开 PowerShell 并运行：

```powershell
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

4、重启计算机

5、安装 wsl\_update\_x64. msi。下载地址: [适用于 x64 计算机的 WSL2 Linux 内核更新包](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)
Win10 系统下安装 TortoiseSvn、Node. js 时（. msi 后缀的安装文件），在点击安装时老是提示 2503，2502 错误，因此无法安装上。

搜索了下一般都提到是权限不够引起的该问题。但是右键点击时发现msi是没有“以管理员身份运行”的选项的，而使用“取得管理员权限”选项也没有任何作用。

解决办法：

管理员身份运行模式的命令行的窗口了，输入如下的命令：
```bash
msiexec /package "your msi file path"
```

![](Rsources/Assets/Pasted%20image%2020230115113608.png)

然后就弹出软件的安装窗口，一路安装，就OK了。

6、将 WSL 2 设置为默认版本

```powershell
wsl --set-default-version 2
```

7、下载发行版，可以参考 [下载发行版](https://docs.microsoft.com/zh-cn/windows/wsl/install-manual#downloading-distributions)，小亮这里下载的是 Ubuntu 20.04

8、将下载的文件复制到想要安装的位置,修改文件后缀名: Ubuntu\_2004.2020.424.0\_x64.appx -> Ubuntu\_2004.2020.424.0\_x64.zip

9、解压文件，并双击 ubuntu2004.exe 安装。安装成功后设置用户名密码,安装成功。可以看到在安装目录下，有一个 \*.vhdx 文件，即是linux的磁盘镜像文件。

原文地址: https://www.cnblogs.com/xiaoliangyuu/p/15506352.html

10、其他

     10.1 验证wsl是否是 wsl2 的命令: wsl -l -v

     10.2 启动方法。

          方法一:命令行:cmd进入命令行。输入 wsl 进入。  

          方法二:双击 ubuntu2004.exe 启动  

          方法三:开始菜单启动: 安装到开始菜单:随便找一个开始菜单应用 右键-打开所在文件夹 在start menu文件夹下添加ubuntu2004.exe的快捷方式

     10.3 卸载 1、wsl --unregister <要卸载的发行版>   2、删除安装目录