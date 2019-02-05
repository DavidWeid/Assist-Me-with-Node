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

    // Default variables (user doesn't add a query)
        // for searchMovie
        var movieTitle = "Big Hero 6";
        // for searchMusic
        var songTitle = "i'm so tired...";
        // musicType can be "artist" OR "album" OR "track"
        var musicType = "track";
        // for searchConcert
        var artist = "Troye Sivan";
    //

    // User's command
    var command = process.argv[2];
    // User's query
    var searchQuery = process.argv.slice(3).join(" ");

///// VARIABLES end /////




///// FUNCTIONS /////

    // Node Command
    function liriCommand() {

        switch (command) {

            case "concert-this":

                if (searchQuery === "") {
                    artist = artist;
                } else {
                    artist = searchQuery;
                };

                searchConcert();
                break;

            case "spotify-this-song":

                if (searchQuery === "") {
                    songTitle = songTitle;
                } else {
                    songTitle = searchQuery;
                };

                searchMusic();
                break;

            case "movie-this":

                if (searchQuery === "") {
                    movieTitle = movieTitle;
                } else {
                    movieTitle = searchQuery;
                };

                searchMovie();
                break;

            case "do-what-it-says":
                // something = somethingElse //
                readItAndDoIt();
                break;

            default:
                console.log("Sorry, I don't know how to answer that right now.");
                break;

        };

    };

    // Command "movie-this"
    function searchMovie() {

        axios.get("http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&apikey=trilogy").then(function(response) {

            var movieInfo = response.data;

            console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -");
            console.log(" ");
            console.log(chalk.blue.underline.bold(movieInfo.Title));
            console.log("Released in " + movieInfo.Year);
            console.log(movieInfo.Ratings[1].Value + " on Rotten Tomatoes");
            console.log(movieInfo.imdbRating + " on IMDb");
            console.log("Origin: " + movieInfo.Country);
            console.log("In " + movieInfo.Language);
            console.log(" ");
            console.log("Plot: " + movieInfo.Plot);
            console.log(" ");
            console.log("Featuring stars " + movieInfo.Actors);
            console.log(" ");
            console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -");

        }).catch(function(err) {

            console.log("Error: " + err);

        });

    };

    // Command "spotify-this-song"
    function searchMusic() {

        spotify.search({type: musicType, query: songTitle, limit: 1}).then(function(response) {

            var trackInfo = response.tracks.items[0];

            console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -");
            console.log(" ");
            console.log("Artist: " + chalk.green.bold(trackInfo.artists[0].name));
            console.log("Track: " + trackInfo.name);
            console.log("Listen: " + chalk.cyan.underline.dim(trackInfo.external_urls.spotify));
            console.log("Album: " + trackInfo.album.name);
            console.log(" ");
            console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -");

        }).catch(function(err) {

            console.log("Error: " + err);

        });

    };

    // Command "concert-this"
    function searchConcert() {

        // console.log(artist);

        axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(function(response) {

            // console.log(response);
            console.log("Next three shows for " + chalk.bold.blue(response.data[0].lineup[0]));
            console.log(" ");
            console.log("- - - - - - - - - - - - - - -");

            for (var i = 0; i<3; i++) {

                console.log(response.data[i].venue.name);
                console.log(response.data[i].venue.city + ", " + response.data[i].venue.country);
                console.log(moment(response.data[i].datetime).format("MM/DD/YYYY"));
                console.log("- - - - - - - - - - - - - - -");

            };
    
        }).catch(function(err) {

            console.log("Error: " + err);

        });

    };

    // Command "do-what-it-says"
    function readItAndDoIt() {

        fs.readFile("random.txt", "utf8", function(error, data) {

            if (error) return error;

            // console.log(data);

            var dataArr = data.split(", ");

            // console.log(dataArr);

            command = dataArr[0];
            searchQuery = dataArr[1];

            console.log("I will " + command + " for " + searchQuery);

            liriCommand();

        });

    };

    // append to log.txt
    function logData() {

        if (process.argv.length > 2) {
            
            fs.appendFile("log.txt", ", " + command + ", " + "'" + searchQuery + "'", function(err) {

                if (err) return err;

                console.log("Activity logged!");
                console.log(" ");

            })

        };

    };

///// FUNCTIONS end /////

liriCommand();
logData();