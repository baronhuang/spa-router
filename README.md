# spa-router
轻量级router，分别用location.hash和history.pushState来实现基本的路由。`hash.js`主要通过在url后面加上#号来进行路由的区分，通过window.hashchange来监听#号后面的变化来对
页面进行重绘。`history.js` 主要使用html5的新方法history.pushState来实现路由的跳转，监听window.popstate的变化实现对路由的后退，路由本身没有#号，不过就是需要需要服务器端支持history api。

<br>
hash方式兼容性好，不过有#在后面，history方式体验更好，不过需要有html5和服务器端支持。
