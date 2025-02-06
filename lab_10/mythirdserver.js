var http = require ('http');
var knookknook = require ('knook-knook-jokes');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The data end time are ourrently: "+ ourrentdata.myDateTime());      
    res.end('random joke') ; 
    
}) .listen(8080);