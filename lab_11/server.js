var express = require('express');
var app = express();

app.get('/', function (res,res){
    res.send("Hellow world! by express");
});

app.get('/test', function(req, res){
    res.send("this is route 2");

    app.get('/add', function(req, res){
       var x = req.query.x;
       var y = req.query.y;
       res.Send("X + Y="+(x+y));
    });
   });
app.listen(8080);

app.use(express.static('public'))

app.get('/getform', function(req, res){
    var name = req.query.name;
    var quset = req.query.quest;
      res.send ("Hi" +name+"I am sure you will "+quest);
});

app.post('/postform', function(eq, res){
    var name = req.bnody.name;
    var quest = req.body.quest; 
    res.send ("Hi" +name+"I am sure you will "+quest);
});

app.use(express.urlencoded({extended:true}))