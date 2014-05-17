var express = require('express');
var router = express.Router();
var LogBD = require('../models/LogsModel');

/* GET logs listing. */
router.get('/', function(req, res) {

    LogBD.find(function(err, result) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(result, null, 3));
    });

});

/* GET/DATE log. */
router.get('/:d/:m/:y', function(req, res) {

  var 
  date = req.params.d + '/' + req.params.m + '/' + req.params.y;

  LogBD.find({'date': date}, function(err, result) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result, null, 3));
  });

});

/* GET/TYPE log. */
router.get('/:type', function(req, res) {

  var type = req.params.type;

  LogBD.find({'type': type}, function(err, result) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result, null, 3));
  });

});

/* POST/CREATE log. */
router.post('/', function(req, res) {
  var 
  msg = req.body.msg,
  type = req.body.type,
  date = req.body.date;

  new LogBD({msg: msg, type: type, date: date}).save();
  res.send(200);

});


/* POST/DELETE log. */
router.delete('/:id', function(req, res) {
  var 
  id = req.params.id;

  console.log(id);

  LogBD.remove({'_id': id}, function(err, result) {
    res.send(200);
  });

});


module.exports = router;
