console.log("hello world")
var http = require('http');
http.createServer(function (request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/html'});
   
    // Send the response body as "Hello World"
    response.end("<h1>Hello Node!!!!</h1>");
 }).listen(3000);
 
 // Console will print the message
 console.log('Server running at  http://localhost:3000');
 var fs=require("fs");
 fs.readFile('welcome.txt',function(err,data){
    if(err){
        return console.error(err);
    }
    console.log("Hello Node"+data.toString());

 })
 