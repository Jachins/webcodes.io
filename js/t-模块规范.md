#### CommonJS规范
- 主要是为了弥补JavaScript没有标准的缺陷；
- **在Node中，一个文件就是一个模块**

#### CommonJS的模板规范
- 对模块的定义主要分为三部分：模块引用、模块定义、模块标识；
- ##### 模块引用
    - require()方法:接受模块标识，以此引入一个模块的API到上下文中；
    ```
    var math=require('math');
    ```
- #### 模块定义(exports对象和module对象)
    - exports对象：用于导出当前模块的方法和变量，并且这是唯一导出的出口
    - module对象：代表模块自身，exports是module的属性；
    - 将方法挂载在exports对象上作为属性就可以定义导出的方式：
    ```
        //math.js
        exports.add=function(){
            var sum=0;
            i=0;
            args=arguments;
            1=args.length;
            while(i<1>){
                sum +=args[i++];
            }
            return sum;
        }
    ```
    - 在另一个文件中，通过require()方法引入模块后，就可以直接调用定义的属性或方法：
    ```
        //program.js
        var math=require('math');
        exports.increment=function(val){
            return math.add(val,1);
        }
    ```
- #### 模块标识
    - 传递给require()方法的参数，必须是以小驼峰命名的字符串，或者以.、..开头的相对路径或者决定路径，可以没有后缀名.js.

#### AMD规范(前置依赖)
- AMD规范是CommonJS规范的一个延伸；
- #### 模块定义
    ```
    define(id?,dependence?,factory);
    ```
- 与CommonJS不同之处：
    1. AMD需要一个define来明确定义一个模块，在Node中实现是隐式包装的，他们的目的是进行作用域隔离，仅在需要的时候引入，防止变量污染和不小心被修改。
    2. 内容需要通过返回的方式实现导出。

#### CMD规范(后置依赖)
- CMD模块定义：更接近Node对CommonJS规范的定义：
```
    define(factory)
```
- 与AMD的区别是：定义模块和依赖引入的部分；
    - AMD在声明模块的时候需要指定所有的依赖，通过形参传递依赖到模块内容中；
    - CMD在依赖部分是动态引入，调用require()引入；
    ```
        define(function(require,exports,module){
            //The module code goes here；--require,exports,module通过形参传递给模块
        });
    ```

#### ES6 Module规范
- Javascript语言标准模块化方案，浏览器和服务器通用，功能主要由**export**和**import**两个命令组成；
- **export**：用于定义模块的对外接口；
- **import**：用于输入其他模块提供的功能；