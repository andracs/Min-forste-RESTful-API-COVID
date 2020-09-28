var express = require('express');
var router = express.Router();
var smittede = require('../model/persistence')

router.get('/', function(req, res, next) {
  console.log("Jeg har modtaget en GET request")
  res.send(JSON.stringify(smittede));
});

router.get('/dat', function(req, res, next) {
  res.send(JSON.stringify(smittede.dat));
});

router.get('/mul', function(req, res, next) {
  res.send(JSON.stringify(smittede.mul));
});

router.post('/', function(req, res, next) {
  svar = "POST request modtaget. Coronatal er oprettet. ";
  svar = "Mul har nu " + req.body.smittedeMul + " smittede.";
  // Gem i database
  res.send(svar);
});

// TODO make put requests (opdater)
// TODO make delete requests (slet)

module.exports = router;
