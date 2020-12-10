***javascript的继承是通过原型链来体现的***
 ```
    function Foo(){}
    var f1=new Foo();

    f1.a=10;
    Foo.prototype.a=100;
    Foo.prototype.b=100;

    console.log(f1.a);//100
    console.log(f1.b);//200
 ```

 - f1是Foo函数new出来的对象，f1.a是f1对象的基本属性，f1.b是通过Foo.prototype得来的，因为f1.__proto__指向Foo.prototype;

 ##### **1. 原型链：** 访问一个对象的属性的时候，现在自身的基本属性中查找，如果没有，再沿着__proto__这条链向上找，这就是原型链。
 - **基本思想**：通过原型继承多个引用类型的属性和方法;

 ![](https://images0.cnblogs.com/blog/138012/201409/182013450814552.png)
- 上图中，访问f1.b时，f1的基本属性中没有b，于是沿着__proto__找到了Foo.prototype.b。

![](https://images0.cnblogs.com/blog/138012/201409/182014022217881.png)
- f1中的hasOwnProperty是从Object.prototype中来的，请看图：
![](https://images0.cnblogs.com/blog/138012/201409/182014277067963.png)
- 对象的原型链是沿着__proto__这条线走的，因此在查找f1.hasOwnProperty属性时，就会顺着原型链一直查找到Object.prototype

##### **2. 继承：** 由于所有的对象的原型链都会找到Object.prototype，因此所有的对象都会有Object.prototype的方法。这就是所谓的"继承";
- 

##### 3. 原型与继承的关系
- 原型与实例的关系可以通过两种方式来确定；
1. 使用instanceof操作符
```
   如果一个实例是原型链中出现的构造函数，那么instanceof就返回true;
   console.log(instance instanceof Object);   //true
```
2. isPrototypeOf()：原型链中的每个原型都可以调用这个方法；
```
   console.log(Object.prototype.inPrototypeOf(instance));      //true
```

##### 4. 盗用构造函数
- 基本思路：在子类构造函数中调用父类构造函数,使用apply()和call()方法以新创建的对象为上下文执行构造函数;
- 1. 传递参数：可以在子类构造函数中向父类构造函数传参。
```
   function SuperType(name){
      this.name=name;
   }
   function SubType(){ 
      <!-- 继承SuperType并传参 ---
   SuperType.call(this,"Nicholas");
   <!-- 实例属性 -->
   this.age=29;
   }
   let instance=new SubType();
   console.log(instance.name);//"jachin"
   console.log(instance.age);//29
```
- 缺点：使用构造函数模式自定义类型的问题：必须在构造函数中定义方法