var tumblr = require('tumblr.js');
var tumblrClient = tumblr.createClient({
  consumer_key: 'CONSUMER_KEY',
  consumer_secret: 'CONSUMER_SECRET',
  token: 'TOKEN',
  token_secret: 'TOKEN_SECRET'
});

var Twitter = require('twitter');
var twitterClient = new Twitter({
  consumer_key: 'CONSUMER_KEY',
  consumer_secret: 'CONSUMER_SECRET',
  access_token_key: 'ACCESS_TOKEN_KEY',
  access_token_secret: 'ACCESS_TOKEN_SECRET'
});

var Masto = require('mastodon');
var mastoClient = new Masto({
	access_token: 'ACCESS_TOKEN'
});
