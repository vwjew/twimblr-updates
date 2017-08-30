/*
	Twimblr Automation by VWJ
*/


var tumblr = require('tumblr.js');
var tumblrClient = tumblr.createClient({
  consumer_key: '<CONSUMER_KEY>',
  consumer_secret: 'CONSUMER_SECRET>',
  token: '<TOKEN>',
  token_secret: '<TOKEN_SECRET>'
});

var Twitter = require('twitter');
var twitterClient = new Twitter({
  consumer_key: '<CONSUMER_KEY>',
  consumer_secret: '<CONSUMER_SECRET>',
  access_token_key: '<ACCESS_TOKEN_KEY>',
  access_token_secret: '<ACCESS_TOKEN_SECRET>'
});

var latest = "";


setInterval(function(){

	var title = "";
	var link = "";

	tumblrClient.blogPosts('<TUMBLR_BLOG>', function (err, data) {
	    //console.log(data.posts[0].summary);
	    if(data.posts[0].id != latest){
	    	title = data.posts[0].summary;
	    	link = data.posts[0].post_url;

	    	if(title.length > 107){
	    		title = title.substr(0, 107) + "...";
	    	}

	    	twitterClient.post('statuses/update', {status: title + ' ' + link}, function(error, tweet, response){
				//console.log("twit");
			});
	    }

	    latest = data.posts[0].id;
	});

}, 30000);



