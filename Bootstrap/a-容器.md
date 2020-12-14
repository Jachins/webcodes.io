#### 容器
- 1. **流体容器**
- 2. **固定容器**

|阈值|width|
|:------:|:------:|
|大于等于1200(lg 大屏幕PC)|1170(1140+槽宽)
|大于等于992，小于1200(md 中等屏幕PC)|970(940+槽宽)
|大于等于768，小于992(sm 平板)|750(720+槽宽)
|小于768(xs 移动手机)|auto
- 3. **栅格系统**
##### 栅格源码分析
- 1. 液体容器&固定容器公共样式
    margin-right:auto;
    margin-left:auto;
    padding-left:15px;
    padding-right:15px;
- 2. 固定容器，特定样式(顺序不可变，必须**从小到大**)
    @media(min-width:@screen-sm-min){
        width:@constainer-sm;
    }
     @media(min-width:@screen-md-min){
        width:@constainer-md;
    }
     @media(min-width:@screen-lg-min){
        width:@constainer-lg;
    }
