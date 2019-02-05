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
