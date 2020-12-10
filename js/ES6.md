## 第一章：ES6 简介
### 1.ECMAScript 和Javascript的关系
    - 前者是后者的规格，后者是前者的实现；（在一般情况下，这两个词可以互换的）；
    
### 2. 部署进度
    - node.js是JavaScript的服务器运行环境；

### 3.Babel转码器
    - 可以将ES 6转换成ES 5，从而在老的服务器使用。

### 4. 声明变量的方法 (6种)
    var命令，function命令，let命令，const命令，import命令，class命令；
    
## 第二章 ： let和const命令
### 1. let命令
    - 基本用法：用于声明变量，仅在块作用域使用；
    - 不存在变量提升；
    - 存在暂时性死区：（在代码区内，在使用let命令声明变量之前，该变量不能使用，简称TDZ）
        - 只要块作用域存在let命令，所声明的变量就绑定这个区域，不在受外部影响
    - let不允许重复声明变量；
    - let实际上为javascript新增了块级作用域，外层作用域无法访问内层作用域的变量；
    
### 2. const变量
    - const一般用来声明常量；
    - 只在声明的作用域使用有效
    - 同样不存在变量声明，存在暂时性死区，只能在声明后使用；
    
### 3. 全局对象的属性
    - 在浏览器环境中，指的是window对象，在node.js中的是global对象；
    - var命令，function命令声明的全局变量是全局对象的属性；
    - let命令，const命令，class命令声明的全局变量不是全局对象的属性；
    
## 第三章：变量的解构赋值
### 1. 解构：按照一定的模式，从数组或者对象中提取值，对变量进行赋值；

### 2.数组的解构赋值
```
    let[x,,y]=[2,1,3];
    x ==2;
    y==3;
```
    - 解构赋值允许指定默认值；
    var [foo=true]=[];

### 3. 对象的解构赋值
```
    var{foo,bar}={foo:"aaa",bar:"bbb"};
    
    <!--变量名与属性名不一样-->
    var{foo:baz}={foo:"aaa",bar:"bbb"};
    baz//"aaa";
    
```
    - 注意：对象的解构赋值的内部机制，先找到同名属性，再给对应的变量赋值，真正被赋值的是变量而不是属性；
    
### 4. 字符串的解构赋值
    - const[a,b,c,d,e]='hello';
    a //"h"
    b //"e"
    
### 5. 数值和布尔值的解构赋值
    - 解构赋值时，如果等号右边是数值或者布尔值，则先会转换成对象。
```
    let{toString:s}=123;
    s === Number.prototype.toString //true
```

### 6. 函数参数的解构赋值
```
     fuciton add([x,y]){
        return x+y; 
    }
    add([1,3])//4
```

## 第四章：字符串的扩展
    
## 第五章：正则的扩展
    - u修饰符
        用来处理大于\uFFFF的Unicode字符
    - 点字符：除换行符以外的任意单个字符；
    - Unicode 字符表示法：使用大括号表示Unicdoe字符的表示法，使用的时候必须加上u修饰符
         /\u{61}/u.test('a')//true;
## 第六章：箭头函数
    - 基本用法
```
    1.有一参数
    var f=v =>v;
     等同于：
     var f=function(v){
         return v;
     }
     2.无参数
     var f=()=>v;
     等同于：
     var function(){
         return 8;
     }
     3.多个参数
     var f=(num1,num2)=>num1+num2;
     等同于：
     var function(num1+num2){
         return num1+num2;
     }
     4. 箭头函数可以跟变量解构结合使用
     const full=({first,last})=>first+" "+last;
     等同于：
     function full(person){
         return person.first+" "+person.last;
     }
     5.嵌套的箭头函数
        function insert(value){
            return {into:fuction(array){
                return {after:function(afterValue){
                    array.splice(array.indexOf(afterValue)+1,0,value);
                    return array;
                }
            };
        }};
        等同于：
        let insert=(value)=>({into:(array)=>({after:(afterValue)=>{array.splice(array.indexOf(afterValue)+1,0,value);
        return array;
        }})});
```

## 第七章：Symbol(一种数据类型，不是对象，不可以new操作)
    - Symbol值通过Symbol函数产生的，所以值都是独一无二的，不会发生属性名冲突；

### 可迭代对象
- ES6规定，默认的lterator接口部署在数据结构的Symbol.iterator属性，就可以认为是可遍历的(iterable)/(可迭代)
#### 原生具备Iterator接口的数据结构如下：
- Array
- Map
- Set
- String
- TypeArray
- 函数的argument对象
- NodeList对象
- Generators