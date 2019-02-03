require("dotenv").config();

var keys = require("./keys.js");

var spotify = new spotify(keys.spotify);

//Commands: 'concert-this', 'spotify-this-song', 'movie-this', 'do-what-it-says'