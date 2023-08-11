---
title: 【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程
tags: []
date modified: 2023-08-05 12:57:26
date created: 2022-12-09 21:15:42
---
# 【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程
最新原版黑苹果安装教程，图文并茂简单详尽。附带安装工具、原版引导镜像及各电脑EFI驱动合集，图片较多，请耐心等待加载。

远程服务：[点击开始远程](https://macx.top/service)          视频教程：[点击查看视频](https://macx.top/go?_=529b185c99aHR0cHM6Ly93d3cuYmlsaWJpbGkuY29tL3ZpZGVvL0JWMXJmNHkxSDdoTCNyZXBseTUzNTcwMTE3ODk%3D)

## 准备工作：

*  **U盘：** 大于等于16GB的U盘
*   **镜像：** 可引导 macOS 原版镜像
*   **工具：** Etcher（刻录镜像）、DiskGenius（分区、引导）、EFI驱动文件

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图](eadd866b890acdfb27799e52ea40d57a-macx.top-202109-9239.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图")

* * *

**安装工具**获取链接：[https://pan.baidu.com/macx](https://macx.top/go?_=07152b9aaaaHR0cHM6Ly9wYW4uYmFpZHUuY29tL3MvMXB3VVZWbzFVZDR5eE8yOWtfY2tUQnc%3D) 提取码：qs05

**安装镜像**百度网盘：[https://pan.baidu.com/macx](https://macx.top/go?_=fcb818958aaHR0cHM6Ly9wYW4uYmFpZHUuY29tL3MvMUhpU1kySUNYNmFOemIyZVNIclZFUXc%3D) 提取码：macx

**安装镜像**天翼云盘：[https://cloud.189.cn/t/RF7Nj26JF7nq](https://macx.top/go?_=5d47a9b46baHR0cHM6Ly9jbG91ZC4xODkuY24vdC9SRjdOajI2SkY3bnE%3D)

* * *

## **一、刻录镜像**

1、将您的U盘插入电脑，为保证成功，首先将U盘以默认值格式化一次；

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图1](38bdd3aa878be45d1afc0b259d036bfa-1572623875-02b313804e4d4b8.png "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图1")

2.打开balenaEtcher软件，点击“Select image”选择你刚才下载好的安装镜像；

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图2](43c08165cb61890b9490ac55bec107c6-1137b129de735e.png "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图2")

打开balenaEtcher软件

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图3](72ff8c85bd7b93477d33c84be4fdd1c9-193d9e21790e35.png "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图3")

选择下载好的安装镜像

3.然后点击“Select drive”选择你的U盘，如果你直插有一个U盘，软件会自动选择；

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图4](fe7171288f74d101e97599e02819cbce-13f9521bf77ec3.png "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图4")

4.接着点击“Flsh！”开始刻录黑苹果安装镜像到U盘；

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图5](30d5a17ad1351fa86fec288d418e808b-19845e572f3f06.png "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图5")

刻录中。。。

5.刻录完成后会进行一次完整性检测；

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图6](51a9324823d734e16e0f5ca58acef5d9-1657953be28400.png "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图6")

检测中。。。

6.等到提示“Flash Complete！”Successful device 就完成安装镜像的制作了，把U盘弹出并拔出。

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图7](7e58e6c6a855ce74e127522b5aafc468-17e850115e328c.png "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图7")

7.至此，黑苹果镜像就刻录完成！

## 二、制作引导

1.打开分区工具DiskGenius，找到U盘上的OC分区（我们是三分区原版黑苹果镜像，自带Clover、OC与WinPE分区），删除自带的EFI文件。

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图8](147e019e6980aaedaa8c247bf47fa88a-macx.top-202109-9200.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图8")

2.把适合自己电脑EFI引导并拷贝至相应的EFI分区。

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图9](1da5e3ca3680ea4422796f0e81a3ebb1-macx.top-202109-9201.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图9")

这里有我远程安装收集的一些EFI资源（六年老店，辛苦远程，原创合集），集合多种电脑配好的EFI驱动文件，除三代处理器以下或更低配置的电脑，部分更新支持最新Big Sur 11.4，基本主流配置的电脑都有收集，可直接替换使用。

**注：** EFI只有实机安装才能收集，凭空无法配置。网上有流出的旧版资源（~淘宝~、~闲鱼~、~GitHub~），文件不全且年久失修，不保证适合新系统，旧电脑装旧系统勉强可用，新电脑新系统，请**务必**获取最新合集。

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图10](5fd8637f702ee6099c34466c335809cb-1572625648-78547d35833a864.gif "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图10")

## **EFI下载：**

隐藏内容，仅限以下用户组阅读

如果您未在其中，可以升级

**终身会员**

[登录](javascript:) [注册](javascript:)

## **三、制作Mac系统盘**

制作Mac系统盘分为分区安装与整个磁盘安装两种情况，其实大同小异，但问的人很多，这里就都讲一下。分区安装的意思就是我一块磁盘几个分区中的一个用来装Mac系统，跟Windows系统的C盘D盘一样，数据互不影响。整个磁盘安装就是我一整块磁盘都用来装Mac系统，我个人建议，有条件的还是选整个磁盘安装。

PS：鉴于硬盘的设置多种多样，此处仅描述两个常见的分区方案，如您属于其他情况请在[此处查看](https://macx.top/document/partition)

### 3.1 单硬盘装macOS与Windows双系统：

a.计算机右键>管理>磁盘管理

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图13](82603019fa86bfb1164904471387cc38-1572625945-3ca50f1c06e7081.png "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图13")

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图14](9f7a790d7c2e14984428480d168b7b6a-1572659230-43d47a027f54748.png "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图14")

b.首先检查磁盘是否符合要求，磁盘格式必须为GPT格式(GUID)，即右键这个磁盘，“转换为MRB磁盘”为灰色就是GPT格式。

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图15](84a4dcd43ac81f7bf991879d61e494b6-default-img.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图15")

c.另外磁盘不能有小于200M的分区且必须有EFI分区（EFI分区也必须大于200M），满足这两个基本条件后，右键压缩卷（用分区工具查看）。

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图16](84a4dcd43ac81f7bf991879d61e494b6-default-img.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图16")

d.输入压缩大小，根据自己情况及要求输入，最小30G。

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图17](84a4dcd43ac81f7bf991879d61e494b6-default-img.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图17")

e.接下来选中被压缩的分区，右键新建简单卷。

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图18](84a4dcd43ac81f7bf991879d61e494b6-default-img.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图18")

f.然后就一路默认下一步，但注意有一项要选择“**不要格式化这个卷**”；

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图19](84a4dcd43ac81f7bf991879d61e494b6-default-img.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图19")

g.一路默认下一步即可；

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图20](75b5cafd14d931f35782f99cf2dc5318-1572659796-47cf26e2b4ea4f7.png "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图20")

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图21](fc64f535bbf2c489f32c34421b0d8ec0-1572659994-feb03d38827cc93.png "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图21")

**注意**：这一步必须要选“不要格式化这个卷”；

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图22](9d59b22dbcf51290e3e91dca70b2e3a8-1572659901-cf9a45db0af4415.png "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图22")

h.继续默认下一步直至完成；

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图23](7e5f5819aa04d195c6f0a9dedc0c34dd-1572660037-3a3ebc2010e4b1e.png "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图23")

I.最终结果是这样的：

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图24](5a0e72da20ac9a878bb61415080a2c87-1572660116-3cbfa88dec0c097.png "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图24")

### 3.2 单硬盘安装macOS系统

a.整个磁盘只装mac系统，那就删除磁盘所有分区，变成一个全新的磁盘即可。如下图：

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图25](dd6ec1332456cb33544bbe179198d3c7-1572660230-7116318217e9bcd.png "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图25")

b.在系统磁盘管理中会显示未分配：

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图26](5c907c6114c24bef73ef48b9f931825e-1572660376-b182fa6ab292c25.png "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图26")

至此安装盘搞定，黑苹果完成了85%。

## **四、安装系统**

1.设置BIOS，重启按ESC进入BIOS （电脑不同，快按键不一样，BIOS界面也会不同，小编用的是微星的主板）;

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图27](26f3998277d591444dcb3bc1574e4c6d-macx.top-202109-9207.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图27")

2.然后关闭安全启动Secure Boot或者选择其他操作系统（这是微软为了防止安装Windows操作系统的电脑改装其他系统而设置的，不关闭无法启动到引导界面）；

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图28](8a286e936e97117f3553818b8ffdb659-macx.top-202109-9202.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图28")

3.第一启动项选择为U盘启动：

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图29](b28b54574c65a2976e99cc58643866dd-macx.top-202109-9203.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图29")

4.设置U盘的启动项（我们是多引导镜像，所以刻录到U盘会有多个引导）

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图30](06492b86ca832dbc96a858c73c3c1d26-macx.top-202109-9204.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图30")

5.选择到U盘启动中的OC引导启动项（我们镜像设置第二个引导分区为OC引导，反正把U盘启动项都试过，肯定可以去到正确的引导项）

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图31](7198b7dd1b53a58aa2092ea0be0f23c1-macx.top-202109-9205.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图31")

6.设置好保存重启（不同BIOS可能设置的选项有所出入）

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图32](211592d7b836b7ee5ac11a4d2aca8c66-macx.top-202109-9206.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图32")

7.重启进入OC引导界面，选择 install macOS Monterey ，并回车进入；

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图33](8f00d42107f208ad2c2588226a9330fb-macx.top-202109-9208.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图33")

8.过一会儿会进入如下界面，耐心等待进入安装界面（顺利的话5-15分钟，超过一般就是EFI不匹配卡住了）;

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图34](fc9c13ccd388c369e9943ffaba9e1c2e-macx.top-202109-9209.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图34")

PS：有的人可能是跑代码界面，去掉 -v 就是苹果界面了。

9.如果首次进入不是中文界面，点击左上角苹果logo右边第二个选项，修改语言：

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图35](0651ff8ef7cb209c1be99f3dc0ebec06-macx.top-202109-9210.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图35")

10.选择你想使用的语言进行安装系统，也可以装完进入系统再修改语言。

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图36](96baeba4b3e9de1f2a42d43fc5c35a4c-macx.top-202109-9211.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图36")

11.设置好语言后，选择磁盘工具；

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图37](ac878dfbdfdb8b5fd4d05d3f93064328-macx.top-202109-9212.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图37")

12.选中自己做的Mac系统盘，一般名字颜色比较浅，灰色的那个（看清楚千万不要选错）；

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图38](aa990f45e85ecbd60daaf05630768bb0-macx.top-202109-9213.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图38")

13.然后抹掉磁盘，名字随便输，格式选APFS格式，方案GUID；

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图39](4c0949af146c0e92bc6a4221eaf09389-macx.top-202109-9214.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图39")

**提示：**如果摸盘失败，提示空间不足，就是你的磁盘格式没处理好，重新进win修改格式；

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图40](46a48bdd83c1e6ddf242f69c6e69f06b-1572662095-937a5d493526a74.png "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图40")

14.抹掉磁盘之后，关闭“磁盘工具”，选择“安装MAC OS ”;

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图41](e4aea88b0b2a270f2b954b50de40508c-macx.top-202109-9215.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图41")

15.点击【继续】，进入使用条款界面；

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图42](76fc0c1e2bf615d53aedd0e2cd204c6e-macx.top-202109-9216.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图42")

一路同意默认下一步即可；

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图43](f4d486523558908fdc0088319e3b1278-macx.top-202109-9217.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图43")

16.选择安装磁盘（选择刚才抹掉的磁盘），开始安装macOS

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图44](93c220e29084f321c65a20eda255a93c-macx.top-202109-9218.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图44")

第一次安装界面：

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图45](ddf9c7e83e08874dd5f095b11808772c-macx.top-202109-9219.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图45")

17.第一次安装完后会重启，进入OC引导界面后选择 macOS Installer，过一会儿会进入二次安装界面。

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图46](f76ee770a086f701c9339b7d98368c3a-macx.top-202109-9220.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图46")

二次安装界面：

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图47](179a15f12bbd624a4eb8f84a6c7377ee-macx.top-202109-9221.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图47")

18.二次安装完，黑苹果就安装到你的硬盘了，重启后进入OC引导选择 **X**（你抹掉磁盘的名字），进入苹果系统；

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图48](766a473f4f23963c269ff372eab8f481-macx.top-202109-9222.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图48")

19.设置好账户密码等，就可以进入桌面了；

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图49](d907a84e8d8371cfd263dc81c95da36d-macx.top-202109-9223.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图49")

初次进入系统建议不要联网：

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图50](db5f5f6caff3a2184f023f9cb41fb442-macx.top-202109-9224.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图50")

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图51](fc4905daabe752a3ee4677abe021de2a-macx.top-202109-9225.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图51")

20.进入系统后检查各项驱动，对于未驱动的硬件可在本站查找相关驱动教程来驱动；

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图52](ebf94de356fb7c29b10190caf46287f8-macx.top-202109-9226.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图52")

## **五、更改硬盘启动**

1.打开分区工具，把刚刚的EFI引导文件拷贝到硬盘的ESP分区（有的显示“EFI”）；

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图53](013c1a07b77bc654195ee6a08f64b793-1572662489-3e096f8a2f89003.png "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图53")

2.点击【工具】选择设【设置UEFI BIOS 启动项】

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图54](4a039e24e3646e0bafbe4a4baaf556f5-macx.top-202109-9230.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图54")

3.点击【添加】，新建OC引导项；

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图55](d6dfe7fa86e6e211a4b5d51ffe484e3e-macx.top-202109-9231.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图55")

4.选择到硬盘的EFI分区；

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图56](81a525ca2cdea7920742e842effbb43a-macx.top-202109-9232.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图56")

5.选择BOOTx64.efi文件，路径：EFI\\BOOT\\BOOTx64.efi；

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图57](fc88d6c74389342bd4c504e8c459a686-macx.top-202109-9233.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图57")

6.选择好后点击【打开】，新建完成

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图58](1b6133871df4a9f1f20c692dd9638d45-macx.top-202109-9234.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图58")

7.然后输入新建的OC引导的启动项名称（注意英文输入法输入）；

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图59](3880a77f859a32c5d8d6b873565f1562-macx.top-202109-9235.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图59")

8.选择新建好的OC引导并上移至第一项；

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图60](e3c6d50c72557a60062e55eabdbc9e55-macx.top-202109-9236.jpg "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图60")

9.部分电脑还需要进BIOS设置一下新建的启动项为第一启动项。至此黑苹果安装教程写完，祝各位尽早吃上黑苹果！

![【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图61](e1d2989f103e58cf5fadf6de8992e55c-1572665711-4eba325b6183738.png "【黑苹果】macOS 12 Monterey 原版 OC 引导安装教程插图61")

这里有我远程安装收集的一些EFI资源（六年老店，辛苦远程，原创合集），集合多种电脑配好的EFI驱动文件，除三代处理器以下或更低配置的电脑，部分更新支持最新 Monterey ，基本主流配置的电脑都有收集，可直接替换使用。

隐藏内容，仅限以下用户组阅读

如果您未在其中，可以升级

**终身会员**

[登录](javascript:) [注册](javascript:)

**注：**EFI只有实机安装才能收集，凭空无法配置。网上有流出的旧版资源（~淘宝~、~闲鱼~、~GitHub~），文件不全且年久失修，不保证适合新系统，旧电脑装旧系统勉强可用，新电脑新系统，请**务必**获取最新合集。

**远程服务**：[点击开始远程](https://macx.top/service)          **视频教程：**[点击查看视频](https://macx.top/go?_=529b185c99aHR0cHM6Ly93d3cuYmlsaWJpbGkuY29tL3ZpZGVvL0JWMXJmNHkxSDdoTCNyZXBseTUzNTcwMTE3ODk%3D)

## 下载权限

*   终身会员：
    
    免费下载
    

## 黑苹果EFI合集

*   苹果地带： 原创合集

您当前的等级为 **游客**

请先[登录](javascript:)

EFI下载

**声明：**如遇资源链接失效，请评论反馈或私信happy。如若本站内容侵犯了您的合法权益，请发送邮件至【www.macx.top@qq.com】进行处理。