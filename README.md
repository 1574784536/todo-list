## 设置代理
1、npm i  http-proxy-middleware -d
2、在src中新建文件夹，命名为setupProxy.js
编写
``const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
app.use(
createProxyMiddleware("/api",{
target: 'http://localhost:8080',
changeOrigin: true,
pathRewrite: {
"^/api": ""
}
}
))
}``
