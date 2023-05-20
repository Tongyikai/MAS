let http = require('http');
let fs = require( "fs" );

http.createServer(function(request, response) {
    if ( request.url === "/index") {
        console.log("index");
    }
    if ( request.url === "/") {
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
    }
}).listen(3000);
console.log( "Server running at: http://127.0.0.1:3000/ \nNow time: " + new Date() );