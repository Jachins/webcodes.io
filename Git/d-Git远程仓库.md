#### 本地Git仓库和GitHub仓库之间的传输时通过SSH加密的，需要配置：
- **第一步：创建SSH Key** 
    - 在用户主目录下生成.ssh目录，里面有id_rsa(私钥)和id_rsa.pub(公钥)两个文件夹
```
    ssh-keygen -t rsa -C "youemail@example.com"//(你自己的电子邮箱)
```
- **第二步：登录GitHub，打开Account settings","SSH Keys"页面：**
    -点击"Add SSH Key",填上任意Title，在Key文本框上粘贴id_rsa.pub文件的内容；

#### 连接远程仓库GitHub
- **第三步：找到Create a new repo按钮，创建要给新仓库**
    - 输入仓库名，然后剩下的按照默认就可以;

- **第四步：根据GitHub上的提示，在本地learngit(当前 所在的本地仓库名)运行命令：**
```
    git remote add origin git@github.com:Jachins/firstgit.io
```

- **第五步：将本地库的内容推送到远程库上：**
```
    git push -u origin master
    //将本地分支master推送到远程，第一次推送需要-u(Git不但会把本地的master分支内容推送到远程新的master分支，还会将本地的master分支和远程的master分支关联起来)
```
- 之后更新内容只需要在本地做了提交，就可以通过命令将本地分支master分支的最新修改版推送到Github上
```
    git push origin master
```
