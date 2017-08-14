//ES5:
/*
 * Programming Quiz: Using Let and Const
 */ 
  var CHARACTER_LIMIT = 255;
  var posts = [
	"#DeepLearning transforms everything from self-driving cars to language translations. AND it's our new Nanodegree!",
	"Within your first week of the VR Developer Nanodegree Program, you'll make your own virtual reality app",
	"I just finished @udacity's Front-End Web Developer Nanodegree. Check it out!"
];

// prints posts to the console
function displayPosts() {
	for (var i = 0; i < posts.length; i++) {
		console.log(posts[i].slice(0, CHARACTER_LIMIT));
	}
}

displayPosts();

//Output:
/*"#DeepLearning transforms everything from self-driving cars to language translations. AND it's our new Nanodegree!"
"Within your first week of the VR Developer Nanodegree Program, you'll make your own virtual reality app"
"I just finished @udacity's Front-End Web Developer Nanodegree. Check it out!"*/

//ES6:
/*
 * Programming Quiz: Using Let and Const
 */ 
  const CHARACTER_LIMIT = 255;
  const posts = [
	"#DeepLearning transforms everything from self-driving cars to language translations. AND it's our new Nanodegree!",
	"Within your first week of the VR Developer Nanodegree Program, you'll make your own virtual reality app",
	"I just finished @udacity's Front-End Web Developer Nanodegree. Check it out!"
];

// prints posts to the console
function displayPosts() {
	for (let i = 0; i < posts.length; i++) {
		console.log(posts[i].slice(0, CHARACTER_LIMIT));
	}
}

displayPosts();

//Output:
/*"#DeepLearning transforms everything from self-driving cars to language translations. AND it's our new Nanodegree!"
"Within your first week of the VR Developer Nanodegree Program, you'll make your own virtual reality app"
"I just finished @udacity's Front-End Web Developer Nanodegree. Check it out!"*/

//Babel
"use strict";

/*
 * Programming Quiz: Using Let and Const
 */
var CHARACTER_LIMIT = 255;
var posts = ["#DeepLearning transforms everything from self-driving cars to language translations. AND it's our new Nanodegree!", "Within your first week of the VR Developer Nanodegree Program, you'll make your own virtual reality app", "I just finished @udacity's Front-End Web Developer Nanodegree. Check it out!"];

// prints posts to the console
function displayPosts() {
	for (var i = 0; i < posts.length; i++) {
		console.log(posts[i].slice(0, CHARACTER_LIMIT));
	}
}

displayPosts();

