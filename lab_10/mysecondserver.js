var http = require ('http');
var ourrentdata = require ('.mymodule');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The data end time are ourrently: "+ ourrentdata.myDateTime());      
    res.end('Hellow World!') ; 
    
}) .listen(8080);