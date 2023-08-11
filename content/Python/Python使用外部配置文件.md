---
title: Python使用外部配置文件
tags: [python]
date modified: 2023-08-05 12:57:26
date created: 2022-12-24 11:22:45
---
# Python使用外部配置文件
## 一、 为什么要使用配置

如果我们在较复杂的项目中不使用配置文件，我们可能会面临下面的情况：

*   你决定更改你的项目中数据库的 host， 因为你要将项目从测试环境转移到实际的上产环境中。如果你的项目中多个位置用到了这个 host，那你不得不一个一个找到这些位置再修改成新的 host。花了半天，然后过了一天，你发现项目在生产环境有些问题，需要重新移回测试环境，你得再次修改，这样工作很繁琐很不优雅。
*   你开发了一个很棒的开源项目，你想将其放到版本控制系统例如github上，但是你服务器的主机的地址、账号、密码也都上传上去了，但是你没有意识到，直到有个 bad guy 拿到了你的信息，从你的服务器窃取信息、攻击你的服务器，让你产生了极大的损失。然后你想把程序改动一下，把涉密的信息比如地址密码都删掉，可是由于版本控制的原因，别人依然能看到你以前版本的代码。于是你不得不改掉你的账户、密码等，真的是个悲伤的开源项目经历。

但是，如果你使用了配置管理呢，那会有以下几个优点：

*   这样就提高了代码的重用性，不再每次都去修改代码内部
*   这意味着其他不太懂你代码内部的人也可以使用你的项目，只用根据需求更改配置即可
*   有利于团队协作
*   有利于安全数据/秘密数据的管理

## 二、Python 中进行配置管理的几种方式

由于使用 Python 较多，因此基于 Python 进行配置管理的相关说明，当然其他语言也都是大同小异，主要思想还是不变。

### 2.1 使用 Python 内置的数据结构(如字典)

#### 2.1.1单个文件下的单个配置

我们很自然就能想到这一点，例如以下代码：

```python
# main.py

import pymysql

DATABASE_CONFIG  = {
    'host':'localhost',
    'dbname':'db',
    'user':'user',
    'password':'pwd',
    'port':3306
}

def connect_db_do_something1(dbname):
    if dbname != config.DATABASE_CONFIG['dbname']:
        raise ValueError("Couldn't not find DB with given name")
    conn = pymysql.connect(host=config.DATABASE_CONFIG['host'],
                           user=config.DATABASE_CONFIG['user'],
                           password=config.DATABASE_CONFIG['password'],
                           db=config.DATABASE_CONFIG['dbname'])
    '''
    do something 1
    '''

def connect_db_do_something2(dbname):
    if dbname != config.DATABASE_CONFIG['dbname']:
        raise ValueError("Couldn't not find DB with given name")
    conn = pymysql.connect(host=config.DATABASE_CONFIG['host'],
                           user=config.DATABASE_CONFIG['user'],
                           password=config.DATABASE_CONFIG['password'],
                           db=config.DATABASE_CONFIG['dbname'])
    '''
    do something 2
    '''

connect_db_do_something1('db')
connect_db_do_something2('db')
```

在上面的代码中，我们可以看到，同一数据库配置，我们反复使用了两次，如果我们需要更改数据库相关的数据如password，我们不需要在两个方法内部修改，而是只用修改DATABASE\_CONFIG字典中的相关值即可。和以前没有配置管理的时候相比，减少了太多的工作量了。

#### 2.1.2多个文件下的单个配置

但是当你的项目开始变得复杂的时候，你的文件就不止一个这么简单了，这时候如果我需要在 main2.py 里面需要用 DATABASE\_CONFIG 的时候就不是很方便了，因为如果直接 import main 的时候，虽然能够使用 main.DATABASE\_CONFIG ，但同时 mian.py 中的

```stylus
connect_db_do_something1('db')
connect_db_do_something2('db')
```

也被执行了，这可不是我们想看到的，因此我们有了新的需求，能在同一个项目下的不同文件里简单快速的导入我们的数据库配置 DATABASE\_CONFIG，于是我们想出了下面的方法来解决这个问题：

```python
# config.py
DATABASE_CONFIG = {
    'host': 'localhost',
    'dbname': 'db',
    'user': 'user',
    'password': 'pwd',
    'port': 3306
}

# main1.py
import pymysql
import config

def connect_db_do_something1(dbname):
    if dbname != config.DATABASE_CONFIG['dbname']:
        raise ValueError("Couldn't not find DB with given name")
    conn = pymysql.connect(host=config.DATABASE_CONFIG['host'],
                           user=config.DATABASE_CONFIG['user'],
                           password=config.DATABASE_CONFIG['password'],
                           db=config.DATABASE_CONFIG['dbname'])
    '''
    do something 1
    '''
connect_db_do_something1('db')

# main2.py
import pymysql
import config

def connect_db_do_something2(dbname):
    if dbname != config.DATABASE_CONFIG['dbname']:
        raise ValueError("Couldn't not find DB with given name")
    conn = pymysql.connect(host=config.DATABASE_CONFIG['host'],
                           user=config.DATABASE_CONFIG['user'],
                           password=config.DATABASE_CONFIG['password'],
                           db=config.DATABASE_CONFIG['dbname'])
    '''
    do something 2
    '''
connect_db_do_something2('db')
```

按照上面的代码，我们可以在两个不同的文件 main1.py 和 main2.py 中分别引用 config.py 中配置了，我们的配置管理看起来更进一步了。

#### 2.1.3 单个文件下的多个配置

有可能我们的项目需要多个配置文件，比如测试环境和生产环境。先从单个文件讲起，我们可以采用如下解决方案：

```python
# config.py
class Config:
    APP_NAME = 'myapp'
    SECRET_KEY = 'secret-key-of-myapp'
    ADMIN_NAME = 'administrator'

    AWS_DEFAULT_REGION = 'ap-northeast-2'
    
    STATIC_PREFIX_PATH = 'static'
    ALLOWED_IMAGE_FORMATS = ['jpg', 'jpeg', 'png', 'gif']
    MAX_IMAGE_SIZE = 5242880 # 5MB


class DevelopmentConfig(Config):
    DEBUG = True
    
    AWS_ACCESS_KEY_ID = 'aws-access-key-for-dev'
    AWS_SECERT_ACCESS_KEY = 'aws-secret-access-key-for-dev'
    AWS_S3_BUCKET_NAME = 'aws-s3-bucket-name-for-dev'
    
    DATABASE_URI = 'database-uri-for-dev'


class TestConfig(Config):
    DEBUG = True
    TESTING = True
    
    AWS_ACCESS_KEY_ID = 'aws-access-key-for-test'
    AWS_SECERT_ACCESS_KEY = 'aws-secret-access-key-for-test'
    AWS_S3_BUCKET_NAME = 'aws-s3-bucket-name-for-test'
    
    DATABASE_URI = 'database-uri-for-dev'
  

class ProductionConfig(Config):
    DEBUG = False

    AWS_ACCESS_KEY_ID = 'aws-access-key-for-prod'
    AWS_SECERT_ACCESS_KEY = 'aws-secret-access-key-for-prod'
    AWS_S3_BUCKET_NAME = 'aws-s3-bucket-name-for-prod'

    DATABASE_URI = 'database-uri-for-dev'

# main.py
import sys
import config
import sys
import config

'''
do some important things
'''

if __name__ == '__main__':
    env = sys.argv[1] if len(sys.argv) > 2 else 'dev'
    
    if env == 'dev':
        app.config = config.DevelopmentConfig
    elif env == 'test':
        app.config = config.TestConfig
    elif env == 'prod':
        app.config = config.ProductionConfig
    else:
        raise ValueError('Invalid environment name')
```

这样我们就可以从一个配置文件中获取不同级别的不同配置了。

#### 2.1.4 多个文件下的多个配置

和上面类似，只不过换成了从不同的文件中读取同一个配置文件的不同配置：

```python
# config.py
class Config:
    APP_NAME = 'myapp'
    SECRET_KEY = 'secret-key-of-myapp'
    ADMIN_NAME = 'administrator'

    AWS_DEFAULT_REGION = 'ap-northeast-2'
    
    STATIC_PREFIX_PATH = 'static'
    ALLOWED_IMAGE_FORMATS = ['jpg', 'jpeg', 'png', 'gif']
    MAX_IMAGE_SIZE = 5242880 # 5MB

    
class DevelopmentConfig(Config):
    DEBUG = True
    
    AWS_ACCESS_KEY_ID = 'aws-access-key-for-dev'
    AWS_SECERT_ACCESS_KEY = 'aws-secret-access-key-for-dev'
    AWS_S3_BUCKET_NAME = 'aws-s3-bucket-name-for-dev'
    
    DATABASE_URI = 'database-uri-for-dev'
    
class TestConfig(Config):
    DEBUG = True
    TESTING = True
    
    AWS_ACCESS_KEY_ID = 'aws-access-key-for-test'
    AWS_SECERT_ACCESS_KEY = 'aws-secret-access-key-for-test'
    AWS_S3_BUCKET_NAME = 'aws-s3-bucket-name-for-test'
    
    DATABASE_URI = 'database-uri-for-dev'
  

class ProductionConfig(Config):
    DEBUG = False

    AWS_ACCESS_KEY_ID = 'aws-access-key-for-prod'
    AWS_SECERT_ACCESS_KEY = 'aws-secret-access-key-for-prod'
    AWS_S3_BUCKET_NAME = 'aws-s3-bucket-name-for-prod'

    DATABASE_URI = 'database-uri-for-dev'


class CIConfig:
    SERVICE = 'travis-ci'
    HOOK_URL = 'web-hooking-url-from-ci-service'


# main1.py
import config

dev_config = config.DevelopmentConfig
'''
do something
'''

# main2.py
import config

app.ci = config.CIConfig
'''
do otherthing
'''
```

这样使用更加灵活了，从不同的文件里读取不同的配置，而我们对于配置的增删改只需要在 config.py 中进行，配置管理技能再次进阶！

### 2.2 使用外部配置文件

比起使用 Python 内建的数据结构，更加通用的方法是使用外部配置文件，因为这些文件只会被视为配置文件，而不会像 `config.py` 一样有代码的属性。外部配置文件的格式多种多样，我们在使用它的时候会根据文件格式有不同的读取方式。例如：`*.yaml` 或者 `*.yml`、`*.json` 、`*.cfg` 或 `*.conf` 、`*.ini` ， 甚至是你自定义的文件 `*.yourname` 。

#### 2.2.1 YAML

> YAML（/ˈjæməl/，尾音类似camel骆驼）是一个可读性高，用来表达数据序列化的格式。YAML参考了其他多种语言，包括：C语言、Python、Perl，并从XML、电子邮件的数据格式（RFC 2822）中获得灵感。Clark Evans在2001年首次发表了这种语言\[1\]，另外Ingy döt Net与Oren Ben-Kiki也是这语言的共同设计者\[2\]。当前已经有数种编程语言或脚本语言支持（或者说解析）这种语言。 ----- 中文维基百科

YAML 看起来像下面这种格式：

```yaml
mysql:
    host: localhost
    dbname: db
    user: user
    passwd: pwb
    port: 3306
other:
    host: other_host
    dbname: other_db
    user: other_user
    passwd: other_pwb
    port: 3306
```

可以通过类似下面的代码来读取里面的内容：

```python
import yaml

with open("config.yml", 'r') as ymlfile:
    cfg = yaml.load(ymlfile)

print(cfg['mysql'])
```

将输出以下内容

```1c
{'host': 'localhost',
 'dbname': 'db',
 'user': 'user',
 'password': 'pwd',
 'port': 3306}
```

如果需要从 python 写入配置到 YAML 也很容易，只需要使用 yaml.dump(dict) 即可，dict 指的是配置的字典。更加详细的内容可以查看 PyYAML Documentation

#### 2.2.2 INI

> INI文件是一个无固定标准格式的配置文件。它以简单的文字与简单的结构组成，常常使用在Windows操作系统，或是其他操作系统上，许多程序也会采用INI文件做为设置程序之用。Windows操作系统后来以注册表的形式取代掉INI档。INI文件的命名来源，是取自英文“初始（Initial）”的首字缩写，正与它的用途——初始化程序相应。有时候，INI文件也会以不同的扩展名，如“.CFG”、“.CONF”、或是“.TXT”代替。 ----- 中文维基百科

它长的像这样：

```ini
[mysql]
host=localhost
dbname=db
user=user
passwd=pwd
port=3306

[other]
host=other_host
dbname=other_db
user=other_user
passwd=other_pwb
port=3306
```

通过以下代码可以读取它：

```stylus
import configparser

config = configparser.ConfigParser()
config.read("config.ini")
host = config['mysql']['host']
print(host)
```

这将输出 `INI` 配置文件中的 mysql section 中的 host 值

要写入 INI 配置文件也很简单，参考如下代码即可：

```lua
import configparser
config = configparser.ConfigParser()
config.read("config.ini")
config['mysql']['test_str'] = 'a test string'
config.write(open("ini", "w"))
```

现在的配置文件会变成：

```ini
[mysql]
host = localhost
dbname = db
user = user
passwd = pwd
port = 3306
test_str = a test string

[other]
host=other_host
dbname=other_db
user=other_user
passwd=other_pwb
port=3306
```

#### 2.2.3 JSON

JSON是JavaScript对象表示法的缩写。它非常广泛，因此对许多编程语言都有很好的支持。它的格式大家也很眼熟，看起来和 Python 中的字典很像：

```json
{
    "mysql":{
        "host": "localhost",
        "dbname": "db",
        "user" : "user",
        "password": "pwd",
        "port": 3306
    },
    "other":{
        "host": "other_host",
        "dbname": "other_db",
        "user": "other_user",
        "passwd": "other_pwb",
        "port": 3306
    }
```

你可以参考以下代码读取：

```lua
import json

with open('config.json') as json_data_file:
    config = json.load(json_data_file)

host = config['mysql']['host']
print(host)

# output: localhost
```

要将配置写入json中也很简单，参考以下代码：

```sml
import json

with open('config.json') as json_data_file:
    config = json.load(json_data_file)

config['mysql']['test_str'] = 'a test string'

with open('config.json', 'w') as outfile:
    json.dump(config, outfile)
```

这样就会得到增加了配置的json文件了：

```json
{
    "mysql":{
        "host": "localhost",
        "dbname": "db",
        "user" : "user",
        "password": "pwd",
        "port": 3306,
        "test_str" : "a test string"
    },
    "other":{
        "host": "other_host",
        "dbname": "other_db",
        "user": "other_user",
        "passwd": "other_pwb",
        "port": 3306
    }
}
```

其他格式的文件大多如此，就不赘述了。并且外部的配置文件中也可以配置多个配置(mysql, other等)

### 2.3 使用环境变量

但是，回到我们开篇讲的问题，以上的两种配置管理方案(使用 Python 内置的数据结构、使用外部配置文件) 都忽略了两个问题：

其一，我们如何应对安全数据直接曝光于公众的可能问题呢，如果我们需要使用版本控制系统例如 Github，或许我们可以尝试将 config.py 文件放到 .gitignore 里面，但我们如果哪一天修改了仓库，忘了将 config.py 忽略掉而 push 到了GitHub 上，那么我们的安全敏感信息仍然会向公众泄露，由于版本控制的存在，即使你删掉了还会有这条提交记录，处理起来会很麻烦。

其二，如果我们要在我们本地新开一个项目，这个项目也需要引用一样的数据库配置文件，或许我们可以找到第一个项目的文件夹，复制出 config.py 到 新的项目文件夹。嗯，看起来可行，但是，如果你要新开十几个项目呢，几百个项目呢？

因此我们可以引入下一种配置管理的方式，对解决上面提出的两个问题都是较为友好的解决方案，即使用环境变量，各种开发环境(Win、Mac、Linux)的系统环境变量的设置方式有所不同，可以参考这篇文章。

另外 PyCharm 和 VS Code 有更加方便的配置方式，可以为不同的项目分配不同的设置。

PyCharm 中，在菜单 Run->Edit configurations 中，手动设置Environment variables

VS Code 中，在 Setting 中搜索 env ，在 Terminal 中选择你的操作系统相关的Terminal > Integrated > Env: Your OS ，点进 settings.json 进行添加

使用环境变量配置值不用作为单独的文件进行管理，因此有较小的安全风险，它很容易使用，可以在你的开发环境中的任何项目任何代码库中使用，但是它的管理方式可能有些复杂。有些环境无法使用环境变量，比如Apache，Nginx等Web服务器，这时候就需要采用其他的方式。

### 2.4 使用动态加载

这种方法比利用 Python 内置的数据结构更加先进，内置数据结构的方法要求配置文件必须要在可以直接 import 的路径上。但是动态加载中，配置文件不必在可直接导入的路径上，甚至可以位于其他存储库中，这样的话，配置文件就和项目分隔开了，其他的项目也可以动态加载这个配置文件，例如：

```routeros
# /opt/settings/config.py
DATABASE_CONFIG = {
    'host': 'localhost',
    'dbname': 'company',
    'user': 'user',
    'password': 'password',
    'port': 3306
}

# main.py
import sys
import pymysql

sys.path.append('/opt/settings')
import config

def connect_db(dbname):
    if dbname != config.DATABASE_CONFIG['dbname']:
        raise ValueError("Couldn't not find DB with given name")
    conn = pymysql.connect(host=config.DATABASE_CONFIG['host'],
                           user=config.DATABASE_CONFIG['user'],
                           password=config.DATABASE_CONFIG['password'],
                           db=config.DATABASE_CONFIG['dbname'])
    return conn

connect_db('company')
```

## 三、总结

以上归纳了四种配置管理的方式，总体来说没有优劣之分，看个人的需要，甚至上面的几种方法可以混合使用，对于一些软件项目，它自身可能就提供了相关的变量配置入口，比如 airbnb 的 Airflow 。而且，当系统规模非常大时，最好使用主要提供配置管理的第三方工具或服务。

* * *