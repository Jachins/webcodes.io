### 1. reflow(回流/重排)
- reflow回流，或者叫重排；回流这个名词指的是浏览器为了重新渲染部分或全部的文档而重新计算文档中的元素的位置和几何结构的过程；
- 即当前页面的布局或者几何属性改变时就需要reflow;

#### 如何触发？
- 盒模型的相关属性：width,height,margin,display,border
- 定位属性及浮动相关的属性：top,position,float
- 改变节点内部文字结构也会触发回流：text-align,overflow,font-size,line-height,vertival-align

- 调整窗口的大小；
- 样式表变动；
- 元素内容发生变化，尤其是输入控件
- dom操作
- css伪类激活
- 计算元素的offsetWidth,offsetHeight,clientWidth,width

### 2. repaint(重绘)
- 页面中的元素更新样式风格相关的属性时就会触发重绘，如：background，color，cursor,visibility;
**注意：由页面的渲染可以知道，reflow必定会引起repaint,但是repaint不一定会引起reflow