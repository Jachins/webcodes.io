### 哈希模式 location.hash='/'或者'实例'之类的

### HTML5中的history模式
- history.pushState():表示进栈；
- history.repalceState():表示替换当前的元素；
- history.back()等于history.go(-1):表示当前栈的第一个元素出栈,加载history栈中的前一个URL；
- history.forward()等于history.go(1):表示向当前栈进一步,forward()加载history栈中的后一个URL,go()加载列表中的某一个页面；
- history.length():保存历史URL地址列表的长度信息