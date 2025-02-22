// server.js

// Load the things we need
var express = require('express');
var app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Use res.render to load up an ejs view file

// Index page 
app.get('/', function(req, res) {
    var drinks = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ];
    var tagline = "Any code of your own that " +
                 "you haven't looked at for six or more months " +
                 "might as well have been written by someone " +
                 "else.";
    
    res.render('pages/index', {
        drinks: drinks,
        tagline: tagline
    });
});

// About page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

// Start server
app.listen(8080);
console.log('8080 is the magic port');