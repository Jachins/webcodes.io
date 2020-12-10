### 1.css有哪些基本选择器，他们的权重如何表示的？
    - css选择器基本由类选择器，属性选择器和id选择器；
    - css选择器的权重预示着css选择器样式渲染的先后顺序，元素样式渲染时，权重高的选择器样式会覆盖权重低的选择器样式；
    - 其中选择器的权重分别分为4个等级，可用0.0.0.0来表示这4个等级：
        - ！important 关键字优先级最高；
        - 内联样式的优先级是1.0.0.0;
        - ID选择器的优先级为0.1.0.0；
        - 类属性选择器、属性选择器、伪类的优先级为0.0.1.0；
        - 元素选择器、伪元素选择器的优先级为0.0.0.1;
        - 通配符选择器对特殊性没有任何贡献值;
    **注意：当选择器组合起来的时候，相对应的层级权重也会递增，如#id.class的权重为：0.1.1.0**

### 2. css的引入方式有哪些？link和import的区别是什么？
    - CSS有3种方式：
        - 行内式是指将样式写在元素的style属性内；
        - 内嵌式是指将样式写在style元素内；
        - 外链式是指通过link标签，引入CSS文件的样式；
    - 通过link标签引入样式与通过@import方法引入样式有如下区别：
        - (1).加载资源的限制
            link是XHTML的标签，除了加载CSS文件外，还可以加载RSS等其他事务，如加载模板；
            @import只能加载CSS文件；
        - (2).加载方式
            如果用link引用CSS，在页面载入时间同时加载，即同步加载；
            如果用@import引入CSS，则需要等到网页完全载入后，在加载CSS文件，即异步加载；
        - (3).兼容性
            link是XHTML的标签，没有兼容问题；
            @import是在CSS2.1中提出的，不支持版本低的浏览器；
        - (4).改变样式
            link标签是DOM元素，支持使用JavaScript控制DOM和修改样式；@import是一种方法，不支持控制DOM和修改样式；

### 3. 浮动元素引起的问题和解决方法是什么？
    - 引起的问题：
        - 父元素的高度无法被撑开，影响与父元素同级的元素；
        - 与元素同级的非浮动元素会紧跟随其后；
        - 如果一个元素浮动，则该元素之前的元素也需要浮动；否则，会影响页面显示的结构；
    - 解决方法：
        - 为父元素设置固定高度；
        - 为父元素设置overflow:hidden即可清除浮动，让父元素的高度被撑开；
        - 使用clear:both样式属性清除元素浮动；
        - 外墙法是指在父元素外面，添加"一道墙",设置属性clear:both;
        - 内墙法是指在父元素内部，浮动元素的最后面，添加"一道墙",设置属性clear:both.
        - 伪元素是指为了少创建元素，对父元素添加after伪元素，设置属性content:"";display:block;clear:both;
        - 使用通用类clearfix,
        ```
            .clearfix{
                content:"";
                display:block;
                clear:both;
            }
        ```
        
### 4. position的值分别是相对于哪个位置定位的？
    - relative:表示相对定位，相对于自己本身所在正常文档流中的位置进行定位。
    - absolute：表示绝对定位，相对于最近一级定位，相对于static的父元素进行定位；
    - fixed：用于生成绝对定位，相对于浏览器窗口或frame进行定位；
    - static:默认值，表示没有定位，元素出现的在正常的文档流中；
    - sticky:是生成黏性定位的元素，容器的位置根据正常文档流计算得出；
    
### 5. 请说明position:absolute和float属性的异同。
    - 共同点：
        - 对内联元素设置float和absolute属性，可以让元素脱离文档流，并且可以设置其宽高；
    - 不同点：
        - float仍可以占据位置，不会覆盖在另一个BFC区域上，浮动的框可以向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。absolute会覆盖文档流中的其他元素，即遮盖现象；

### 6. CSS选择器有哪些？
    - id选择器；
    - 类选择器
    - 标签选择器；
    - 相邻选择器(h1+p);
    - 子选择器(ul>li);
    - 后代选择器(li a);
    - 通配符选择器(*);
    - 属性选择器(button[disabled="true");
    - 伪类选择器(a:hover),表示一种状态；
    - 伪元素选择器(li:before、":after");
    
### 7. CSS哪些样式可以继承，哪些不可以继承？
    - 可继承的样式有：font-size font-family color、UL LI DL DD DT.
    - 不可继承的样式有：border,padding ,margin,width,height;
**与字体相关的样式都可以继承，与尺寸有关的样式一般都不可以继承**
    
### 8. HTML是什么？CSS是什么？JavaScript是什么？
    - HTML是一种做网站使用的超文本标记语言；
    - CSS是做网站时为了美化网站而为标签添加样式；
    - Javascript是网站实现前后台交互效果、网页动画效果的一种开发语言。

### 9. 为什么需要初始化CSS？
    - 因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同，如果没有初始化CSS，往往会导致页面在不同浏览器之间产生差异；
    
### 10. 如何实现居中div，如何居中一个浮动元素？
 - 设置容器的宽高；
 - 设置层的外边距；
```
    div{
        width:200px;
        height:200px;
        backgrond-color:greenyellow;
        position:absolute;
        left:50%;
        top: 50%;
        margin:-100px 0 0 -100px;
    }
```

### 11. 构成CSS的基本语句是什么？
    选择器{
        属性名称1：属性值1；
        属性名称2：属性值2；
        ...
    }
    
### 12. display有哪些值？说明他们的作用。
    display:block,none,inline,inline-block,list-item,table和inherit；
    - block：块类型：默认宽度是父元素宽度，可设置宽高，换行显示；
    - none: 指元素不会显示，已脱离文档流；
    - inline：行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示；
    - inline-block:指默认宽度为内容宽度，可以设置宽高，同行显示；
    - list-item:指像块元素一样显示，并添加样式列表标记；
    - table:是指此元素会作为块级表格显示；
    - inherit：从父元素继承display属性的值；
    
### 13. 简要描述块级元素和行内元素的区别
    - 块级元素(div,h1-h6,p,ul,ol,dl,table,form)：
        - 默认块级元素的前后都会自动换行，独占一行；
        
    - 行内元素(span , a, strong ,b,em,i,big,samll,label,img,input,select ,testarea)：
        - 默认行内元素和其他行内元素可以位于同一行，在浏览器中显示不会换行；
        
    - 行内块元素(img , input,textarea , select , object)：
        - 可以跟其他行内元素位于同一行，也可以设置宽高；
        
### 14. 使用DIV+CSS实现三栏布局(左右固定200px,中间自适应)？
```
        .left,
        .right {
            width: 200px;
            height: 200px;
            background-color: yellowgreen;
        }
        
        .center {
            background-color: red;
        }
        
        .left {
            float: left;
        }
        
        .right {
            float: right;
        }
```

### 15. 解释一下浮动以及其工作原理
    浮动元素就是向左向右移动，直到它的外边缘遇到父元素或者另一个元素的边框为止；要想元素浮动，必须先给元素设置一个宽度；浮动元素已经脱离文档流，但是他浮动后所处的位置依然在浮动之前的水平方向上；因为浮动元素已经脱离文档流，所以文档流中的块元素表现得就像浮动元素不存在一样，下面的元素会自动填充原来的位置。有些元素会在浮动元素的下方，但这些元素不一定会被浮动元素遮盖，。当定位内联元素时，要考虑浮动元素的边界，围绕浮动元素放置内联元素。也可以想象浮动元素就是被块元素忽略的元素，但会被内联元素关注。
    
### 16. display：none和visibility：hidden的区别是什么？
    - display:none:隐藏对应的元素，在文档流中不在给它分配空间，他各边的元素会合拢，也就是说该元素已经脱离文档流
    - visibility：hidden,隐藏对应的元素，但是在文档流中依然保留着原来的空间。
    
### 17. 内联元素可以实现浮动吗？
    - 在CSS中，任何元素都可以浮动，不论浮动元素本身是何种元素，都会生成一个块级框。
    
### 18. 简要描述CSS中content属性的作用
    - content属性与：before及：after伪元素配合使用，用来插入生成的内容，可以在元素之前或者元素之后放置生成的内容。可以插入文本、图像、引号，并可以结合计数器，为页面元素插入编号。
    - 最常见的应用就是利用伪类清除浮动；
    
    
### 19. 如何定义高度很小的容器
    - 有一个默认的行高，所以在IE6下无法定义小高度的容器；
    - 解决方法：overflow：hidden和font-size：容器高度 px;
    
### 20. 如何在图片下方设置几像素的空白间隙？
    - 定义img为：display:block,或定义父容器为font-size：0；

### 21. 如何让超出宽度的文字显示为省略号？
```
    overflow:hidden ;
    width:xxx;
    white-space:nowrap;
    text-overflow:elipsis;
```

### 22. 如何使英文单词发生祠内断行？
    输入word-wrap：break-word
    
### 23. px和em的区别是什么？
    - px和em都是长度单位
    - 区别：
        1. px的值是固定的，指定为多少就是多少；
        2. em的值不是固定的，是相对于容器字体的大小，并且em会继承父级元素的字体大小；
            浏览器的默认字体高度是16px,未经调整的浏览器都符合1em=16px，那么12px=9=0.75em;
        3. 与em对应的另一个长度单位是rem，相对于根元素的字体大小。
            - 其中em和rem都是相对单位；
        
### 24. div+css布局跟table布局有什么优点？
    (1). 改版的时候更方便，只需改动CSS文件；
    (2). 页面加载速度更快，结构清晰，页面更加简洁；
    (3). 表现与结构分离；
    (4). 搜索引擎优化(SEO)更友好，排名更加靠前；

### 25. 谈谈BFC的理解
    - BFC(Block Formatting Context)指块级格式化上下文，即一个创建了新的BFC的盒子是独立布局的，盒子里面的子元素的样式不会影响到外面的元素；在同一个BFC中，两个毗邻的块级盒在垂直方向的margin会发生折叠。
    - 作用：
        1. 不和浮动元素重叠；
        2. 清楚元素内部浮动；
        3. 放置垂直margin重叠；
        
### 26. 访问超链接后hover样式就不出现的原因？
    - 这是因为访问过的超链接样式覆盖了原有的hover和active伪类选择器样式，解决方法将CSS属性的排列顺序改为L-》V-》H-》A；
    
### 27. 什么是外边距重叠？重叠的结果是什么？
    - 外边距重叠就是margin-collapse;
    - 在CSS中，相邻的两个盒子的外边距可以结合成一个单独的外边距。这种合并外边距的方式称为折叠，因此结合成的外边距称为折叠外边距；
    - 规则
        - 当两个相邻的外边距都是正数时，折叠的结果就是他们两者中较大的指；
        - 当两个相邻的外边距都是负数时，折叠的结果就是两者中绝对值较大的值；
        - 当两个外边距是一正一负时，折叠的结果时两者相加的和。

### 28. rgba()和opacity的透明效果有什么不同?
    rgba()和opacity都能实现透明效果，他们最大的不同是opacity作用于元素，并且可以设置元素内所有内容的透明度；
    rgba()只作用于元素的颜色，或其背景色。
    
### 29. CSS中可以让文字在垂直和水平方向上重叠的两个属性是什么？
    - 垂直方向：line-height  ;  水平方向： letter-spacing:可以用于清除inline-block元素间的换行符空格间隙；
    
### 30. 有什么方式可以对一个DOM设置他的CSS？
    - 外链式：通过link标签引入一个css样式文件；
    - 内嵌式：将CSS代码写在style标签内；
    - 行内式：将代码写在元素的style属性中；
    
### 31. 在CSS中可以通过哪些属性定义，使得一个DOM元素不显示在浏览器可视范围内？
    方法一：
            display：none;      visibility:hidden;
    方法二：
            宽高设为0，透明度为0，设置z-index位置为-1000.
            
### 32. 浏览器的标准模式和怪异模式之间的区别是什么？
    区别：盒子模型的渲染模式不同；
    判断当前模式：可以使用window.top.document.compatMode；
    BackCompat:怪异模式；
    CSS1Compat:标准模式；
    
### 33. 如何避免文档流中的空百符合并现象？
    空白符合并标准文档流的特征之一，可以通过white-spac修改这个特性，属性值如下：
        - pre:表示不会合并空白符，渲染换行符，不会自动换行，相当于pre元素；
        - pre-wrap:表示不会合并空白符，渲染换行符，自动换行；
        - pre-line:表示合并空白符，渲染换行符，自动换行；
        - nowrap:表示合并空白符，不会渲染换行符，不会自动换行；
        - normal:表示默认值，按照文档流特点渲染，合并空白符，渲染换行符，自动换行；
        
### 34. 透明度具有继承性，如何取消透明度的继承？
    - 使用rgba给元素的背景设置透明度的方式，来替代使用opacity设置元素透明度的方式，解决子元素继承父元素透明度的问题。
    
### 35. CSS中，自适应的单位有哪些？
    - 百分比：%：
    - 相对于视口宽度的单位：vw;
    - 相对于视口高度的单位：vh;
    - 相对于视口宽度或者高度的单位：vm；
    - 相对于父元素字体大小的单位：em;
    - 相对于根元素字体大小的单位：rem;
    
### 36. CSS 3有哪些新特性？
    - 圆角(border-radius);
    - 阴影(box-shadow);
    - 对文字加特效(text-shadow);
    - 线性渐变(gradient);
    - 变换(tranform);
    - 更多的CSS选择器；
    - 多背景设置；
    - 色彩模式，如rgba;
    - 伪元素： ::selection;
    - 媒体查询；
    - 多栏布局；
    - 图片边框(border-image);
    
### 37. CSS 3中新增的伪类有哪些？
    - p:first-of-type,选择属于其父元素的首个<p>元素的每个<p>元素；
    - p:last-of- type,选择属于其父元素的最后一个<p>元素的每个<p>；
    - p:only-of- type,选择属于其父元素的唯一<p>元素的每个<p>元素；
    - p:only-child,选择属于其父元素的唯一子元素的每个<p>元素；
    - p:nth-chili(2):选择属于其父元素的第二个子元素的每个<p>元素；
    - ：enabled:disabled,控制表单控件的禁用状态；
    - :checked:disabled.  单选框或复选框被选中；
    
### 38. first-child和first-of-child有什么区别？
    - first-child匹配的是父元素的第一个子元素，也就是结构上的第一个子元素；
    - first-of-child匹配的是该类型的第一个元素；
```
    <div>
        <p></p>
        <span></span>
    </div>
```
    p:first-child:匹配到p元素，因为p元素是div的第一个子元素；
    span:first-child:匹配不到span元素，因为span是div的第二个子元素；
    span:first-of-type:匹配到span元素，因为span是div所有为span的子元素中的第一个；
    
### 39. 当使用transform:transale属性时会出现闪烁现象，如何解决？
    ```
        -webkit-backface-visibility:hidden;      //隐藏转换的元素的背面；
        -webkit-tranform-style:preseve-3d;       //使被转换的元素的子元素保留其3D转换；
        -webkit-tranform:transalte3d(0,0,0);     //开启 GPU硬件加速模式，使用GPU代替CPU渲染动画；
    ```

### 40. CSS3动画如何在动作结束时保持该状态不变？
    采用animation-fill-mode.它的值可以设置为：
    - none: 不改变默认行为；
    - forwards:当动画完成后，保持最后一个属性值(在最后一个关键帧中定义)；
    - backwards：在animation-delay中指定一段时间，在动画显示之前，应用开始属性值；
    - both:向前和向后填充模式都可以应用。
    
### 41. box-sizing属性
    box-sizing :主要用力啊控制元素盒模型的解析模式，默认值为：content-box;
    - content-box让元素维持W3C的标准盒模型，元素的宽度和高度由border+padding+content的宽度/高度决定，设置width/height属性指的是content部分的宽度/高度。
    - border-box:让元素维持IE传统盒模型。设置width/height属性指的是指定border+padding+content的宽度/高度；
    
### 42. content-box盒模型
    - 布局所占宽度(width)如下：
```    
        width=width+padding-left+border-left+padding-right+border-right;
```
    - 布局所占高度(height)如下：
```
        height=height+padding-top+padding-bottom+border-top+border-bottom
```

### 43. padding-box盒模型
    - 布局所占宽度(widht)如下：
```
        width=width(padding-left+padding+right)+border-left+border-right;
```

### 44. border-box盒模型
    - 布局所占宽度(widht)如下：
```
        width=width(padding-left+padding-right+border-top+border-bottom);
```
    
### 45. 分别说说CSS3动画的优点和缺点：
    ** 优点**
        - 在性能上稍微好一些，浏览器会对CSS3动画做一些优化；
        - 代码相对简单
    
    ** 缺点**
        - 在动画控制上不够灵活；
        - 兼容性不好；
        - 部分动画功能无法实现；

### 46. Animation与Transition的异同是什么？
**相同点**
        - 都是通过改变元素的属性值来实现动画效果的；
        
**区别**
        - Transition：只能指定属性的开始值和结束值，然后两个属性值之间只能使用平滑过渡的方式来实现动画，无法实现更加复杂的动画效果；
        - Animation：通过定义多个关键帧，以及定义每个关键中元素的属性值来实现更加复杂的动画效果；
        
### 47. Animation属性值有哪些？
    - 两个必要属性：
        animation-name，动画名称
        animation-duration:动画持续时间；
    - 其他属性：
        animation-play-state:播放状态（running表示播放，paused表示暂停),可以控制动画暂停；
        animation-delay：即动画延迟时间；
        animation-timing-function,动画运动形式；
        animation-iteration-count:重复次数；
        animation-direction:播放前重置。
        
### 48. 媒体查询的方法是什么？
    - 使用方法
```       
        @media 媒体类型 and (媒体特性) {样式规则}
```
    - 通常在移动端使用，在做移动端开发的时候，为了适配多屏幕，使用rem单位，然后根据屏幕尺寸的改变动态地设置根节点的HTML和font-size值。
    - 缺点：    
        1. 适配屏幕的尺寸不是连续的；
        2. 会在CSS文件中添加大段地查询代码，增加CSS文件地大小；
    为了改进上述缺点，可以使用JavaScript获取移动设备地屏幕宽度，根据设计稿地原型尺寸，动态地计算font-size地值；

### 49. rem地原理是什么
    - 在做响应式布局地时候，在调整HTML字体大小地时候，在页面中使用所有ｒｅｍ单位地元素都会做出相对应地调整。
    background-clip
### 50. 如何设置CSS3文本阴影
    - h1{text-shadow:水平阴影，垂直阴影，模糊距离，阴影颜色};
    
### 51. 如何把一个元素旋转30°？
```
    div{
            transform:rotate(30deg);
            -ms-transform:rotate(30deg);        //IE 9
            -webkit-transform:rotate(30deg);    //Safair和Chrome
            -o-transform:rotate(30deg);         //Opera
            -moz-transform:rotate(30deg);       //Firefox
    }
```

### 52. 如何利用CSS3制作淡入淡出的动画效果？
    (1).定义动画关键帧，名称为fadeIn
```
    @-webkit-keyframes fadeIn{
        from{
            opacity:0;/
        }
        to{
            opacity:1;
        }
    }
    @-webkit-keyframes fadeOut{
        from {
            opacity:1;
        }
        to{
            opacity:0;
        }
    }
```
    (2).为div增加如下代码
```
    div{
        -webkit-animation-name:fadeIn;//动画名称
        -webkit-animation-duration:3s;//动画持续时间
        -webkit-animation-iteration-count:1;//动画次数
        -webkit-animation-delay:0s;//延迟时间
    }
```

### 53. 说一说盒阴影
    盒阴影比文本阴影多一个属性，外延值inset,如：box-shadow:5px 5px 25px rgba(0,0,255,0.5) inset;
    
### 54. 如何为盒子添加蒙版
```
    .demo{
        heigth:144px;
        width:144px;
        backgrond:url(logo.png);
        -webkit-mask-image:url(shadow.png);
        -webkit-mask-position:50%,50%;
        -webkit-mask-repeat:no-repeat;
    }
```
    蒙版相关属性如下：
        -webkit-mask-cli,即蒙版裁剪位置；
        -webkit-mask-origin,即蒙版原点位置；

### 55. 如何通过CSS3实现背景颜色线性渐变？
```
        div{
            background:-webkit-linear-gradient(left,red,green 50%,blue);
        }
```

### 56. 如何实现CSS3倒影
    通过-webkit-box-reflect设置方向、距离；
    方向可以设置为：below,above,left,right;
    下面可以给出示例代码
```
        .demo{
            height:144px;
            width:144px;
            background:url(logo.png);
            -webkit-box-reflect:below 10px;
        }
```

### 57. 当元素不面向屏幕时其可见性如何定义？
    - 使用backface-visibility:visible|hidden;
    
### 58. CSS3中transition属性值及含义是什么？
    transition属性是一个简写属性，用于设置一下4个过渡属性。
        transition-property：哪个属性需要实现过渡；
        transition-duration：完成过度效果需要多少毫秒/秒；
        transition-timing-funciton:速度效果的运动曲线，如：linear、ease-in、ease、ease-out、ease-in-out、cube-bezier.
        transition-delay:规定过度开始前的延迟时间。
        
### 59. background-clip和background-origin的区别是什么？
    background-clip规定背景的绘制区域；(3种属性)
        - border-box,即背景从边框开始绘制。
        - padding-box,即背景在编框框内绘制。
        - content-box,即背景从内容部分绘制。
    background-origin：规定背景图片的定位区域；
        -  border-box，padding-box，content-box描述的是背景图片的属性，一旦规定了图片开始绘制的区域就相当于规定图片的左上角从什么地方开始，其他不负责。
    