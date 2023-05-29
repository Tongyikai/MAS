let http = require("http");
let fs = require("fs");

/* ************************************************
 *                     Method                     *
 ************************************************ */
function sendFileContent(response, filePath, contentType) {
	fs.readFile(filePath, function(err, data) {
		if (err) {
			response.writeHead(404);
			response.write("Not Found!");
		} else {
			response.writeHead(200, {"Content-Type": contentType});
			response.write(data);
		}
		response.end();
	});
}
/* ************************************************
 *                     Server                     *
 ************************************************ */
http.createServer(function(request, response) {
    console.log("client request: " + request.url);

    if (request.url === "/" || request.url === "/index") {
        sendFileContent(response, "view/index.html", "text/html");
	} else if (request.url === "/forgotPassword") {
		sendFileContent(response, "view/forgotPassword.html", "text/html");
	} else if (request.url === "/signup") {
		sendFileContent(response, "view/signup.html", "text/html");
    } else if (/^\/[a-zA-Z0-9\/]*.css$/.test(request.url.toString())) { //test() 方法用於檢測字符串是否匹配某個模式,如果字符串中有匹配的值返回 true ，否则返回 false
        sendFileContent(response, request.url.toString().substring(1), "text/css");
    } else if (/^\/[a-zA-Z0-9\/]*.jpg$/.test(request.url.toString())) { 
        sendFileContent(response, request.url.toString().substring(1), "text/jpg");
    }
}).listen(3000);
console.log( "Server running at: http://127.0.0.1:3000/ \nNow time: " + new Date() );