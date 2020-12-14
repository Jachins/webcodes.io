### HTTP协议
- 超文本传输协议,协议详细规定了浏览器和万维网服务器之间互相通信的约定,规则;

#### 请求报文(浏览器向服务器请求的内容)
- **格式与参数**
```
行      GET  /s?ie=utf -8  HTTP/1.1
头      Host:atiguigu.com
        Cookie:name=guigu
        Content-type:application/x-www-form-urlencoded
        User-Agent:chorme 83
空行
体      username=admin&password=admin

```

#### 响应报文(服务器给浏览器返回的结果)
```
行      HTTP/1.1   200 OK
头      Content-Type:text/html;charset=utf-8
        Content-length:2048
        Content-encoding:gzip
空行
体      <html>
            <head>
            </head>
            <body>
                <h1>响应报文</h1>
            </body>
        </html>
```