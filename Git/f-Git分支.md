- 1. 查看分支：git branch

- 2. 创建分支: git branch \<name>

- 3. 切换分支：git checkout \<name>或git switch \<name>

- 4. 创建+切换分支：git checkout -b \<name>或git switch -c \<name>

- 5. 合并某分支到当前分支：git merge \<name>

- 6. 删除分支：git branch -d \<name>

- **解决冲突问题：**
    - 先手动编写文件为我们需要的内容，然后在提交；
    - 使用**git log --graph**可以看到分支合并图