#### 创建Ajax请求的基本操作
- 1. 获取button请求
```
     const btn = document.getElementsByTagName('button')[0];
     const result = document.getElementById('test');
```
- 2. 绑定事件
```
    btn.onclick = function() {
        //  1-创建对象
            const xhr = new XMLHttpRequest();

        // 2-初始化,设置请求方法和url
        xhr.open('GET', 'http://127.0.0.1:8001/serve');

        // 3- 发送
        xhr.send();
        
        // 4- 事件绑定,处理服务端返回的结果
        // on when  表示当...时候
        //  readystate   是xhr对象种的属性,表示状态0 1 2 3 4
        // change  改变
        
        xhr.onreadystatechange = function() {
            // 判断(服务端返回了所有的结果)
            if (xhr.readyState === 4) {
                // 判断响应状态码:200 404  403 401 500
                // 2xx 表示成功
                if (xhr.status >= 200 && xhr.status < 300) {
                    // 处理结果  行  头 空行  体
                    // 设置test中的文本;
                    result.innerHTML = xhr.response;
                } else {
                    }
                }

            };

        }
```

#### 解决Ajax-IE浏览器的缓存问题
- 在初始化**设置请求方法和url**的时候,给url加一个时间戳Date.now();
    - xhr.open("GET",'http://127.0.0.1:8000/**ie?='+Date.now()**);