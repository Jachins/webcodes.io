<template>
  <div id="app">
   <h2>{{message}}</h2>
   <h2>{{$store.state.counter}}</h2>
   <button @click="addition">+</button>
   <button @click="subtraction">-</button>
   <button @click="addCounter(5)">+5</button>
   <h2>---------------这是vuex中getters的内容-------------------</h2>
   <h2>{{$store.getters.powerCounter}}</h2>
   <h2>{{more20stu}}</h2>
  </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                message: '一个App组件'
            }
        },
        methods: {
            addition() {
                this.$store.commit('increment')
            },
            subtraction() {
                this.$store.commit('decrement')
            },
            addCounter(count) {
                this.$store.commit('incrementCount', count)
            }
        },
        computed: {
            more20stu() {
                return this.$store.state.students.filter(s => {
                        return s.age < 20
                    })
                    // 可以简写成
                    // return this.$store.state.students.filter(s=> s.age>=20)
            }
        },
        components: {

        }
    }
</script>

<style>

</style>