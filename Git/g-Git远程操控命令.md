#### git clone
- 从远程主机克隆一个版本库
```
    git clone https://github.com/jachins/webcodes.io.git(版本库的网址)
```
- 上面那条命令会在本机生成一个目录，与远程版本库同名，如果需要指定不同的而目录名，可以**将目录作为git clone命令的第二个参数**
```
    git clone <版本库网址> <本地目录名>
```

#### git remote

- 1. **git remote**可以列出所有远程主机
- 使用**-v**,可以看远程主机的网址
```
    git remote -v
```
- 2. 新克隆的远程主机如果需要自定义主机名，可以加上**-o**选项指定
```
    git clone -o 自定义的主机名 <版本库的网址>
```
- 3. 显示主机的详细信息
```
    git remote show <主机名>
```
- 4. 添加远程主机
```
    git remote add <主机名> <网址>
    git remote add gitee git@gitee.com/jachins/webcodes.io.git
```
- 5. 删除远程主机
```
    git remote rm <主机名>
    git remote rm gitee
```
- 6. 给远程主机改名
```
    git remote rename <原主机名> <新主机名>
```

#### git fetch

- 1.  远程主机的版本库更新，需要将这些更新返回本地，就需要**git fetch**命令
```
    git fetch <远程主机名>
```
- 2. 取回远程主机的特定分支的更新，则可以指定分支名
```
    git fetch <远程主机名> <分支名>
```
- 3. git branch命令的 **-r**选项，可以用来查看远程分支，**-a**选项查看所有分支
```
    git branch -r
    git branch -a
```
- 4. git checkout 创建一个新的分支
```
    git checkout -b newBranch origin/master;//在origin/master的基础上添加一个新的分支
```
- 5. git merge命令或者git rebase，在本地分支上合并远程分支
```
    git merge origin/master
    ||
    git rebase origin/master
```

#### git pull
- 取回远程主机某个分支的更新，再与本地的指定分支进行合并
- 1. 当前分支与远程分支存在跟踪关系，**git pull**可以省略远程分支名
```
    git pull origin(远程主机名)
```
#### git push
- 将本地分支的更新，推送到远程主机，格式跟git pull类似
```
    git push <远程主机名><本地分支名>:<远程分支名>
```
- 1. 本地分支推送与之存在"跟踪关系"的远程分支，如果分支不存在，则会被新建
```
    git push origin master
```
- 2. 如果省略本地分支名，则表示删除指定的远程分支，等同于推送一个空的本地分支到远程分支
```
    git push origin :master
    等同于
    git push origin --delete master
```
- 3. 当前分支与多个主机存在跟踪关系，则使用-u选项指定一个默认主机，这样后面就不需要添加任何参数了
```
    git push -u origin master
```