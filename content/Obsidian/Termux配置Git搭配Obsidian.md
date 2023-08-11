---
title: Termux配置Git搭配Obsidian
tags: [Obsidian, Git]
date modified: 2023-08-05 12:57:26
date created: 2022-12-17 18:52:24
---
# Termux配置Git搭配Obsidian
## [](#install-termux-and-termux-widget-1)Install Termux and Termux Widget

From Github Termux ,\[^1\] Github Termux Widget \[^2\] download the APKs and install them. You can use F-Droid as well.

Give Termux access to your storage using the following command :\[^3\]

```undefined
termux-setup-storage
```

## [](#setup-git-and-github-for-manipulating-repositories-2)Setup Git and Github for Manipulating Repositories

Use the following commands to setup git and github via HTTPS :

```sql
pkg update && pkg upgrade
```

```undefined
pkg install git
```

```undefined
pkg install gh
```

_You can use SSH as well_

Login to your Github account :

```undefined
gh auth login
```

Update the git configs :

```csharp
git config --global user.name "name"
```

```csharp
git config --global user.email "email"
```

Now you should clone your repository, try to use the following commands :

```lua
git status
git pull
git commit
git push
```

If you are on Android 12, you’ll get an error with the command required to add the repository to a security list or something like that. Do it, and these commands should work.

## [](#setup-the-sync-script-shortcut-3)Setup the Sync Script Shortcut

Create a directory for the shortcuts :\[^4\]

```bash
mkdir -p /data/data/com.termux/files/home/.shortcuts
chmod 700 -R /data/data/com.termux/files/home/.shortcuts
mkdir -p /data/data/com.termux/files/home/.shortcuts/tasks
chmod 700 -R /data/data/com.termux/files/home/.shortcuts/tasks
```

Create the sync script :

```bash
nano /data/data/com.termux/files/home/.shortcuts/tasks/sync_script.sh
```

Add the following script :\[^5\]

```bash
#!/bin/bash
cd storage/shared/LifeWiki
git pull && git add -A && git commit -a -m "android vault backup: `date +'%Y-%m-%d %H-%M-%S'`" && git pull
```

Create the widget and add it to your home screen. That’s it, you just need to launch it to sync your Obsidian vault. It means you need to launch it before and after editing notes. If you putted your script inside ~/.shortcuts it will launch in the foreground, and if it was inside ~/.shortcuts/tasks then it will launch in the background. _I recommend using as a widget the one that execute the code in the foreground and keep the other one for the Cron job._

## [](#setting-up-an-automatic-execution-of-the-script-4)Setting up an Automatic Execution of the Script

If you want to automatically **sync your vault every hour**, for instance, you can do it using a Cron job. \[^6\] \[^7\] \[^8\]

First, you need to install Cron :

```bash
pkg install cronie termux-services
```

Then, you’ll restart Termux then run the following :

```bash
sv-enable crond
crontab -e 
```

Finally, you’ll end up with the `crontab -e` command in the **nano** text editor. Add the following :

```bash
* */1 * * * bash ~/.shortcuts/tasks/sync_script.sh
```

You can find information about Cron job easily on the internet.\[^9\]