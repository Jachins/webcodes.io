#### axios拦截器
- 用于我们再发送每次请求或者得到响应后，进行对应的处理；

##### 配置请求和响应拦截
```
    instance.interceptors.response.use(res=>{
        console.log("这是response拦截success中");
        
        //1. 当发送网络请求时，在页面中添加一个loading组件，作为动画

        //2. 某些请求要求用户必须登录，判断用户是否有token，如果没有token跳转到login页面

        //3. 对请求的参数进行序列化
        config.data = qs.stringify(config.data)
        console.log(res);
        return res;//拦截之后要返回
    },err=>{
        console.log(err);
    })
```
##### 拦截器可以做的事情
- 请求拦截中错误拦截较少，通常都是配置相关的拦截(可能的错误比如请求超时，可以将页面跳转到一个错误页面中)

##### 相应拦截中完成的事情：
- 响应的成功拦截中，主要对数据进行过滤；
- 响应的失败拦截中，可以根据**status判断报错的错误码**，跳转到不同的错误提示页面