#### 同源策略
##### 同源的定义
- 两个URL的**协议/主机/端口**相同，则为同源；
- 与源**http://store.company.com/dir/page.html**进行比较

|URL|结果|原因|
|:------:|:------:|:------:|
|http://store.company.com/dir2/other.html|同源|路径不同|
|http://store.company.com/dir/inner/another.html|同源|路径不同|
|https://store.company.com/secure.html|失败|协议不同|
|http://store.company.com:81/dir/etc.html|失败|端口不同(http://默认端口为80)
|http://news.company.com/dir/other.html|失败|主机不同|
