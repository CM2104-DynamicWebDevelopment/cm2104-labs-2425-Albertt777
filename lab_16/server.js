const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
//code to define the public "static" folder
app.use(express.static('public'))
// set the view engine to ejs
app.set('view engine', 'ejs');
app.get('/', function(req, res){
 res.render('pages/index');
});
io.on('connection', function(socket){
 console.log('a user connected');
});
http.listen(8080, function(){
 console.log('listening on *:8080');
});

io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
       console.log('user disconnected');
     });
   });

   io.on('connection', function (socket) {
      console.log('a user connected');

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
    
    socket.on('chat message', function (msg) {
       console.log('message: ' + msg);
    });
   });

   io.on('connection', function (socket) {
       console.log('a user connected');

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
    
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
   });

   socket.on('chat message', function(msg) {
    $('#messages').append("<li>"+msg+"</li>");
    window.scrollTo(0, document.body.scrollHeight);
   });