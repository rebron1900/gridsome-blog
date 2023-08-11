---
title: VSCode配合Pyenv
tags: [python, vscode, pyenv]
date modified: 2023-08-05 12:57:26
date created: 2022-12-07 16:47:43
---
# VSCode配合Pyenv
最近安装了Pyenv来管理python环境，不过在配合vscode的时候发现vscode默认调用的是我以前安装的3.10.5这个版本，查找了相关资料[^1]后解决
1. vscode安装python插件
2. 安装pyenv-win，推荐使用chocolatey安装
3. pyenv安装需要的python版本，安装后需要pyenv rehash
4. 创建工程文件夹
5. 在文件夹中输入以下命令生成.venv文件
 ```shell		
 pyenv local 3.8.2  #版本根据自己需要的python版本替换
 python -m venv .venv
```
6. 在vscode 右下角选择python版本即可

   ![](https://gcdn.1900.live/note/assets20221207165020.png)

[^1]:[windows下，vscode配合pyenv-win使用python虚拟环境_赵钱孙李葱的博客-CSDN博客](https://blog.csdn.net/u013566243/article/details/111398286)