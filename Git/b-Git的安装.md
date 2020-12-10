### Git的安装

#### 在Linux上安装Git
- 1. 使用git查看系统内是否已经安装了Git:
```
    git
    //如果没安装，就执行以下命令
    sudo apt-get install git
    <!-- 老一点的Debian或Ubuntu Linux需要更改命令为： -->
    sudo apt-get install git-code
```

#### 在Windows上安装Git
- 直接在Git官网下载安装程序，然后根据默认选项安装即可；
- 安装完成之后，还需要配置用户名和用户邮箱
```
    git config --global user.name "Your Name"
    git config --global user.email "email@example.com"
```

#### 在Mac OSX 上也可以安装

### 创建版本库(repository)

#### 1.先找(cd)一个合适的目录，创建一个空目录
```
    mkdir learngit
    cd learngit
    pwd(用于显示当前目录下的文件)
```

#### 2. 通过git init命令将这个目录变成Git可以管理的仓库：
```
    git init
    Initialized empty Git repository in /Users/michael/learngit/.git/
```
- **创建好仓库之后，多了一个.git目录，用于跟踪管理版本库的，尽量不要手动修改里面的文件，不然容易破坏整个Git库**

#### 3. 添加一个readme.txt文件到Git仓库,一个需要放到learngit(之前创建的目录下)
- readme.txt内容：
```
    Git is a version control system.
    Git is free software.
```
##### 3.1 第一步：用命令git add将文件添加到仓库：
```
    git add readme.txt(使用的命令的前提是该文件已经存在)
```
##### 3.2 第二步：用命令git commit将文件提交到仓库：
```
    $git commit -m "wrote a readme file"(后面这个是解释说明的文字)

```