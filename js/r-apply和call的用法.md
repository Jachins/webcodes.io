#### apply()和call()的用法一样，不同的是apply传的是数组，而call传的是参数列表；

#### 用法：

**call方法的第一个参数是作为函数上下文的对象，这里把obj作为参数传给func,此时函数中的this指向obj里面的对象**

- 1. **改变this的指向**
```
    const obj={
        name:"jachin"
    }
    funciton funx(){
        console.log(this.name);
    }

    funx.call(obj);//jachin
```

- 2. **借用别的对象的方法**
```
    var person1=function(){
        this.name='jachin';
    }
    var person2=function(){
        this.getname=function(){
            console.log(this.name);
        }
        person1.call(this);//使用person1对象代替this对象
    }
    var person =new person2();
    person.getname();//jachin
```

- 3. **调用函数**
- apply,call方法都会使函数立即执行，因此也可以来调用函数
```
    function func(){
        console.log('jachin');
    }
    func.call();//jachin
```