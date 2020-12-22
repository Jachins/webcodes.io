import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 5000
axios({
    // 默认情况下使用get请求
    url: '/home/multidata',
    // method: 'get'
    // method:'post'
}).then(res => {
    console.log(res);
})


// 2. axios发送并发请求
axios.all([axios({
    url: '/home/multidata'
}), axios({
    url: '/home/data',
    params: {
        type: 'sell',
        page: 5
    }
})]).then(axios.spread((res1, res2) => {
    console.log(res1);
    console.log(res2);
}))

// 3.创建axios实例
const instance1 = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
})
instance1({
    url: '/home/multidata'
}).then(res => {
    console.log(res)
})
instance1({
    url: '/home/data',
    params: {
        type: 'pop',
        page: 1
    }
})