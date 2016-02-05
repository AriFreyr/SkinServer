var express = require('express');
var TOTP = require('onceler').TOTP;
var request = require('request');

var app = express();
var totp = new TOTP('SUPERSECRET');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/skinz', function (req, res) {

  request('https://bitskins.com/api/v1/get_all_item_prices/?api_key=' + 'api_key' + '&code=' + totp.now(), function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    } else {
      res.send(response);
    }
  });
});

app.listen(3000, function () {
  console.log('Server listening on port 3000!');
});
