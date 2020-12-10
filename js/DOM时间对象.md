### DOM 中的事件对象
1. preventDefault():取消事件默认行为；
2. stopImmediatePropagation():取消事件冒泡同时阻止当前节点上的事件处理程序被调
用；
3. stopPropagation():取消事件冒泡对当前节点无影响；

### IE中的事件对象
1. cancelBubble():取消事件冒泡；
2. returnValue():取消事件默认行为；