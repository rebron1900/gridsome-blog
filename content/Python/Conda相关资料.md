---
title: Powershel下Conda安装和配置
tags: [python, conda, 配置]
date modified: 2023-08-05 12:57:26
date created: 2022-12-07 17:13:54
---
# Powershel下Conda安装和配置
~~我在考虑要不要把Nodejs、Python、Ruby都用Conda来管理。~~
~~不过先看看相关资料。~~
已经用上了，真香。

## 关于Conda的发行版本
- conda是一个包和环境管理工具，它不仅能管理包，还能隔离和管理不同python版本的环境。类似管理nodejs环境的nvm工具。
- anaconda和miniconda都是conda的一种发行版。只是包含的包不同。
- anaconda包含了conda、python等180多个科学包及其依赖项，体格比较大。但很多东西你未必用到，所以才有mini版。
- miniconda是最小的conda安装环境，只有conda+python+pip+zlib和一些其他常用的包，体格非常迷你。
- pip也叫包管理器，和conda的区别是，pip只管理python的包，而conda可以安装所有语言的包。而且conda可以管理python环境，pip不行。

## 安装Conda 
我这里选择安装miniconda，conda完全安装似乎要3个多G，没有必要。
我使用的是 `Winget` 安装（不得不说Winget是挺方便的），命令如下：

```shell
winget install miniconda3
```

### 常用命令

```shell
clean        Remove unused packages and caches.
compare      Compare packages between conda environments.
config       Modify configuration values in .condarc. This is modeled after the git config 
                    command. Writes to the   user .condarc file (C:\Users\me\.condarc) by default.
create       Create a new conda environment from a list of specified packages.
help         Displays a list of available conda commands and their help strings.
info         Display information about current conda install.
init         Initialize conda for shell interaction. [Experimental]
install      Installs a list of packages into a specified conda environment.
list         List linked packages in a conda environment.
package      Low-level conda package utility. (EXPERIMENTAL)
remove       Remove a list of packages from a specified conda environment.
uninstall    Alias for conda remove.
run          Run an executable in a conda environment. [Experimental]
search       Search for packages and display associated information. The input is a MatchSpec, 
                   a query language     for conda packages. See examples below.
update       Updates conda packages to the latest compatible version.
upgrade      Alias for conda update.
env list       查看所有环境
```

等进度条走完就可以用 `conda` 关键字使用了。
### 初始化
window下用powershell安装后会出现无法切换conda环境的问题，而且不会报错，但是你无法切换环境。我找了很多资料[^1]后发现要使用 `init` 命令进行初始化，等执行完后。

```
conda init powershell
```

### 创建虚拟环境
使用 `create` 命令就可以创建虚拟环境了，`-n` 设置虚拟环境名称。 后面可以指定安装各种环境包，可以同时安装多个环境。
```shell
conda create -n vsdev python=3.8.6 nodejs=18.12.1
```

### 激活虚拟环境
使用`activate`激活虚拟环境 

```shell
conda activate vsdev
```

### 安装
建议统一使用conda来管理包，原因可以参见 [pip install 和conda install的区别](pip%20install%20和conda%20install的区别.md) 
```shell
conda install nodejs
conda install pymssql
```


[^1]: [conda init — conda 22.11.1.post4+22d01b513 documentation](https://docs.conda.io/projects/conda/en/latest/commands/init.html?highlight=init)