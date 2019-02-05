# Assist Me with Node

## Overview

Assist Me with Node (AMN) is a Language Interpretation and Recognition Interface (LIRI) that works as a command line node application.

The User gives AMN parameters and then receives data back. AMN works by recognizing a list of commands, including "concert-this", "spotify-this-song", "movie-this", and "do-what-it-says". AMN also takes in the User's seach query, that follows a command, if one is included. Here's an example:

> node liri.js spotify-this-song ...Baby One More Time

The command in this example is "spotify-this-song" and the search query is "...Baby One More Time".

AMN displays data from three different sources, including the the Bandsintown API, the Spotify API, and the OMDb API.

#### Useful

Assist Me with Node (AMN) allows the User to look up information on their favorite artists/bands next concerts, their favorite artists/bands songs, and their favorite movies.

The following information is provided
- Concerts
  - Artists next three venues
  - Location (city, country)
  - Date (MM/DD/YYYY)
- Songs
  - Artist
  - Song name
  - Spotify link to the song
  - Album name
- Movies
  - Title
  - Year released
  - Ratings from IMDb and Rotten Tomatoes
  - Countries available
  - Languages available
  - A short plot
  - Actors

## How it Works

#### Assist Me with Node (AMN) uses a handful of resources/npm packages.
- axios
  - Uses the `.get()` method
  - Used to access the OMDb API
  - Used to access the Bandsintown API
- node-spotify-api
  - Uses the `.search()` method
  - Used to access the Spotify API
- moment
  - Uses `moment().format()` to convert timeData into an easier to read format
  - Used with the Bandsintown API and the axios call
- dotenv
  - Used to store configuration data for the Spotify API
- chalk
  - Used in improve visual feedback through terminal styling
  
#### The Last Command
The fourth command option available to the User is "do-what-it-says", which includes no query parameter. When the user uses this command, AMN will run using the "spotify-this-song" command and the "I want it that way" query. This is just a default command that the User can do to easily get back a demo'd output.

#### Data Logged
Every time the User runs `node liri.js`, process.argv[i] is logged, where i > 1. 

## Flexibility

#### Goals
The goal with AMN, in terms of usability, is that the User always gets back some output. If the User enters only `node liri.js` or `node liri.js <falseCommand>`, where <falseCommand> is not a listed command, then they get back "Sorry, I don't know how to answer that right now."

If the User enters `node liri.js <command>`, where <command> is any of the listed commands, then they get back a pre-selected result (since no query was entered by the User). The pre-selected results use "Troye Sivan" for a concert search, "i'm so tired..." for a song search, and "Big Hero 6" for a movie search.

Lastly, the User can enter `node liri.js <command> <query>`, where query is relevent to the command. For both the spotify-this-song and movie-this commands, the query can be in three formats (capitalization is not important):
- Bring me the Horizon
- "Bring Me the Horizon"
- Bring-Me-the-Horizon

However, the concert-this command does not work with the last format listed. In either case, if the search can't be completed, an error will be loggged to the terminal.

## Example Video

[Test Run](https://drive.google.com/file/d/1VGKbhgTSrJ28NApq0AYeN44g0QdD8dD8/view)
