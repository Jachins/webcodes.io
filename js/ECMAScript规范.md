### 1.严格模式（"strict mode")
#### 1.1使用方法 
     在全局或函数的第一条语句定义为
```
        <script>
        'user strict';
        </script>
``` 
#### 1.2使用目的
    * 消除Javascript语法的一些不合理、不严谨之处；
    * 消除代码运行一些不安全之处；
#### 1.3 语法和行为改变
    * 必须使用var声明变量
    * 禁止自定的函数中的this指向window
    * 创建eval作用域(严格模式下创建，更加安全)
    * 对象不能有重名的属性；
     
### 2.Json对象
#### 2.1 json.stringfy(obj/arr)
    * js对象(数组)转换成json对象(数组)
```
        var obj ={username:'book'};
        obj = JSON.stringfy(obj);
        typeof obj===>>>String(变成字符串)
```

#### 2.2 json.parse(json)
    * json对象(数组)转换成js对象(数组)
``` 
        obj=JSON.parse(obj);
        typeof obj ===>>>Object
```
### 3. 给Object扩展一些静态方法，常用有两个
        1. Object.create(prototype,[descriptors])
        * 作用：以指定对象为原型创建新的对象；
        * 为新的对象指定新的属性，并对属性进行描述；
         - value:指定值
         - writable:标识符当前属性值能否修改，默认false;
         - configurable:标识当前属性值是否可以被删除，默认是false;
         - enumerable:标识符当前属性值是否能用for-in枚举，默认false;
        
        2. Object.defineProperties(object,destcriptors)
        * 作用：为指定对象定义扩展多个属性；
            * get:用来获取当前属性值的回调函数；
            * set:修改当前属性值触发的回调函数，并用实参替换成之后的值
    - 存取器属性：setter，getter:一个存值，一个取值
```
        var obj2={firstname:'kobe',lastname:'bryant'};
        Object.defineProperties(obj2,{
            fullname：{
                get:function(){//get获取扩展属性的值,获取属性值的时候自动调用
                    return this.firstname+' '+this.lastname;
                },
                set:function(data){//监听扩展属性，当属性发生变化的时候自动调用，自动调用后会将变化的值作为实参
                    var names=data.split('');
                    this.firstname=names[0];
                    this.lastname=names[1];
                }
            }
        }

    
```
#### 3.2 对象本身的两个方法
    * get 方法名(){}  用来监视当前属性的回调函数；
    * set 方法名(){}  用来监视当前属性值变化的回调函数;
```
        var obj={
            fistname:'jachin',
            lastname:'chen',
            get fullname(){
                return this.firstname+' '+this.lastname;
            },
            set fullname(data){
                var names=data.split('');
                this.firstname=name[0];
                this.lastname=name[1];
            }
        }
        console.log(obj.fullname);-->>jachin chen
        obj.fullname='jachin li';//函数内部调用监听函数set fullname()修改了属性值，如果不用set函数，属性值就没有改变
        console.log(obj.fullname);--->>>jachin li
```
  
### 4.数组
```
        1. Array.prototype.indexOf(value):得到(value)在数组中的第一个下标
        2. Array.prototype.lastIndexOf(value): 得到(value)在数组中最后一个下标
        3. Array.prototype.forEach(function(item,index){}:遍历数组
        4. Array.prototype.map(function(item,index){
            return item+10;//数组加工------例如：将数组里面的值都加上10在返回；
        }):遍历数组返回一个新的数组，返回加工后的值
        5. Array.prototype.filter(funciton(item,index){
            return item>3;//条件筛选：---例如：返回值大于3的值
        }):遍历过滤一个新的子数组，返回条件为true的值；
```

### 5.函数
```
        * call()/apply()是立即调用函数
            - function.call(obj,33)//直接从第二个参数开始，依次传入；
            - function.apply(obj,[33])//第二个参数必须是数组，插入怒到数组中
        * bind()是将函数返回；
            - bind特点：绑定this不会立即调用当前的函数，而是将函数返回，bind的传参的方式跟call一样；
```

### 6.let和const关键字
        ```
        1.let:作用跟var一样，声明一个变量
            - 在块作用域中有效
            - 不能重复声明；
            - 不会预处理，不存在变量提升；
            * 对象的解构赋值：
              let {n,a}={n:'jachin',a:22}
             * 数组的结构赋值
              let [a,b]=[22,'aguigu'];
             作用：给多个形参赋值  
            
        2.const:定义一个常量，不可以修改
```
### 7.模板字符串：简化字符串的连接
    - 模板字符串必须用``包含；
    - 变换部分使用${xxx}定义；
```
        obj={username:'kobe',age:40};
        let str=`我的名字是：${obj.username},今年的年龄是：${obj.age}`;//获取对象里面的属性，简化字符串的拼接
```
### 8. 箭头函数=>
```
        1.没有形参,只有一条语句的时候，大括号可以省略，会自动返回执行语句的执行结果或者表达式的结果
        let fun1=()=>{}
        fun1();
        2.只有一个形参的时候，()可以省略；
        let fun2=a=>console.log(a);
        3.两个及两个以上的形参的时候，()不能省略；
        let fun3=(x,y)=>console.log(x,y);
        
        箭头函数的特点：
        1. 箭头函数没有自己的this,箭头函数的this不是调用的时候决定的，而是看定义时候处在的对象就是他的this；
        2. 箭头函数的this看外层是否有函数。
                - 如果有，外层函数的this就是内部箭头函数的this;
                - 如果没有，箭头函数的this就是window;
```
### 9.点点点运算符
    - 方法一：在函数的传参过程，作用将剩余的参数放入一个数组中，合并rest参数形式为(...变量名)，其值为一个数组，用于获取函数多余参数。
```
        let arr1=[2,3,4];
        let arr2=[1,...arr1,5];----------->>>>arr2=[1,2,3,4.5];，其中...arr1代表[2,3,4]
```
    - 方法二：数组中的扩展运算：拆解
    - 拓展运算符使用(...)，类似rest参数的逆运算，将数组转为用(,)分隔的参数序列。
```
        console.log(...[1, 2, 3]);   // 1 2 3 
        console.log(1, ...[2,3], 4); // 1 2 3 4

```
    
### 10. Promise对象(异步操作)
    有了promise对象，可以将异步操作以同步的流程表达出来，避免了层层嵌套的回调函数；
#### promise的对象有三个状态：
        ```
            - pending:初始化状态
            - fullfilled:成功状态
            - rejected:失败状态 
            
        //创建promise对象
        let promise=new Promise((resolve,reject)=>{
            //初始化promise状态：pending:初始化
            console.log('111');
            //执行异步操作，通常是发送ajax请求，开启定时器；
            setTimeout(()=>{
                console.log('333');
                //根据异步任务的成功返回结果去修改promise的状态；
                //异步任务执行成功
                resolve();//修改promise的状态为fullfilled:成功状态；
                //异步任务失败
                reject();//修改 promise的状态为rejected:失败的状态；
            },2000)
        })
```
### 11.iterator接口机制，为不同的数据结构提供同意的访问机制；
#### 工作原理：
        - 创建一个指针对象(遍历器对象)
        - 第一次调用next方法，指针自动指向数据结构的第一个成员；
        - 接下来不断调用next方法，指针会一直往后移动，直到指向最后一个成员；
        - 每调用next方法返回的是一个包含value和done的对象，{value:当前成员的值，done：布尔值}
            * value表示当前成员的值，done对应的布尔值表示当前的数据的结构是否遍历结束；
           * 当遍历结束的时候返回value值是u defined,,done值为false;
        - 原生具备iterator接口的数据(可用for of遍历)
    
### 12. async函数
    - 解决异步回调的问题，同步流程表达并异步操作
```
        语法：
            async function(){
                await 异步操作；
            }
        特点；
            1.不需要像Generator去调用next方法，遇到await等待，当前的异步操作往下执行
            2. 返回的总是Promise对象，可以用then方法进行下一步操作
            3. async取代Generator函数的星号*，await取代Generator的yield
            4.语义上更为明确，使用简单；
```
### 13. class
```
        1. 通过class定义类/实现类的继承；
        2. 在类中通过constructor定义构造方法；
            
        3. 通过new来创建类的实现；
        4. 通过exteds来实现类的继承；
        5. 通过super调用父类的构造方法；
        6. 重写从父类中继承的一般方法；
```
### 14.字符串扩展
```
        1. include(str):判断是否包含指定的字符串；
        2. starsWith(str): 判断是否以指定字符串开头；
        3. endWith(str):判断是否已指定字符串结尾；
        4. repeat(count):重复指定次数；
```
### 15.数组的扩展
```
        1. Array.from(v):将伪数组对象或可遍历对象转换为真数组；
        2. Array.of(v1,v2,v3):将一系列值转换成数组；
        3. find(function(value,index,arr){return true}):找出第一个满足条件返回true的元素
            let result = arr.find(function(item,index){return item>4})//找出数组中值大于4的元素
            let result1 = arr .findIndex(fuction(iteam,index){ return item>4})
            //找出数组中值大于4的元素的下标
        4. findIndex(function(value,index,arr){return true}):找出第一个满足条件返回true的元素下标
```
### 16. 对象方法的扩展
```
        1.Object.is(v1,v2)
            * 判断2个数据是否完全相等；
        2. Object.assign(target,source1,source2..)
            Object.assign(obj,obj1,obj2);
            * 将原对象的属性复制到目标对象上
        3. 直接操作__proto__属性
            let obj2={};
            obj2.__proto__=obj1;
```
### 17. 深度克隆
    ```
        拷贝数据：
            基本数据类型：
                拷贝之后生成一份新的数据，修改拷贝之后的数据不会影响原来的数据；
            对象/数组：
                拷贝后不会生成新的数据，此时的拷贝只是引用，修改拷贝之后的数据，原来的数据也会跟着变化；
        拷贝的方法：
            1. 直接赋值给一个变量；//浅拷贝
            2. Object.assign();//浅拷贝
            3. Array.prototype.slice()；//浅拷贝
            4. Array.prototype.concat();//浅拷贝
            5. JSON.parse(JSON.stringfy());//深克隆，深拷贝，里面的函数修改不了
        - 浅拷贝(对象/数组):
                特点：拷贝的是引用，修改拷贝的数据会影响原来的数据；
        - 深拷贝(深度克隆):
                特点：拷贝的时候生成了新数据，修改拷贝之后的数据元数据不会发生变化；
```
### 18. for of 用法讲解
```
        for(let value of target){}//循环遍历
            1. 遍历数组；
            2. 遍历Set；
            3. 遍历Map;
            4. 遍历字符串；
            5. 遍历伪数组
            let arr=[1,2,4,5,5,6,2];
            let arr1=arr;
            arr=[];
            let set=new Set(arr1);
            for(let i of set){
                    arr.push(i);
            }
            console.log(arr);
```
### 19. Set、Map容器
```
            Set容器：无序不重复的多个value的集合体
            let se = new Set([1, 1, 3, 3, 4, 5, 6]);
             console.log(se);
             
             
            Map容器：无序key不可重复的多个key-value的集合体；
            let ma = new Map([
                    ['aaa', 'username'],
                    ['bb', 'username']
                ]);
                console.log(ma);
```
