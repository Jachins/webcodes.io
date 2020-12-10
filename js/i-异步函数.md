#### 1. async
- 用于声明异步函数，这个关键字可以用于函数声明，函数表达式，箭头函数和方法上：
```
    async function foo(){
        let bar = async function(){};
        let baz=asyc ()=>{};
        class Qux{
            async qux(){}
        }
    }
```