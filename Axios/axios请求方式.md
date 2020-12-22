#### axios请求方式
- axios(config)
- axios.request(config)
- axios.get(url[,config])
- axios.delete(url[,config])
- axios.head(url[,config])
- axios.post(url[,data[,config]])
- axios.put(url[,data[,config]])
- axios.patch(url[,data[,config]])


#### axios发送并发请求
- 发送两个请求
    - 使用axios.all,可以放入多个请求的数组；
    - axios.all([])返回的结果是一个数组，使用axios.spread可将数组[res1,res2]展开为res1,res2
    ```
        axios.all(
            [axios({
            url:'http://123.207.32.32:8000/category'}),

            axios({
                url:'http://123.207.32.32:8000/home/data',
                params:{
                    type:'sell',
                    page:5
                        }
            })
        ]).then(axios.spread((res1,res2)=>{
            console.log(res1);
            console.log(res2);
        }))
    ```

#### 全局配置
```
    axios.defaults.baseURL = 'http://123.207.32.32:8000'
```

#### 常见配置选项
- 请求地址：**url:'/user'**,
- 请求类型：**methods:'get'(默认就是get请求)**,
- 请根路径：**baseURL:'http://www/mt.com/api'**,
- 请求前的数据处理：**transformRequest:[function(data){}]**,
- 自定义请求头：**headers:{'x-Requested-With':'XMLHttpRequest'}**,
- URL查询对象：**params:{id:12}**,
- 响应的数据格式**json/blob/document/arraybuffer/text/stream** :responseType:'json',

#### 创建axios实例
```
    const instance1 = axios.create({
    baseURL: 'http://222.111.33.11:8000',
        timeout:5000
    })
    instance1({
        url:'/home/multidata'
    }).then(res => {
        console.log(res)
    })
    instance1({
        url: '/home/data',
        params: {
            type: 'pop',
            page:1
        }
    })
```
#### 模块封装

- 第**一**种方法：
```
    export function request(config){
        //1.创建axios的实例
        const instance = axios.create({
            baseURL:'http://123.207.32.32:8000',
            timeout:5000
        })
        //发送真正的网络请求
        instance(config).then(res=>{
            resolve(res)
        })
        .catch(err=>{
            reject(err)
        })
    }
```
- 第**二**种方法：
```
    export function request(config){
        return new Promise((resolve,reject)=>{
            //1.创建axios的实例
            const instance = axios.create({
             baseURL:'http://123.207.32.32:8000',
            timeout:5000
        })
        //发送真正的网络请求
         instance(config)
         .then(res=>{
            resolve(res)
        })
        .catch(err=>{
            reject(err)
        })
    }
    
```
- 第**三**种方法：
```
    export function request(config){
         //1.创建axios的实例
        const instance = axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000
        })
        //发送真正的网络请求
        return instance(config)
    }
```
- **封装request模块**
```
    import {request} from './network/request';
    request({
        url:'/home/multidata'
    }).then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    })
```


