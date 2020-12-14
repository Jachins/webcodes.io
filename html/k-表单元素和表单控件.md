#### input标签
- readonly： 规定输入的字段是只读，不可修改，但用户可以通过tab切换到该字段，配合js直接控制用户是否可以更改或输入内容
- step:规定输入字段的合法数字间隔(如step="2",则合法数字可为-2,0,2,4等),当该值是负数或者0时，默认为1，该属性可以配合max和min来创建合法值取得范围；

#### form标签
- **enctype**:规定在发送表单数据之前如何对其编码，可取值有：
    - application/x-www-form-urlencoded
    - multipart/form-data
    - text/plan
- **method**:规定用于发送表单数据的http方法，可取值：get和post

#### video标签
- 用来定义视频，电影片段或其他视频
- 常用属性：
    - autoplay：视频就绪之后马上播放
    - controls: 显示播放按钮
    - loop:循环播放
- 常用方法：
    - load():加载
    - play():播放
    - pause():暂停