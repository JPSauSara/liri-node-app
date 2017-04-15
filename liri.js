'use strict';

const command = process.argv[2];
// const searchInput = process.argv[3];
const searchInput = process.argv.splice(3).join(' ');


const nodeArgs = process.argv;

const fs = require('fs');

var output = "";

// ===================== TWITTER COMMAND: my-tweets =====================
  // node liri.js my-tweets
  // GOAL: This will show your last 20 tweets and when they were created at in your terminal/bash window.
const twitter = require('twitter');

const keys = require("./keys.js");

const twitterKeys = keys.twitterKeys;

const client = new twitter({
    consumer_key: twitterKeys.consumer_key,
    consumer_secret: twitterKeys.consumer_secret,
    access_token_key: twitterKeys.access_token_key,
    access_token_secret: twitterKeys.access_token_secret
}); 

// !!!!!!!!!!!!!!!!!!!!!!!!!!!! REMOVE COUNT || CHANGE TO 20 !!!!!!!!!!!!!!!!!!!!!!!!!!!!
var params = { screen_name: 'juliehPaola', count: 5 };

function getTweets() {
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (error) {
      console.log("Check your code. There is an error: " + error);
    } else {
      tweets.forEach(function(tweet) {
        console.log('\n' + tweet.text.trim() + '\n');
      });
    };
  });
};


// ===================== SPOTIFY COMMAND: spotify-this-song =====================
  // node liri.js spotify-this-song '<song name here>' / Default song = "The Sign" by Ace of Base
  // GOAL: This will show the following information about the song in your terminal/bash window
    // Artist(s)
    // The song's name
    // A preview link of the song from Spotify
    // The album that the song is from


// ===================== IMDB COMMAND: movie-this =====================
  //  node liri.js movie-this '<movie name here>' / Default movie = 'Mr. Nobody.'
  // GOAL: This will output the following information to your terminal/bash window:
    //    * Title of the movie.
    //    * Year the movie came out.
    //    * IMDB Rating of the movie.
    //    * Country where the movie was produced.
    //    * Language of the movie.
    //    * Plot of the movie.
    //    * Actors in the movie.
    //    * Rotten Tomatoes URL.

var request = require("request");

// ON NPM request PKG documentation :
    //request('http://www.google.com', function (error, response, body) {
    //   console.log('error:', error); // Print the error if one occurred 
    //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
    //   console.log('body:', body); // Print the HTML for the Google homepage. 
    // });
  //   request('http://www.omdbapi.com/?t=' + searchInput + '&y=&plot=short&r=json', function(error, response, body) {
  //   console.log('error', error); // Print the error if one occurred
  //   console.log('statusCode:', response && response.statusCode); //Print the response status code if a response was received
  //   console.log('body:', body); // Print the HTML for the homepage
  // });

// MY CODE --- Then run a request to the OMDB API with the movie specified

function getMovie () { 
  var queryUrl = "http://www.omdbapi.com/?t=" + searchInput + "&y=&plot=short&r=json";

  if (searchInput == null) {
    searchInput = 'Mr. Nobody';
  } 

  request(queryUrl, function(error,response,body) {
    if(!error && response.statusCode === 200) {
      // console.log("THIS WORKS! Release Year: " + JSON.parse(body).Year);
      let movieInfo = JSON.parse(body);

      output = ('\nMovie Info \n\nTitle: ' + movieInfo.Title  
        + '\n\nRelease Date: ' + movieInfo.Released
        + '\n\nIMDB Rating: ' + movieInfo.imdbRating 
        + '\n\nProduction Country: ' + movieInfo.Country 
        + '\n\nLanguage: ' + movieInfo.Language 
        + '\n\nSynopsis: ' + movieInfo.Plot 
        + '\n\nActors: ' + movieInfo.Actors 
        + '\n\nRotten Tomatoes Rating: ' + movieInfo.tomatoRating 
        + '\n\nLearn more at Rotten Tomatoes: ' + movieInfo.tomatoURL + '\n');
      console.log(output); 

    } else {
      console.log("CUT! There is an error: " + error);
    }
  }); 
};


// ===================== RANDO COMMAND: do-what-it-says =====================
  // node liri.js do-what-it-says
  // GOAL: Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
  // It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
  // Feel free to change the text in that document to test out the feature for other commands.


// ===================== CALLING COMMANDS =====================  

if (command == null) {
  console.log("Hello! My name is LIRI. I'm a Language Interpretation and Recognition Interface."
    + '\n' + "Please enter one of the following commands to get started: "
    + '\n' + "  my-tweets"
    + '\n' + "  spotify-this-song [input a song to seach]"
    + '\n' + "  movie-this [input a movie to search]"
    + '\n' + "  do-what-it-says");

} else if (command === "my-tweets") {
  getTweets(searchInput);

} else if (command === "spotify-this-song") {
  console.log("spotify info will go here");

} else if (command === "movie-this") {
  getMovie();
  console.log("OMDB info will go here");
}
else {
  command === "do-what-it-says";
};

