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
  // TODO Persister det indkomne d
  obj = {}
  obj.svar = svar; 
  res.send(JSON.stringify(obj));
});

// TODO make put requests (opdater)
router.put('/', function(req, res, next) {
  obj = {}
  obj.svar = "PUT request modtaget, data er opdateret."; 
    // TODO Persister det indkomne data
  res.send(JSON.stringify(obj));
});

// TODO make delete requests (slet)
router.delete('/', function(req, res, next) {
  obj = {}
  obj.svar = "DELETE request modtaget, data er slettet."; 
    // TODO Persister det indkomne data
  res.send(JSON.stringify(obj));
});

module.exports = router;

