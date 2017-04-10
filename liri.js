// console.log(process.argv);

var command = process.argv[2];

var twitter = require("./keys.js");


if (command === "my-tweets") {
	console.log(twitter);
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


