**1. 跨域的原理**
- 跨域是指浏览器不能执行其他网站的脚本。
- 原因：这是由于违背浏览器的同源策略造成的，是浏览器对Javascript实施的安全限制，那么只要**协议、域名、端口**有任何一个不同，都会被当作不同的域。
- 跨域原理：通过各种方式，避开浏览器的安全限制。

**2. 如何实现跨域**
- 1. 通过**JSONP跨域**：通过动态创建script,再请求一个带网站实现跨域通信，只支持**get请求**
- 2. document.domain+iframe跨域：两个页面都通过js强制设置document.domain为基础主域，就实现了同域；
- 3. location.hash+iframe跨域：a与b跨域相互通信，通过中间c来实现，三个页面，不同域之间利用iframe的location.hash船只，相同域之间直接js访问来通信。
- 4. window.name + iframe跨域：通过iframe的src属性由外域转向本地域，跨域数据即由iframe的window.name从外域传递到本地域。
- 5. postMessage跨域：可以跨域操作的window属性之一。
- 6. **CORS(跨域资源共享)**：服务端设置**Access-Control-Allow-Origin**即可，前端无须设置，若要带cookie请求，前后端都需要设置。
- 7. (nginx,nodejs中间件)代理跨域：启一个代理服务器，实现数据的转发
- 9. WebSocket协议跨域；