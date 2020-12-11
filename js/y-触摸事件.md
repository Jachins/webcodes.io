### 触摸事件
#### 四种touch事件
- ①：touchstart:手指放到屏幕上时触发
- ②：touchmove: 手指在屏幕上滑动式触发
- ③：touchend: 手指离开屏幕时触发
- ④：touchcancel: 系统取消touch事件的时候触发；

#### 每个触摸事件被触发之后，都会生成一个event对象，该对象中包括三个触摸列表
- 1. touches:当前屏幕上所有手指的列表
- 2. targetTouches:当前dom元素上手指的列表
- 3. changedTouches:涉及当前事件的手指列表