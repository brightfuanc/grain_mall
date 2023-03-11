
//程序名:
//引入require模块vue-7-5-server.js
var http = require ('http');
//创建服务器
http.createServer(function (request, response) {
    //HTTP状态码:200 : OK
    //Content Type: text/html
    response.writeHead (200,{
        'Content-Type' : 'text/html; charset-utf-8'
    });
    //响应文件内容
    response.write ( '<h3>这些是响应数据-Node.js很好学,应用面很广!</h3>');
    //发送响应数据
    response.end ( "<h2>欢迎使用Node.js!</h4>");
    }).listen(8080);
    //控制台会输出以下信息
    console.log ( 'Server running at http://127.0.0.1:8080/ ');
    