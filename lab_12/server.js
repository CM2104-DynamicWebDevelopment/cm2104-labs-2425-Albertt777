var express = require('express');
var app = express();
app.use(express.static('public'))

app.get('/', function(req, res){
    res.send("Hellow world! by express");
});

app.listen(8080);

var express = require('express');
var app = express();
var SpotifyWebApi = require('spotify-web-api-node');
app.use(express.static('public'))


var spotifyApi = new SpotifyWebApi({
    clientId: 'fcecfc72172e4cd267473117a17cbd4d',
  clientSecret: 'a6338157c9bb5ac9c71924cb2940e1a7',
  redirectUri: 'http://www.example.com/callback'
});

// Retrieve an access token
spotifyApi.ClientCredentialsGrant().then(
function (data) {
    console.log('The access token expires in' + data.body['expires_in']);
    console.log('The access token is '+ data.body['access_token']);

// Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body['access_token']);
},
  function(err){
    console.log(
        'Something went wrong when retrieving an access token',
    err.message

    )
  }


);

//rout for love in tracks, artists and album 
app.get('/saerchLove', function (req, res){
    getTracks('love', res);
});

spotifyApi.searchTracks(seachterm).then(function (data){
    var tracks = data.body.tracks.items

    //lets set up a empty string to act as the response
    var HTMLResponse = "";

    //now leys run through all the items

    //this is a for loop

    for(var i=0; i<tracks.length;i++){

        var track = tracks[i];
        console.log(track.name);

        HTMLResponse = HTMLResponse +
        "<div>" +
        "<h2>"+track.name+"</h2>"+
        "<h4>"+track.artists[0].name+"</h4>"+
        "<img src='"+track.album.images[0].url +"'>"+
        "<a href='"+track.external_urls.spotify+"'> Track Details </a>"+
        "</div>";
        console.log(HTMLResponse);
    }
    res.send(HTMLResponse)
}, 
function (err) {
    console.error(errr);
});


 // TASK 1

//rout for searching in tracks, artisets and albums

app.get('/search', function(req, res){
    var searchterm =req.query.searchterm;
    getTracks(searchterm, res);
});

//TASK 2

async function getTopTracks(artist, res) {
    spotifyApi.getArtistTopTracks(artist,
   'GB')
    .then(function (data) {
    console.log(data.body);
    }, 
    function (err) {
    console.log('Something went wrong!', err);
    });
   }

   //TASK 3

   async function getRelated(artist, res){
    spotifyApi.getArtistRelatedARtists(artist)
    .then(function (data){
        console.log(data.body);
    },
    function (err){
        dconsole.log('Something went wrong!, err');
    });
   }

   //CREATING OUR JSON ROUTE

   async function getTracsAPI(searchterm, res) {
    spotifyApi.searchtermTracks(searchterm)
    .then(function (data){
        var tracks = data.body.tracks.items
        var JSONRESPONSE = [];

        for(var i=0; i<tracks.length;i++)
          {
            var track = tracks[i];

            JSONRESPONSE.push(
                {
                    trackname:track.name,
                    artist:track.artists[0].name,
                    image:track.album.images[0].url,
                    url:track.external_urls.spotify,
                }
            );
          }
        res.send(JSONResponse)
    },
    function (err) {
        console.error(err);
    });
   }