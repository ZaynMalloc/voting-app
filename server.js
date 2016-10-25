var express = require('express');
var app = express();
var http = require('http');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var FACEBOOK_APP_ID = '1622224741410834';
var FACEBOOK_APP_SECRET = 'f1763e6c00fd2d07f229e5c13445093e';
var user = require('app/config/user');
var path = require('path');

app.get('/',(req,res){

    console.log("YOLO");
});

app.listen(8080, function () {
  console.log('Example app listening on port 3000!');
});
