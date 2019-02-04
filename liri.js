///// VARIABLES /////

    // Bring in stuff //
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

    // For functions //

    // for searchMovie
    var movieTitle = "Big Hero 6";
    // for searchMusic
    var songTitle = "for him.";
    // musicType can be "artist" OR "album" OR "track"
    var musicType = "track";

///// VARIABLES end /////




///// FUNCTIONS /////

    // Command "movie-this"
    function searchMovie() {

        axios.get("http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&apikey=trilogy").then(function(response) {

            var movieInfo = response.data;

            console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -");
            console.log(" ");
            console.log(movieInfo.Title);
            console.log(movieInfo.Year);
            console.log(movieInfo.Ratings[1].Value + " on Rotten Tomatoes");
            console.log(movieInfo.imdbRating + " on IMDb");
            console.log("Origin: " + movieInfo.Country);
            console.log("In " + movieInfo.Language);
            console.log(movieInfo.Plot);
            console.log("Featuring stars " + movieInfo.Actors);
            console.log(" ");
            console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -");

        });

    };

    // Command "spotify-this-song"
    function searchMusic() {

        spotify.search({type: musicType, query: songTitle, limit: 1}).then(function(response) {

            var trackInfo = response.tracks.items[0];

            console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -");
            console.log(" ");
            console.log("Artist: " + JSON.stringify(trackInfo.artists[0].name));
            console.log("Track: " + JSON.stringify(trackInfo.name));
            console.log("Listen: " + JSON.stringify(trackInfo.external_urls.spotify));
            console.log("Album: " + JSON.stringify(trackInfo.album.name));
            console.log(" ");
            console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -");

        }).catch(function(err) {

            console.log("Error: " + err);

        });

    };

    // Command "concert-this"
    function searchConcert() {



    };

///// FUNCTIONS end /////

searchConcert();