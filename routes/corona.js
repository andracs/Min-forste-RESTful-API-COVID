var express = require('express');
var router = express.Router();
var smittede = require('../model/persistence')

router.get('/', function(req, res, next) {
  res.send(JSON.stringify(smittede));
});

router.get('/dat', function(req, res, next) {
  res.send(smittede.dat);
});

router.get('/mul', function(req, res, next) {
  res.send(smittede.mul);
});


module.exports = router;
