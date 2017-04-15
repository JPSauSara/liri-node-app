'use strict';

const command = process.argv[2];
const searchInput = process.argv[3];

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
  

// FROM TWITTER PACKAGE DOCUMENTATION
  // var params = {screen_name: 'nodejs', count: 20};

  // client.get('favorites/list', function(error, tweets, response) {
  // if(error) throw error;
  // console.log(tweets);  // The favorites. 
  // console.log(response);  // Raw response object. 
  // });

  //THIS RETURNS AN ERROR -- Check your code. There is an error: [object Object] 
  // var client = new twitter({
  //   consumer_key: process.env.twitterKeys_CONSUMER_KEY,
  //   consumer_secret: process.env.twitterKeys_CONSUMER_SECRET,
  //   access_token_key: process.env.twitterKeys_ACCESS_TOKEN_KEY,
  //   access_token_secret: process.env.twitterKeys_ACCESS_TOKEN_SECRET
  // });

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
  // node liri.js spotify-this-song '<song name here>' / Default = "The Sign" by Ace of Base
  // GOAL: This will show the following information about the song in your terminal/bash window
    // Artist(s)
    // The song's name
    // A preview link of the song from Spotify
    // The album that the song is from


// ===================== IMDB COMMAND: movie-this =====================
  //  node liri.js movie-this '<movie name here>' / Default = output data for the movie 'Mr. Nobody.'
  // GOAL: This will output the following information to your terminal/bash window:
    //    * Title of the movie.
    //    * Year the movie came out.
    //    * IMDB Rating of the movie.
    //    * Country where the movie was produced.
    //    * Language of the movie.
    //    * Plot of the movie.
    //    * Actors in the movie.
    //    * Rotten Tomatoes URL.

// ===================== RANDO COMMAND: do-what-it-says =====================
  // node liri.js do-what-it-says
  // GOAL: Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
  // It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
  // Feel free to change the text in that document to test out the feature for other commands.


// ===================== CALLING COMMANDS =====================  

if (command == null) {

  console.log("Hello! My name is LIRI."
    + '\n' + "I am a Language Interpretation and Recognition Interface." 
    + '\n' + "Please enter one of the following commands to get started");

} else if (command === "my-tweets") {
  getTweets();

} else if (command === "spotify-this-song") {
  console.log("spotify info will go here");

} else if (command === "movie-this") {
  console.log("IMDB info will go here");
}
else {
  command === "do-what-it-says";
};

