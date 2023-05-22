let http = require('http');
let fs = require( "fs" );

http.createServer(function(request, response) {
    console.log("client request: " + request.url);

    if (request.url === "/index") {
        console.log("index");
    }
    if (request.url === "/") {
        console.log("/");
    }

    

    if (request.url === "/") {
        fs.readFile("view/index.html", function(err,data) {
            if (err) {
                response.writeHead(404);
                response.write("Not found");
            } else {
                response.writeHead(200, {"Content-Type": "text/html"});
                response.write(data);
            }
            response.end();
        });
    } else if (/^\/[a-zA-Z0-9\/]*.css$/.test(request.url.toString())) { //test() 方法用於檢測字符串是否匹配某個模式,如果字符串中有匹配的值返回 true ，否则返回 false
        console.log("request for css");

        fs.readFile(request.url.toString().substring(1), function(err,data) {
            if (err) {
                response.writeHead(404);
			    response.write("Not Found!");
            } else {
                response.writeHead(200, {"Content-Type": "text/css"});
			    response.write(data);
            }
            response.end();
        });
    } else if (/^\/[a-zA-Z0-9\/]*.jpg$/.test(request.url.toString())) { 
        console.log("request for jpg");

        fs.readFile(request.url.toString().substring(1), function(err,data) {
            if (err) {
                response.writeHead(404);
			    response.write("Not Found!");
            } else {
                response.writeHead(200, {"Content-Type": "text/jpg"});
			    response.write(data);
            }
            response.end();
        });
    }

}).listen(3000);
console.log( "Server running at: http://127.0.0.1:3000/ \nNow time: " + new Date() );