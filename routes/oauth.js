var express = require('express');
var router = express.Router();
var request = require('request');

// REST API KEY
// 6c867a9dbd34edb619b5f6eac5dacee4
// Redirect URI
// /oauth/getToken

router.get('/', function(req, res, next) {
  request.get({uri:"https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=6c867a9dbd34edb619b5f6eac5dacee4&redirect_uri=https://hn-kakao-bmvvx.run.goorm.io/oauth/getCode"})
});

router.get('/getCode', function(req, res, next) {
  res.render('oauth', { title: 'Express' });
});

router.get('/getToken', function(req, res, next) {
  res.render('oauth', { title: 'Express' });
});

module.exports = router;
