//set up tumblr 
var tumblr = require('tumblr.js');
var tumblrClient = tumblr.createClient({
  consumer_key: 'CONSUMER_KEY',
  consumer_secret: 'CONSUMER_SECRET',
  token: 'TOKEN',
  token_secret: 'TOKEN_SECRET'
});

//set up twitter 
var Twitter = require('twitter');
var twitterClient = new Twitter({
  consumer_key: 'CONSUMER_KEY',
  consumer_secret: 'CONSUMER_SECRET',
  access_token_key: 'ACCESS_TOKEN_KEY',
  access_token_secret: 'ACCESS_TOKEN_SECRET'
});

//set up mastodon
var Masto = require('mastodon');
var mastoClient = new Masto({
	access_token: 'ACCESS_TOKEN'
});

setInterval(function(){

	var title = "";
	var link = "";
	
	tumblrClient.blogPosts('BLOG_URL', function (err, data) {
	    if(data.posts[0].id != latest){
	    	title = data.posts[0].summary;
	    	link = data.posts[0].post_url;

	    	if(title.length > 107){
	    		title = title.substr(0, 107) + "..."; //truncate title for twitter length constraints 
	    	}

	    	twitterClient.post('statuses/update', {status: title + ' ' + link}, function(error, tweet, response){
				//console.log("twit");
			}); //send post to twitter 

		mastoClient.post('statuses', {status: title + ' ' + link}); //send post to mastodon 
	    }

	    latest = data.posts[0].id; //update lates stored tumblr post in script 
	});

}, 30000); //querys tumblr every 30 seconds 
