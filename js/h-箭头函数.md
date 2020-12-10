#### 1. 只有一个参数的时候，可以省略括号，大括号也可以
```
    let double=x=>2*x;
    相当于
    let double=function(x){
        return 2*x;
    }
```
#### 2. 多个参数的时候，参数的括号不可以省略,大括号也不可以省略(只有一条语句的时候可以省略)，同时 return也可以省略(隐式会返回这行代码的值)
```
    let sum=(a,b)=>{
        return a+b;
    }
    相当于：
    let sum=function(a,b){
        return a+b;
    }
    也可以写成：
    let sum=(a,b)=>a+b;
```
**注意：箭头函数不能使用arguments、super和new.target,也不能构造函数，此外，箭头函数也没有prototype属性**
#### 3. 箭头函数虽然没有arguments对象，但是可以在包装函数中把它提供给箭头函数：
```
    function foo(){
        let bat=()=>{
            console.log(arguments[0]);//5
        }
        bat();
    }
    foo(5);
```

#### 3. 箭头函数中的this如何查找的呢？
- 向外层作用域，一层层查找this,直到有this的定义为止;

#### 4. 箭头函数没有自己的this，也不能通过使用call,apply以及bind去绑定this，会选择去继承父级作用域的this