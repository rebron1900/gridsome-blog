---
title: "SQLServer 错误: 15404，无法获取有关 Windows NT 组/用户"
tags: [sqlserver]
date modified: 2023-08-05 12:57:26
date created: 2023-02-12 15:11:07
---
# SQLServer 错误: 15404，无法获取有关 Windows NT 组/用户
最近 检查到SqlServer备份发现备份失败了于是检查 sql代理日志发现如下报错 ：

**核心提示**：SQLServer 错误: 15404，无法获取有关 Windows NT 组/用户 'WIN-I556UB3ODG2\\Administrator' 的信息，错误代码 0x534。 \[SQLSTATE 42000\] (ConnIsLoginSysAdmin)

如图：

![](Rsources/Assets/8c8de9d7128ffac5979af5249b83788e-20180109183210775.png)  

突然想起因为SqlServer改用登录方式和用户的原因：

解决步骤：

一、改变任务计划的权限，因为不是以之前登录的名字登录了，所以执行备份的时候会报错。

打开sql管理器-点开sql server代理 -任务计划-展开计划-点击计划属性-修改备份用户权限，点确定完成。

![](Rsources/Assets/3f5551dd536d213e46e8357a1decf075-20180109183704144.png)  

重新设置用户权限之后重新测试 执行备份，如没有报错则设置成功，故障解除。