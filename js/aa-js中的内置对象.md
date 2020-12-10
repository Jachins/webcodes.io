  ### 各种表
##### JS内置对象
|Arguments|函数参数集合|
|:------:|:------:|
|Array|数组|
|Boolean|布尔对象|
|Date|日期时间|
|Error|异常对象|
|Funciton|函数构造器|
|Math|数学对象|
|Number|数值对象|
|Object|基础对象|
|RegExp|正则表达式对象|
|String|字符串对象|

##### 其他类型转换成boolean类型
|数据类型|转换为ture|转换为false|
|:------:|:------:|:------:|
| Boolean|true|false|
|String|任何非空字符串|空字符串|
|Number|任何非零数字值(包括无穷大)|0和Null|
|Object|任何对象|null|
|Undefined|  |Undefined|

##### 规定input元素的类型
|type|
|:------:|
|button|
|checkbox|
|file|
|hidden
|image
|password
|radio
|reset|
|submit
|text

##### animation-timing-function动画的属性
|属性|描述|
|:------:|:------:|
|linear|动画从头到尾的速度都是相同的|
|ease默认|动画以低速开始，然后加快，在结束前变慢|
|ease-out|动画以低速结束|
|ease-in|动画以低速开始|
|ease-in-out|动画以低速开始和结束|
|cubic-bezier(n,n,n,n)|在cubic-bezier函数中自己的值，可能的值是从0到1的数值|

##### typeof x：用来检测一个对象是否已经定义或者是否已经赋值
|变量 x|typeof x|
|:------:|:------:|
|undefined|"undefined|
|true或false|"boolean"|
|任意数字或者NaN|"number"|
|任意字符串|"string"|
|函数对象|"function"|
|任意内置对象(非函数)|"object"|
|数组|"object"|
|null|"objcet"|
|宿主对象|由编译器各自实现的字符串，但不是"undefined","number","boolean","string"|
|正则表达式|各浏览器表现不一|

##### 调用对象属性的方法(调用对象obj的arr属性)
- 方式一：obj.arr;
- 方式二: obj["arr"];


##### 屏幕尺寸
- col-xs:超小屏幕 手机(<768px>)
- col-sm:小屏幕 平板(768px-991px)
- col-md:中等屏幕 桌面显示器(>991px)
- col-lg:大屏幕 大桌面显示器(>1200px)