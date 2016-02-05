var express = require('express');
var TOTP = require('onceler').TOTP;
var request = require('request');

var app = express();
var totp = new TOTP('SUPERSECRET');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/skinz', function (req, res) {

  request('https://bitskins.com/api/v1/get_account_balance/?api_key=' + 'APIKEY' + '&code=' + totp.now(), function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body) // Show the HTML for the Google homepage.
    } else {
      console.log(response);
    }
  });
});

app.listen(3000, function () {
  console.log('Server listening on port 3000!');
});
