require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);

var moment = require("moment");
moment().format();

require("dotenv").config();

var axios = require("axios");

var chalk = require("chalk");

var fs = require("fs");

//Commands: 'concert-this', 'spotify-this-song', 'movie-this', 'do-what-it-says'

var movieTitle = "Big Hero 6";
var songTitle = "for him.";
// musicType can be "artist" OR "album" OR "track"
var musicType = "track";

axios.get("http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&apikey=trilogy").then(function(response) {
    var movieInfo = response.data;
    console.log(movieInfo.Title);
    console.log(movieInfo.Year);
    console.log(movieInfo.Ratings[2].Value);
    console.log(movieInfo.imdbRating);
    console.log(movieInfo.Country);
    console.log(movieInfo.Language);
    console.log(movieInfo.Plot);
    console.log(movieInfo.Actors);
    console.log("- - - - - - - - - - - -- - - - - - - - - - - -- - - - - - - - - - - -- - - - - - - - - - - -- - - - - - - - - - - -");
});

spotify.search({type: musicType, query: songTitle, limit: 1}).then(function(response) {

    if (error) return error;

    var trackInfo = response.tracks.items[0];
    console.log(JSON.stringify(trackInfo.artists[0].name));
    console.log(JSON.stringify(trackInfo.name));
    console.log(JSON.stringify(trackInfo.external_urls.spotify));
    console.log(JSON.stringify(trackInfo.album.name));
})