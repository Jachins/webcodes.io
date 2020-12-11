|属性|作用|
|:------:|:-------:|
|static|默认属性值，浏览器自主决定的位置，元素和元素之间不发生重叠|
|relative|相对定位，相对于自身在正常文档流中的位置进行偏移定位|
|fixed|相对于浏览器窗口，固定定位|
|absolute|绝对定位，相对于父元素(position不为static的元素进行偏移,脱离了正常的文档流|
|sticky|能形成**动态固定**的效果，效果很像relative和fixed的结合，初始加载是relative位，页面滚动的时候就变成fixed定位|
|inherit|从父元素中继承position的值|