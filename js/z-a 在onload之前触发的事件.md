- 1. **readystatechange**：读取状态变化
    - document有readyState属性来描述document的loading状态，readState的改变会触发readystatechange事件：
        - loading
            文档仍然在加载
        - interactive
            文档结束加载并且被解析，但是像图片，样式，frame之类的子资源仍在加载
        - complete
            文档和子资源已经结束加载，该状态表明将要触发load事件。

- 2. **onpageshow**：页面显示
    - onpageshow:事件在用户浏览网页时触发；
    - onpageshow:事件类似于onload事件，onload事件在页面第一次加载时触发，onpagehow事件在每次加载页面时触发在页面从浏览器缓存中读取时不触发

- 3. **beforeunload**：页面退出
    - 当浏览器窗口，文档或其资源将要卸载时，会触发beforeunload事件。

- 4. **DOMContentLoaded**：dom内容加载完成
    - 当初始的HTML文档被完全加载和解析完成之后，DOMContentLoaded事件被触发，无需等待样式表、图像和子框架的完成加载；