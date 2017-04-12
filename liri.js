// console.log(process.argv);

var command = process.argv[2];

var client = ("./liri.js.exports.twitterKeys");
var twitter = require('twitter');


if (command === "my-tweets") {
	console.log(client);
	client.get(path, params, callback);

}

else if (command === "spotify-this-song") {
	console.log("spotify info will go here");
}

else if (command === "movie-this") {
	console.log("IMDB info will go here");
}

else {
	command === "do-what-it-says";
}


