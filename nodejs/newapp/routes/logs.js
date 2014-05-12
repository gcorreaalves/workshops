var express = require('express');
var router = express.Router();
var Logs = require('../controllers/LogsController');

/* GET logs listing. */
router.get('/', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(Logs.list(), null, 3));
});

/* GET/DATE log. */
router.get('/:d/:m/:y', function(req, res) {

  var 
  date = req.params.d + '/' + req.params.m + '/' + req.params.y,
  logsDate = Logs.findByDate(date);

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(logsDate, null, 3));

});

/* GET/TYPE log. */
router.get('/:type', function(req, res) {

  var type = req.params.type,
  logsType = Logs.findByType(type);

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(logsType, null, 3));

});

/* POST/CREATE log. */
router.post('/', function(req, res) {
  var 
  msg = req.body.msg,
  type = req.body.type,
  date = req.body.date;

  Logs.save(msg, type, date);

  res.send(200);

});


/* POST/DELETE log. */
router.delete('/:id', function(req, res) {
  var 
  id = req.params.id;

  Logs.del(id);

  res.send(200);

});


module.exports = router;
