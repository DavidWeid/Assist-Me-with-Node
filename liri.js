require("dotenv").config();

var keys = require("./keys.js");

var spotify = new spotify(keys.spotify);

var moment = require("moment");
moment().format();

require("dotenv").config();

//Commands: 'concert-this', 'spotify-this-song', 'movie-this', 'do-what-it-says'