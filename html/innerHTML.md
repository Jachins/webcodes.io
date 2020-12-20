### innerHTML属性：
- 返回该属性所在标签内的所有内容；

### innerText:
- 从起始位置到终止位置的内容，去除html标签

### outerHTML：
- 除了包含innerHTML的全部内容之外，还包含对象元素本身

### outerText:
- 设置或获取标签本身以及包含的文本信息；

### command标签和menu标签
- command标签只有再menu标签内才可见，否则不会显示出来

### 如：
```
    <div id="div1">
        <p id="p1">this a text</p>
    </div>
    <script>
        var div=document.getElementsByTagName("div");
        console.log(div[0].innerHTML);   //<p id="p1">this is a text</p>
        console.log(div[0].innerText);   //this is a text
        console.log(div[0].outerHTML);   //<div id="div1"><p id="p1">this is a text</p></div>
        console.log(div[0].outerText);   //this is a text
    </script>
```