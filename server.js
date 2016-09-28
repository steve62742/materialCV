"use strict";


var express = require('express');
var path = require('path');



var app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, '/'), { maxAge: 86400000 }));
//app.use('/bower_components',  express.static(__dirname + '/bower_components'));
//app.use('/public',  express.static(__dirname + '/public'));

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});



// API routes

app.get('/', function(req, res, next) {
  console.log('Working....');
  res.sendStatus(200);
});


