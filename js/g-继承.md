#### 1. 组合继承(伪经典继承)
- **基本思路：使用原型链继承原型上的属性和方法，而通过盗用构造函数继承实例属性；**
- 总结：
    1. 组合继承你不了原型链和盗用构造函数的不足，是JavaScript中使用最多的继承方式；
    2. 组合继承保留了instanceof操作符和isPrototypeof()方法识别合成对象能力；

#### 2. 原型式继承
- **基本思路**：通过Object.create()方法将原型式继承概念规范化，接收两个参数：作为新对象原型的对象，以及给新对象定义额外属性的对象(可选);
```
    1. 只有一个参数的时候
    let person={
        name:'jachin',
        friends:["qiqi","xiaoqi","chuqi"]
    };
    let anotherperson=Object.create(person);
    anotherperson.name="jachins";
    anotherperson.friends.push("bob");

    console.log(person.friends);//"qiqi,xiaoqi,chuqi,bob"

    2. 有两个参数的时候，新增属性都通过各自的描述符来描述，以这种方式添加的属性会遮蔽原型对象上的同名属性。

    let person={
        name:'jachin',
        friends:["pop","qq"]
    };
    let anotherperson=Object.create(person,{
        name:{
            value:"chuqi"
        }
    });

    console.log(anotherperson.name);//"chuqi"
```
#### 3. 寄生式继承
- **基本思路：创建一个实现继承的函数，以某种方式增强对象，然后返回这个对象**

#### 4. 寄生式组合继承
- **基本思路：不通过父类构造函数给子类原型赋值，而是取得父类原型的一个副本；使用寄生式继承来继承父类原型，然后将返回的新对象赋值给子类原型**
#### 5. 组合式继承