import Vue from 'vue'
import Vuex from 'vuex'

// 1. 安装插件
Vue.use(Vuex)

// 2. 创建对象
const store = new Vuex.Store({
    state: {
        counter: 1000,
        students: [
            { id: 112, name: 'why', age: 12 },
            { id: 113, name: 'fzu', age: 22 },
            { id: 114, name: 'jachin', age: 82 },
            { id: 115, name: 'whddy', age: 18 },
            { id: 116, name: 'wsahy', age: 20 },
        ]
    },
    mutations: {
        // 定义方法
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        incrementCount(state, count) {
            state.counter += count;
        }
    },
    action: {

    },
    getters: {
        powerCounter(state) {
            return state.counter * state.counter
        }
    },
    modules: {

    }
})

// 3. 导出store对象
export default store