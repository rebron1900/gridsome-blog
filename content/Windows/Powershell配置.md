---
title: Powershell配置 
tags: [shell, 配置]
date modified: 2023-08-05 12:57:26
date created: 2022-12-09 11:56:51
---
# Powershell配置 
## 一、安装Powershell 
安装方式又很多种，我这里用的官方推荐的winget安装方式[^1]：

```
winget search Microsoft.PowerShell
winget install --id Microsoft.Powershell --source winget
```

## 二、安装oh-my-posh
windows11的话直接用 `Winget` 执行安装命令[^2]就可以了，还是相当方便的

```shell
winget install JanDeDobbeleer.OhMyPosh -s winget
```

## 三、修改配置文件
使用 `notepad $profile` 打开配置文件，在开头部分增加以下代码：

```shell
#配置oh-my-posh自动加载，并且设置主题为 catppuccin_frappe 
oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH\catppuccin_frappe.omp.json" | Invoke-Expression

# 下面是配置自动完成和自动提示
# Shows navigable menu of all options when hitting Tab
Set-PSReadlineKeyHandler -Key Tab -Function MenuComplete
# Autocompletion for arrow keys
Set-PSReadlineKeyHandler -Key UpArrow -Function HistorySearchBackward
Set-PSReadlineKeyHandler -Key DownArrow -Function HistorySearchForward
# auto suggestions
Import-Module PSReadLine
Set-PSReadLineOption -PredictionSource History

```


[^1]: [Windows | Oh My Posh](https://ohmyposh.dev/docs/installation/windows#installation)
[^2]: [在 Windows 上安装 PowerShell - PowerShell | Microsoft Learn](https://learn.microsoft.com/zh-cn/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.3#install-powershell-using-winget-recommended)