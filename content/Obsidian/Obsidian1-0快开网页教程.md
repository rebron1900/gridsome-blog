---
title: Obsidian1.0快开网页教程
tags: [Obsidian]
date modified: 2023-08-05 12:57:26
date created: 2022-12-14 10:57:43
---
# Obsidian1.0快开网页教程
> 需要Obsidian1.0版本及以上

## 所需插件

**如何下载和手动安装插件方法在最后。**

*   [**QuickAdd**](https://github.com/chhoumann/quickadd/releases)
*   **[obsidian-web-browser](https://github.com/Trikzon/obsidian-web-browser/releases)**
*   插件发布页： [https://github.com/Trikzon/obsidian-web-browser/releases](https://github.com/Trikzon/obsidian-web-browser/releases)
*   **[Commander](https://github.com/phibr0/obsidian-commander/releases)**

## 设置流程

### 脚本设置

新建txt文件，将下面代码粘贴到txt文件并将`https://www.notion.so/` 替换想要的`网址`后保存。

`module.exports = startob  async function startob () {  window.open('https://www.notion.so/') }`

重命名为\*\*.js文件并放到Obsidian主库中的任意位置。

### Quickadd

*   添加宏

![notion image](../../Rsources/Assets/5b686aae5196bacf8c74531f031f14c6-https%3A%2F%2Fs3.us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1e17fec9-cda6-494a-8575-d5d44f5fca5e%2FUntitled.png)

*   配置宏，点击Configure

![notion image](../../Rsources/Assets/4969aa7a3207bc01014441113bc6dcce-https%3A%2F%2Fs3.us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6b02d976-7651-4a1f-8d0e-1a5c7570774e%2FUntitled.png)

在User Scripts选择上步创建的脚本，点击Add添加。

![notion image](../../Rsources/Assets/454b8abe034e746af43a3b26baa6a151-https%3A%2F%2Fs3.us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F84a6aa27-18e8-4db8-8b73-61f58a19ee03%2FUntitled.png)

*   添加命令

![notion image](../../Rsources/Assets/147a6aa70d491ee2488563688c1f3692-https%3A%2F%2Fs3.us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff0f66162-9627-4855-938d-8646e4ca563f%2FUntitled.png)

![notion image](../../Rsources/Assets/5984a79e4641859ed887bf5c2afeadaa-https%3A%2F%2Fs3.us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F63d3a0a2-7d29-4091-a319-a6136dc4e645%2FUntitled.png)

*   配置命令，选择刚创建的宏，然后点击⚡启动即可。

![notion image](../../Rsources/Assets/6e5cdbbca41c5aeee97b0e6292d37285-https%3A%2F%2Fs3.us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fecc47c9b-23c4-477b-9de0-e20fef63ea13%2FUntitled.png)

![notion image](../../Rsources/Assets/b5a235d5fba9b0f6efa418029325d845-https%3A%2F%2Fs3.us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3f072677-6282-4d3f-aee9-06a70dc82501%2FUntitled.png)

### Commander

可选择添加命令到侧边栏、页首、状态栏等位置，还可隐藏不常用的命令。

![notion image](../../Rsources/Assets/1a51893755b864ea360ef5860b1df093-https%3A%2F%2Fs3.us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fab296236-a32d-4b22-b275-06c1812d5676%2FUntitled.png)

选择添加命令，选择配置好的QuickAdd命令设置图标保存即大功告成。

### 插件下载

> 插件在如下网站搜索下载

[Johnny-插件下载地址](https://ob.pory.app/)

### 插件安装

[知乎-如何安装插件](https://zhuanlan.zhihu.com/p/369323836)