**引用值(或者对象)：某个特定引用类型的实例;**
### 1.Date:创建时间对象，获取当前的日期和时间
    let now = new Date();
   
#### Date.parse() 

```
        创建一个固定的时间日期：
            let newDate = new Date(Date.parse("May 23 ,2020")); //Date.parse()中如果不是日期，则直接返回NaN;
        如果直接把时间赋给Date()构造函数，那么Date就会在后台调用Date.parse(),所以上述代码可以写成：
        let newDate=new Date("May 23,2020");
```

#### Date.UTC()
    
```
        必须提供年月，其他默认参数是0；
        <!>>2020年5月16号16：55：44>>>
        //月数是从0开始，0代表1月
        let newDate2=new Date(Date.UTC(2020,4,5,16,55,44));
        如果直接把时间赋给Date()构造函数，那么Date就会在后台调用Date.UTC(),所以上述代码可以写成：
        let newDate2=new Date(2020,4,5,16,55,44);
```

#### Date.now():返回当前方法执行日期和时间的毫秒数；

### 2. RegExp:是正则表达式（regular expression）的简写。

> RegExp 修饰符
    修饰符用于执行不区分大小写和全文的搜索。

    i > 修饰符是用来执行不区分大小写的匹配。

    g > 修饰符是用于执行全文的搜索（而不是在找到第一个就停止查找,而是找到所有的匹配）。
    
#### RegExp的实例方法是：exec():
    > 检索字符中的指定值，返回值是被找到的值，如果没有找到匹配，则返回null;
    > 主要用于配合捕获组使用，只接收一个参数，那就是需要被检索的字符串；
    > 返回数组是Array的实例，但是也有两个额外的属性，index(字符串中匹配模式的起始位置)和input(要查找的字符串)；如果模式中没有模式，那么数组只有一个元素；
    
### 3. 原始值包装类型
    > 每当使用某个原始值的方法和属性时，后台都会创建一个相应原始包装类型的对象，从而暴露操作原始值的各种方法。如：
```
        let text1= "new text1";
        let text2=text1.subString(2);
        
        在以读模式访问字符串值的任何时候，后台都会经过3步处理：
        1. 创建一个string类型的实例：
            > let text1=new String("new text1");
        2. 调用实例上的特定方法：
            > let text2=text2.subString(2);
        3. 销毁实例；
            > s1=null;
```
    > subString():返回字符串中的子字符串；
```
        substring(beginIndex,endIndex);//beginIndex表示开始的位置(从0开始)，endIndex表示结束的位置(如果省略就默认到结束)；
```
** 注意：引用类型和原始包装类型的主要区别在于对象的生命周期**

### 4. Number
    > toFixed(): 返回包含指定小数点位数的数值字符串；
```
    let num=10;
    console.log(num.tofixed(2));//10.00
```
    > toExponential():返回以科学计数法表示的数值字符串；
    > isInteger():用于辨别一个数值是否存在整数；
    
### 5.String:对应字符串的应用类型
    > trim()方法：
        > 创建一个字符串副本，然后删除前后的所有空格符，再返回结果(需要注意的时：修改的只是副本，原来的数据并没有并修改)。
        
    > repeat()方法：
        > 接收一个整数参数，表示字符串复制多少次，然后返回拼接所有副本后的结果；
        
    > padStart()和padEnd()方法：
        > 负值字符串，如果小于指定长度，则相应的填充字符，直到满足长度条件；
            > 第一个参数是长度，第二个参数是可选的填充字符，默认是空格
```
        let test1="foo";
        console.log(test1.padStart(6);//"   foo";
        console.log(test1.padStart(6,",");//",,,foo";//在前面填充，，，
        
        console.log(test1.padEnd(6,'.');//"foo...";在后面填充
```
    
### 6. localeCompare()方法
    > 比较两个字符串，返回如下三个值(1,0,>1)
        1.如果按照字母表顺序，字符串应该排在字符串参数前头，返回负值
        2.如果字符串与字符串参数相等，则返回0；
        3.如果按照字母表顺序，字符串应该排在字符串参数后头，则返回正值；
        
### 7. 单例内置对象
#### 7.1 Global
    > 1.URI编码方法
        编码：encodeURI()和encodeURIComponent()方法用于编码统一资源标识符(URI),方便传给浏览器，有效的URI不能包含某些字符，同时以特殊的UTF>8编码替换所有无效的字符；
            encodeURI()不会编码属于URL组件的特殊字符，(除空格被替换成%20之外，没有其他变化)
            而encodeURIComponent()：会编码所有非标准字符(将所有非字母字符都替换成了相应的编码形式)；
        解码：decodeURI()和decodeURIComponet()方法用于解码统一资源标识符(URI);
        
    > 2. eval()方法：
    > 一个完整的ECMAScript解释器，接收一个参数，就是一个要执行的Javascript字符串
```
    eval("console.log('hi')")===console.log('hi');
```
    > 通过eval()定义的任何变量和函数都不存在提升，这是因为在解析代码的时候，，他们都是被包含在一个字符串中，只有eval()被执行的时候才会被创建；但是在严格模式下，在eval()定义的变量和函数无法被外部访问，因此会报错。
        
#### 7.2 Math
> 1. max()和min()方法
> 2. 舍入方法：把小数值的舍入为整数的四个方法
    >Math.ceil():始终向上舍入为最接近的整数；
    >Math.floor():始终向下舍入为最接近的整数；
    >Math.round():执行四舍五入；
    >Math.fround():返回数值最接近的单精度的浮点值表示；
> 3. random()方法
    >Math.random()返回一个0~1范围的随机数，其中包含0不包含1，
    ```
    从1~10中随机选一个数，则代码为：
    let number=Math.floor(Math.random()*10+1);
    ```
### 8. 原始值
- 现在js的原始数据类型有六种：undefined，null,boolean,string,symbol(es6),number;