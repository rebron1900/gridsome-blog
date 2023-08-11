---
title: vscode搭配conda切换python版本
tags: [python]
date modified: 2023-08-05 12:57:26
date created: 2022-12-18 19:03:14
---
# vscode搭配conda切换python版本
## 问题

vs code中不切换[conda](https://so.csdn.net/so/search?q=conda&spm=1001.2101.3001.7020)环境会导致有些安装在特定虚拟环境的软件包无法被导入  
会出现如下错误

```bash
Exception has occurred: ModuleNotFoundError
```

![在这里插入图片描述](Rsources/Assets/37612b55b4b89c6df175413200a0c20c-20210307205303596.png)

## 解决

vs code中选择切换conda环境的方法  
ctrl+shift+p出现命令栏  
![在这里插入图片描述](Rsources/Assets/c18fcc6040963b105eacfaa5a165ebd0-20210307205335314.png)

后输入

```bash
Python：Select Interpreter
```

然后就能选择想要选的环境了

![在这里插入图片描述](Rsources/Assets/aa84dfae6753ec61e48dad1ff68dc816-20210307205355630.png)

https://www.cnblogs.com/it-tsz/p/9312151.html