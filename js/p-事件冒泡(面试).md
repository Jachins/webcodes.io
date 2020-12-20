#### DOM2规定的事件流包括三个阶段：
- 事件捕获(从顶部到底部目标元素)
- **Document**\==>**html**\==>**body**\==>**div**
- 处于目标阶段(事件处理)；

- 事件冒泡阶段(从底部目标元素到顶部)：事件按照DOM层次结构像水泡一样不断往上直至顶端。
    - **冒泡:** 事件向上传导，当后代元素上的事件被触发，其祖先元素相同的事件也会被触发。
- **div**\==>>**body**\==>>**html**==>>**Document**
    - **开启冒泡:** bubble=true;
    - **阻止冒泡:** 调用event.stopPropagation阻止事件冒泡(IE中：event.cancelBubble=true);

#### addEventListenter("第一个参数","第二个参数",false)就是事件冒泡，addEventListenter("第一个参数","第二个参数",true)就是事件捕获。，默认使用事件冒泡

#### 不支持冒泡的事件
- ①：focus
- ②：blur
- ③：mouseenter
- ④：mouseleave
- ⑤：load
- ⑥：unload
- ⑦：resize
- **注意：妈(mouseenter)妈(mouseleave)不(blur)放(focus)心你(load,unloas)