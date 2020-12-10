### 1. 区分大小写
    - 两个相同的单词，如果有单词大小写不同就是两个不同的变量(函数名，操作符)；
    
### 2. 标识符
    - 第一字符必须是字母、下划线或者美元符号($);
    - 剩下的字符可以是字母、下划线、数字或美元符号($);
**按照ESCMAScript标准，命名方式按照驼峰式，第一个单词小写，后面的单词首字母大写**

### 3.var声明提升(声明函数作用域)
    - 使用var声明的变量，会自动提升到函数作用域的顶部，这就是声明提升；
    
### 4. let声明(声明块作用域)
    - 本身自带一个块作用域，同样不允许出现冗余声明；
    - 但是可以嵌套使用相同的标识符，JavaScript引擎会记录用于变量声明的标识符及所在的作用域；
    
#### 4.1. 暂时性死区(TDZ)
    - let和var有一个很大的区别，就是let声明的变量不会再作用域中提升；
    - 在代码区内，在使用let命令声明变量之前，该变量不能使用，简称TDZ）
    - 只要块作用域存在let命令，所声明的变量就绑定这个区域，不在受外部影响
```
    console.log(name);//undefined;
    var name="hi";
    
    console.log(name);//ReferenceError:name   没有定义
    let name="hi";   //没有存在变量提升
```

#### 4.2 全局声明
    - var在全局作用域声明的变量会成为window的属性，但是let声明的变量不是window的属性；
```
    var name="window的属性";
    console.log(this.name);//正常输出
    
    let name="window的属性";
    console.log(this.name);//undefined
```

#### 4.3 for循环中的let声明
    - 在let出现之前，for循环定义的迭代变量会渗透到循环体外内部：
```
    for(var i=0;i<10;i++){
      
    }
      console.log(i);//10
      
    for(let i=0;i<10;i++){
        
    }
    console.log(i);//ReferenceError:i  没有定义；
```

### 5. const声明(声明块作用域)
    - const与let基本声明，唯一区别就是const声明时必须初始化变量，且不能修改变量值；
    - 这个限制只限于变量，如果声明的是对象，则可以修改对象的属性
        const person={};
        person.name="楚琪";
    
    
#### 5.1 声明风格及最佳实践
    - var声明变量带来太多问题，为了提高代码质量，现在都是const优先，let次之；
    
### 6. 数据类型
    - 目前有七种基本数据类型：
        - undefined：未定义；
        - boolean:布尔值；
        - string:字符串；
        - number:数值；
        - object：对象或者null;
        - function:函数；
        - symbol：符号；(ES6新增)
    
#### 6.1 undefined类型
    - 当使用var和let声明变量还没赋值之前，这些变量的类型就是undefined；
    
#### 6.2 null类型
    - null就是一个假值，表示一个空对象指针,这也是为什么typeof传一个null会返回object的原因；
**注意：undefined是由nll值派生过来的，表面上相等(undefined==null)为true**

#### 6.3 boolean类型
    - 其他数据类型需要转换成boolean类型，需要调用Boolean()函数,只能转换成true或者false;
    
#### 6.4 number类型
    - 将其他非数值转换成数值，Number(),parseInt()和parseFloat();
    - 后两个函数主要将字符串转换成数值；
** 数值转换**
- Number()转换：
    - 布尔值：true转换成1，false转换成0；
    - 数值：直接返回数值；
    - null:返回0；
    - undefined：返回NaN；
    - 字符串：其中包含一下规则：
        - 如果字符串是包含数值字符，包括数值字符前面带-、+的情况下，转换成一个十进制的数值；
        - 如果是包含有效的浮点值，则转换成相对应的浮点值(同样忽略前面的0)；
        - 如果是包含有效的十六进制格式如:"0xf",则转换成与该十六进制相等的十进制数值；
        - 如果是空字符串(不包含字符)，则返回0；
        - 如果包含情况不是上述中的一种，则返回NaN；
    - 对象：调用valueOf()方法，按照上述方法转换返回的值；如果转换的结果是NaN,则调用toString()方法，按照转换字符串的规则转换；
    
- parseInt()转换：
    - 从第一个非空格字符开始转换，如果第一个不是数值字符、加号、减号，则直接返回NaN;
    - 如果第一个非空格字符是数值字符，则也可以解析其它进制的数，如：let num2=parseInt("0x22A",16);//表示以16进制解析这个数值；
    - 
- parseFloat()转换：
    - 跟parseInt()的工作方式一样，但是只能解析到第一个小数点，第二个就失效，且剩下的字符串都会失效，只解析十进制数。
    

#### 6.5 String类型
    - 字符字面量
    - \n：换行
    - \t: 制表
    - \b: 退格 
    - \r: 回车
    - \f: 换页 
    - \\: 反斜杠(\) 
    - \': 单引号('),在字符串以单引号标示时显示
    - \": 双引号(`),在字符串中以双引号标示显示
    - \'：反引号(')
    - \xnn: 以十六进制编码nn表示的字符(其中n是十六进制数字0-F);
    - \unnn:以十六进制编码nnnn表示的Unicode字符(其中n是十六进制数字0-F);
- 数值转换：String()转型函数；
    - 如果值是有toString()方法，则调用该方法并返回结果 ；
    - 如果值是null，则直接返回"null";
    - 如果值是undefined,则返回"undefined";
```
    let num1=10;
    console.log(String(num1));//"10";
    
    let num2=true;
    console.log(String(num2));//"true";
    
    let num3=null;
    console.log(String(num3));//"null";
    
    let num4;
    console.log(String(num4));//"undefined";
```

#### 6.6 Symbol类型(保证对象是唯一额)
- 符号需要使用Symbol()函数初始化，因为符号本身是原始类型，所以typeof操作符对符号返回symbol, **符号是原始值，且符号实例唯一，不可变更**；
1. 基本用法
    - 符号需要使用Symbol()函数初始化，，因为符号本身就是原始类型，所以typeof操作符对符号返回symbol;
```
    let sm=Symbol();
    console.log(typeof sm);//symbol
```

- Symbol()函数不能跟new关键字一起作为构造函数使用，这样做是为了避免创建符号包装对象，像使用Boolean、String

- 调用Symbol()函数时，可以传入一个字符串参数作为对符号的描述，可以通过这个字符串来调试代码；
- Symbol()函数不能与new关键字一起作为构造函数使用，目的是为了避免创建符号串包装对象；
2. **常用内置符号(所有内置符号属性不能写、不可枚举、不可配置的)**
- 1. **Symbol.asyncIterator**
        - 这个符号这个符号作为一个属性表示，一个方法，该方法返回对象默认的AsyncIterator,由for-await-of语句使用，**即它是实现异步迭代器API的函数**;
        - 由这个函数生成的对象应该通过其next()方法陆续返回Promise实例；可以通过显示地调用next()方法返回，也可以隐式的通过异步生成器函数返回：
``` 
    class Emitter{
        constructor(max){
            this.max=max;
            this.asyncIdx=0;
        }
        async *[Symbol.asyncIterator](){
            while(this.asyncIdx<this.max){
                yield new Promise((resolve)=>resolve(this.asyncIdx++));
            }
        }
    }    
    async function asyncCount(){
        let emitter=new Emitter(5);
        for await(const x of emitter){
            console.log(x);
        }
    }
    asyncCount();
```

- 2. **Symbol.hasInstance** 
    - 该方法决定一个构造器对象是否认可一个对象是它的实例，由instanceof操作符使用；
    - instanceof会使用Symbol.hasInstance函数来确定关系；
    - instanceof会通过原型链查找其他属性，因此可以通过在继承的类上通过静态方法重新定义这个函数:
```
    class Bar{}
    class Baz extend Bar{
        static [Symbol.hasInstance](){
            return false;
        }
    }
    let b = new Baz();
    console.log(Bar[Symbol.hasInstance](b));//true;
    console.log(Baz[Symbol.hasInstance](b));//false;
```
         
- 3. **Symbol.isConcatSpreadable**
    - 一个布尔值，如果是true,则意味着对象应该用Array.prototype.concat()打平数组元素;ES6中的Array.prototype.concat()会根据接收到的对象类型选择如何将一个类型数组拼接成数组实例，Symbol.isConcatSpreadable的值可以修改这个行为。

    - 数组默认情况下会被打平到已有的数组，**false或假值会导致整个对象被追加到数组末尾**；
```
    let inital=['foo'];
    let array=['bar'];
    console.log(array[Symbol.isConcatSpreadable]);  //undefined
    console.log(initial.concat(array));             //['foo','bar']
    array[Symbol.isConcatSpreadable]=false;
    console.log(initial.concat(array));            //['foo',Array(1)]
```
    - 类数组对象默认会被追加到数组末尾，true或者真值会导致这个类数组对象被打平到数组实例；
```
    let arrayLikeObject={length:1,0:'baz'};
    console.log(arrayLikeObject[Symbol.isConcatSpreadable]);       //undefined;
    console.log(initial.concat(arrayLikeObject));               //['foo',{...}]
    arrayLikeObject[Symbol.isConcatSpreadable]=true;
    console.log(initial.concat(arrayLikeObject));               //['foo','baz']
```
    - 其他不是类数组对象的对象会在Symbol.isConcatSpreadable被设置为true的情况下将被忽略；
``` 
    let otherObject=new Set().add('qux');
    console.log(otherObject[Symbol.isConcatSpreadable]);//undefined;
    console.log(initial.concat(otherObject));           /['foo',Set(1)]
    otherObject[Symbol.isConcatSpreadable]=true;
    console.log(initial.concat(otherObject));           //['foo']
```
- 4. **Symbol.iterator**
    - 一个方法，该方法返回对象默认的迭代器，由for-of使用(实现迭代器API的函数);
    - 由Symbol.iterator函数生成的对象应该通过其next()方法陆续返回值，可通过next()方法返回，也可以通过隐式地生成器函数返回：
```
        class Emitter{
            constructor(max){
                this.max=max;
                this.idx=0;
            }
            *[Symbol.iterator](){
                while(this.idx<this.max>{
                    yield this.idx++;
                })
            }
        }
        function count(){
            let emitter= new Emitter(5);
            for(const x of emitter){
                console.log(x);
            }
        }
        count();//0,1,2,3,4;
```
- 5. **Symbol.match**
    - 一个正则表达式，用于匹配字符串，由String.prototype.match()使用;正则表达式地原型上有这个函数地定义，所以一般都是使用Symbol.math来代替String.prototype.mathc()对正则表达式求值；
```
    class FooMatcher{
        static [Symbol.match](target){
            return target.include('foo');
        }
    }
    console.log('foobar'.match(FooMatcher));//true
    console.log('barbaz'.match(FooMatcher));//false;
```

- 6. **Symbol.replace**
    - 一个正则表达式方法，该方法替换一个字符串中匹配的字串，由String.prototype.replace()方法使用。跟match()一样，它会以Symbol.replace()为键的函数来对正则表达式求值；
```
    class FooReplacer{
        static [Symbol.replace](target,replacement){
            return target.split('foo').join(replacement);
        }
    }
    console.log('barfoobaz'.replace(FooReplacer,'qux'));//"barquxbaz"

    class StringReplace{
        constructor(str){
            this.str=str;
        }
        [Symbol.replace](target,replacement){
            return target.split(this.str).join(replacement);
        }
    }
    console.log('barfoobaz'.replace(new StringRepalce('foo'),'qux'));

```
- 7. **Symbol.search**
    - 一个正则表达式方法，该方法返回字符串中匹配正则表达式的索引，由String.prototype.search()方法使用；
```
    class FooSearcher{
        static [Symbol.search](target){
            return target.indexOf('foo');
        }
    }
    console.log('foobar'.search(FooSearcher));//0
    console.log('barbaz'.search(FooSearcher));//-1,不存在就返回-1；

    class StringSearcher{
        constructor(str){
            this.str=str;
        }
        [Symbol.search](target){
            return target.indexOf(this.str);
        }
    }
    console.log('foobar'.search(new StringSearcher('foo')));//0
```
- 8. **Symbol.species**
    - 一个函数值，该函数作为创建派生对象的构造函数。
    - 用于对内置类型实例方法的返回值暴露实例化派生对象的方法，用Symbol.species定义静态的获取器(getter)方法，可以覆盖新创建实例的原型定义：
```
    class Bar extends Array{}
    class Baz extends Array{
        static get [Symbol.species](){
            return Array;
        }
    }
    let bar =new Bar();
    console.log(bar instanceof Array);//true;
    console.log(bar instanceof Bar);//true;
    let baz=new Baz();
    baz = baz.concat('baz');
    ** console.log(baz instanceof Baz);//false,**
``` 
- 9. **Symbol.split**
    - 表示在匹配正则表达式的索引位置拆分字符串，由String.prototype.split()使用,同样会使用Symbol.split()代替；
```
    class StringSplitter{
        constructor(str){
            this.str=str;
        }
        [Symbol.split](target){
            return target.split(this.str);
        }
    }
    <!-- 其中barfoobaz就是split中的target参数，'foo'就是StringSplitter中的str -->
    console.log('barfoobaz'.split(new StringSplitter('foo')));//['bar','bar']
```
- 10. **Symbol.toPrimitive**
    - 该方法将对象转换为相应的原始值，由ToPrimitive抽象操作使用;
    - 根据提供给这个函数的参数(string,number或default),可以控制返回的原始值；
```
    class Bar{
        constructor(){
            this[Symbol.toPrimitive]=function(hint){
                switch(hint){
                    case 'number':
                    return 3;
                    case 'string':
                    return 'string bar;
                    case 'default':
                    return 'default bar';
                }
            }
        }
    }
    let bar=new Bar();
    console.log(3+bar);//"3default bar"
    console.log(3-bar);//0
    console.log(String(bar));//"string bar"
```
- 11. **Symbol.toStringTag**
    - 一个字符串，用于创建对象的默认字符串描述;
    - 由内置方法Object.prototype.toString()使用，且使用Symbol.toStringTag代替使用;
    - 通过toString()方法获取对象标识时，会检索到由Symbol.toStringTag指定的实例标识符，默认是"Object";
```
    class Bar{
        constructor(){
            this[Symbol.toStringTag]='Bar';
        }
    }
    let bar=new Bar();
    console.log(bar);   //Bar{}
    console.log(bar.toString());//[object Bar]
```
- 12. **Symbol.unscopables**
    - 该对象所有的以及继承的属性都会从关联对象的with环境绑定中解除;
    - 设置这个符号并**让其映射对应属性的键值为true，就可以阻止该属性出现在with环境绑定中**
```
    let o={foo:'bar'};
    with(o){
        console.log(foo);//bar
    }
    
    o[Symbol.unscopables]={
        foo:true;
    };
    with(o){
        console.log(foo);//ReferenceError
    }
```
            
#### 6.7 Object类型
   - 对象就是一组数据和功能的集合。
   - 通过创建Object类型创建自己的对象，然后给对象添加属性和方法：
       let o =new Object();
   - 每个Object实例都有如下的属性和方法：
       1. constructor：用于创建当前对象的函数。
       2. hasOwnProperty(propertyName):用于判断当前对象实例是否存在给定的属性；如：test.haoOwnProperty("name");
       3. isPrototypeOf(object):用于判断当前对象是否为另一个对象的原型；
       4. propertyIsEnumberable(propertyName):用于判断给定的属性是否可以使用for-in语句枚举。与hasOwnProperty()一样，属性名必须是字符串；
       5. toLocaleString():返回对象的字符串表示，该字符串反映对象所在的本地化执行环境。
       6. toString():返回对象的字符串表示。
       7. valueOf():返回对象对应的字符串、数值或布尔值表示。通常与toString()的返回值相同。
        
### 7. 操作符
   - 乘性操作符||-除法操作符
       - 如果操作数都是数值，则执行常规的乘法运算，如果ECMAScript不能表示乘法，则返回Infinity或者-Infinity;
       - 如果有任一操作属是NaN,则返回NaN;
       - 如果是Infinity乘以0，则返回NaN;
       - 如果是Infinity乘以非0的有限数值，则根据第二个操作数的符号返回Infinity或者-Infinity;
       - 如果是Infinity乘以Infinity，则返回Infinity；
       - 如果有不是数值的操作数，则先在后台用Number()将其转换为数值，然后在应用上述规则；
        
    - 指数操作符：ES7新增的指数操作符，Math.pow()有了自己的操作符,结果一样
```
        console.log(Math.pow(3,2);//9
        console.log(3**2);//9
```
   - 加性操作符
       - 如果有任一操作符是NaN，则返回NaN;
       - 如果是Infinity加Infinity，则返回infinity；
       - 如果是-infinity加infinity，则返回NaN;
       - 如果是-0+0，则返回0；
       - 如果是-0+-0，则返回-0；
       - 如果两个操作数是字符串，则将第二个字符串拼接到第一个字符串后面；
       - 如果只有一个操作数是字符串，则将另一个操作数转换为字符串，在拼接起来；
       
    - 减法操作符

      - 如果是infinity减infinity，则返回NaN;
      - 如果是-infinity减-infinity，则返回NaN;
      - 如果是infinity减-infinity,则返回infinity；
      - 如果是-infinity减infinity，则返回-infinity;
      - 如果是+0减+0，则返回+0；
      - 如果是+0减-0，则返回-0；
      - 如果是-0减-0，则返回+0；
      - 如果是任意操作数是字符串、布尔值、null或undefined，则先在后台使用Number()将其转换为数值，再按照规则执行运算，如果转换结果是NaN,则减法计算的结果是NaN；
    - 如果任意操作数是对象，则调用其valueOf()方法取得它的数值。如果该值是NaN,则减法计算的结果是NaN,如果对象没有valueOf()方法，则调用其toString()方法，然后将得到的字符串转换成为数值；
      
    - 关系操作符
        - 如果操作数都是数值，则执行数值比较；
        - 如果操作数都是字符串，则逐个比较字符串中对应字符的编码；
        - 如果有任一操作数是数值，则将另一个操作数转换为数值，执行数值比较；
        - 如果有任一操作数是对象，则调用其valueOf()方法，取得结果后再根据前面的规划执行比较；
            如果没有valueOf()操作符，则调用toString()方法，取得结果后再根据前面的规划执行比较。
        - 如果有任一操作数是布尔值,则将其转换为数值在执行比较；
        
    - 相等操作符
        - 等于和不等于：两个操作数都会先进行类型转换(强制类型转换)，在确定操作数是否相等；
```
        表达式                      结果
        null==undefined             true
        "NaN"==NaN                  false
        5 == NaN                    false
        NaN==NaN                    false
        NaN !=NaN                   true
        false==0                    true
        true ==1                    true
        true ==2                    false
        undefined==0                false
        null==0                     fasle
        "5"==5                      true
```
    
    - 全等和不全等：两个操作数在不转换的前提下相等才返回true;
    
    - 条件操作符：如：let max=(num1>num2)？num1:num2;
    
    - 赋值运算符：有这些复合的赋值运算符
```
        - 乘后赋值(*=)
        - 除后赋值(/=)
        - 取模后赋值(%=)
        - 加后赋值(+=)
        - 减后赋值(-=)
        - 左移后赋值(<<=)
        - 右移后赋值(>>=)
        - 无符号右移后赋值(>>>=)
 ```
 
    - 逗号操作符：在赋值时使用逗号操作符分隔值，最终返回表达式中最后一个值：let num=(1,2,3,4)//4;
        
        
### 8. 语句
    - for-in语句：用于枚举对象中的非符号键属性；
        如：for(property in expression) statement
    
    - for-of语句：用于遍历可迭代对象的元素；
        如：for(property of expression) statement
        
    - with语句：将代码作用域设置为特定对象,运用场景：针对一个对象反复操作，这时候将代码作用域设置为该对象能提供便利；
        with (expression) statement;
```
        let qs=location.search.substring(1);
        let hostName=location.hostName;
        let url=location.href;
    -----使用with语句后--------
        with(location){
            let qs=search.substring(1);
            let hostName=hostName;
            let url=href;
        }
```
        
        
