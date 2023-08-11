---
title: Windows11下安装Smartdns
tags: []
date modified: 2023-08-05 12:57:26
date created: 2023-01-15 16:28:22
---
### WSL
---

1.  安装 WSL
    
    安装 WSL 运行环境，发行版本选择 Ubuntu 系统为例。安装步骤请参考 [WSL 安装说明](https://docs.microsoft.com/zh-CN/windows/wsl/install)
    
2.  安装 SmartDNS
    
    下载适用于 WSL 的安装包，并解压到如 D 盘根目录。解压后目录如下：
    
    D:\SMARTDNS
    ├─etc
    │  ├─default
    │  ├─init.d
    │  └─smartdns
    ├─package
    │  └─windows
    ├─src
    └─systemd
    
    双击 `D:\smartdns\package\windows` 目录下的 `install.bat` 进行安装。要求输入密码时，请输入 `WLS ubuntu` 的密码。
    
3.  修改配置
    
    用记事本等打开 `D:\smartdns\etc\smartdns` 目录中的 `smartdns.conf` 配置文件配置 SmartDNS。
    
    一般情况下，只需要增加 `server [IP]:port` 和 `server-tcp [IP]:port` 配置项， 尽可能配置多个上游DNS服务器，包括国内外的服务器。
    
    具体配置请参考[配置文件说明](https://github.com/pymumu/smartdns#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E8%AF%B4%E6%98%8E)。 `smartdns.conf` 配置包含如下基本内容：
    
    ```
    # 指定监听的端口号
    bind []:53 
    # 指定上游服务器
    server 1.1.1.1
    server-tls 8.8.8.8
    # 指定域名规则
    address /example.com/1.2.3.4
    domain-rule /example.com/ -address 1.2.3.4
    ```
    
4.  重新加载配置
    
    双击 `D:\smartdns\package\windows` 目录下的 `reload.bat` 进行重新加载。要求输入密码时，请输入 `WLS ubuntu` 的密码。
    
5.  将 DNS 请求转发到 SmartDNS 解析
    
    将 Windows 的默认 DNS 服务器修改为 `127.0.0.1`，具体步骤参考 Windows [更改 TCP/IP 设置](https://support.microsoft.com/zh-cn/help/15089/windows-change-tcp-ip-settings)。
    
6.  检测服务是否配置成功
    
    执行
    
    $ nslookup -querytype=ptr smartdns
    
    查看命令结果中的 `name` 是否为 `smartdns` 或你的主机名，如果是则表示生效
    
    $ nslookup -querytype=ptr smartdns
    Server:         192.168.1.1
    Address:        192.168.1.1#53
    
    Non-authoritative answer:
    smartdns        name = smartdns.