### vue-router的安装和使用
- **步骤一: 安装vue-router**
**npm install vue-router --save**

- **步骤二：在模块化工程中使用它(这是一个插件，可以通过安装Vue.use()来安装路由功能)**
- 第一步：导入路由对象，并且调用Vue.use(VueRouter);
- 第二步：创建路由实例，并且传入路由映射配置；
- 第三步：在Vue实例中挂载创建的路由实例

### 使用vue-router的步骤
- 第一步：创建路由组件；
- 第二步：配置路由映射：组件和路径映射关系
- 第三步：使用路由：通过<router-link>和<router-view>
    - router-link：该标签是vue-router中的一个内置组件，会被渲染成一个a标签；
    - router-view：该标签会根据当前的路径，动态渲染不同的组件；
    - 路由切换时，切换的是router-view中挂载的组件，其他内容不会发生改变；

#### router-link的属性：
- to: 指定跳转的路径；
- tag: 指定router-link之后渲染成什么组件，比如渲染成一个按钮
```
    <router-link to='/home' tag='button'>
```
- repalce:不可以来回切换页面，replace不会留下history记录
- active-class:当\<router-link>对应的路由匹配成功之后，会生成一个叫router-link-active的class，设置active-class可以修改默认的名称；

### 设置路由的默认路径
- 多配置一个映射
```
    {
        path:'/',
        redirect:'/home'
    }

解析：在routes中多配置了一个映射关系，path配置的路径就是根路径:/,redirect是重定向，将路径重新定向到/home/的路径下；
```

### 改变路径的方式有两种：
- URL的hash
- HTML5的history
- 默认情况下：路径的改变使用的是URL的hash

### 懒加载，用到的时候再加载
- 方式一：结合Vue的异步组件和Webpack的代码分析
```
    const Home=resolve=>{
        require.ensure(['../components/Hone.Vue'],()=>{
            resolve(require('../components/Home.vue'))})
        };
    }
```
- 方式二：AMD写法
```
    const About=resolve=>require(['../components/About.vue'],resolve);
```

- 方法三：再ES6中，我们可以给更加简洁来组织Vue异步组件和Webpack的代码分割 **(推荐使用)**
```

    const Home=()=>import('../components/Home.vue')
```

### 路由的嵌套使用
- 使用children做嵌套路由