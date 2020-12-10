#### 1.使用jQuery进行DOM操作
    - ~ 1.新建(元素、属性、文本)节点：直接使用$()保证即可，返回   - jQuery对象
    - & var $atguigu=$("<li id='atguigu'>尚硅谷</li>");

    - ~ 2.把节点插入到文档中：
    - ! 1.append,appendTo:把节点A插入为节点B的最后一个节点
    -     & $(A).appendTo($(B));
    -     & $(B).append($(A));

    - ! 2.prepend,prependTo:在什么之前插入元素
    -     & $(A).prepend($(B));
    -     & $(B).prependTo($(A));

    - ! 3.before,insertBefore

    - ! 4.after,insertAfter

    - ~ 3.删除节点:
    - & $("#bj").remove();

    - ~ 4.清空节点：
    - & $("#game").empty();

    - ~ 5.克隆节点
    - & $("bj").clone(true)
    -     .attr("id","bj2")
    -     .insertAfter($("#rl"));

    - ~ 6.替换节点：
    - & $("<li>jachin</li>").replaceAll($("#city li:lasst"));
    - & $("#city li:last").replaceWith($("<li>jachin</li>"))

    - ~ 7.val(),html(),text(),attr(),width(),height()等具有读写的方法
    - ^ 读取某个节点的html.内容
    - & alert($("#city").html());
    - ^ 设置某个节点的html内容
    - & $("#city").html("<li id='atguigu>'jachin</li>");

#### 2.技术点之外

-  ! 1.jQuery对象可以进行隐式迭代:$("p").click(funciton(){...});为选- 所有
-  !    p节点都添加一个个click响应函数，jQuery对象本身就是一个DOM对象- 组。   - 
-  ! 2.在jQuery中显示迭代：使用each()方法 ：
-       $("checkbox[name='c':checked").each(function(){
-           alert(this.value);
-       });
-      ? 可以在显示迭代的响应函数的参数中通过index属性获取到正则变量对- 索- 
-  ! 3.在响应函数中，this是一个DOM对象.若想使用jQuery对象的方法，需要把- 装为jQuery对象；
-       使用$()把this包装起来- 
-  ! 4.defaultValue:DOM对象的属性，可以获取表单元素的默认值- 
-  ! 5.通过val()为radio赋值：val参数中也应该使用数组，使用一个值不起作用- 
-  ! 6.val()方法不能直接获取checked被选择的值，若直接获取，只能得到第一- 选择的值；
-   ^ 因为$(":checkbox[name='c']:checked")得到的是一个数组。若希望打印- 择的
-   ^ 的所有制，则需要使用each遍历，而radio被选择的只有一个，所以直接- val()方法获取被选择的- 
-  ! 7.同js的响应函数一样，jQuery对象的响应函数若返回false，可以取消指- 素的默认行为，比如submit,a- 
-  ! 8.val()方法，相当于attr("value"),获取表单元素的value属性值。
-        
-  ! 9.$.trim(str):可以去除str的前后空- 
-  ! 10.jQuery对象的方法的连缀:调用一个方法的返回值还是调用的对象，于是
-       可以在调用方法的后面依然调用先前的那个对象的其他方法- 
-  ! 11.find()方法：查找子节点，返回值为子节点对应的jQuery对- 
-  var $trNode=$(noe).parent().parent();//这里相当于tr
-      ~ 获取$tr的第一个td节点的文本节点的文本值
-  var textContend=$trNode.find("td:first").text(); 

             