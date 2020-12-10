#### 1. HTML input元素种类
|元素种类|描述|
|:------:|:-------:|
|button|没有默认行为的按钮|
|checkbox|复选框，可设为选中或未选中|
|color|用于指定颜色的空间|
|date|输入日期|
|datetime-local|输入日期时间的控件|
|email|邮箱地址的区域|
|file|让用户选择的控件|
|hidden|不显示控件|
|image|带图像的submit按钮|
|number|用于输入数字的控件|
|password|单行的文本区域|
|radio|单选按钮|
|range|范围控件|
|reset|重置|
|search|搜索字符串的单行文本区域|
|submit|用于提交表单|
|tel|用于输入电话号码的控件|
|text|默认值，单行的文本区域|
|time|时间控件|
|url|用于输入URL的控件|
|week|输入年和周|
|datetime|输入基于UTC的时间(已经被淘汰)|

#### 2. 含有默认margin的标签有
- dl标签；
- ol,ul标签；
- p标签；
- body标签；
- form标签；
- img标签；

#### 3. 一个针对移动网页优化的页面的viewport meta标签如下：
```
    <meta name="viewport" content="width=device-width">
```
- width:控制viewport的大小，可以指定一个确定值，也可以特殊值，如：device-width;
- height:和width相对应；
- initial-scale：初始缩放比例，当页面第一次load的时候的缩放比例；
- maximum-scale:允许用户缩放到的最大比例；
- minmum-scale：允许用户缩放到最小比例；
- user-scalable:用户是否可以手动缩放；