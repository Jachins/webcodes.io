#### this的四种用法

##### first:单纯的函数调用
- ①：普通的**函数全局性调用**，this指向window全局对象
```
    var x=1;
    funciton test(){
        console.log(this.a);//1
    }
```

##### second:作为对象方法的调用
- ②：函数作为某个对象的**方法调用**，this指向调用对象(上级对象)
```
    function test(){
        console.log(this.x);
    }
    var obj={};
    obj.x=1;
    obj.m=test;
    obj.m();//1
```

##### third:作为构造函数调用
- ③：通过构造函数创建一个新对象，this就指向这个新对象
```
    function test(){
        this.x=1;
    }
    var obj=new test();
    obj.x;//1
```

##### fourth:apply和call调用，指向传入的第一个参数
- ④：apply()是函数的一个方法，作用**改变函数的调用对象**,第一个参数表示改变后的函数调用这个函数的对象。**this指向第一个参数**
```
    var x=0;
    function test(){
        console.log(this.x);
    }
    var obj=0;
    obj.x=1;
    obj.m=test;
    obj.m.apply();   //0,
```
- **当apply()的参数为空时，默认调用全局对象(即this指向全局对象window)**

#### apply()和call()的用法
- 两种方法用法相同，不同的是**apply传的是数组**，而**call传的是参数列表**

##### first:改变this的指向
```
    const obj={
        name:"jachin"
    }
    funciton funx(){
        console.log(this.name);
    }
    funx.call(obj);//jachin
    call方法的第一个参数是作为函数上下文的对象，这里把obj作为参数传给func,此时函数中的this指向obj里面的对象
```
##### second:借用别的对象的方法
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

##### third:调用函数
- apply和call都会使函数立即执行，所以可以用来调用函数；
```
     function func(){
        console.log('jachin');
    }
    func.call();//jachin
```

