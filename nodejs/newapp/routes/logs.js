var express = require('express');
var router = express.Router();

var logs = {
  "logs" : [
    { "id": "spec1",
      "type": "error",
      "msg": "esta é uma mensagem de erro",
      "date": "02/03/2014",
    },
    { "id": "spec2",
      "type": "alert",
      "msg": "esta é uma mensagem de erro",
      "date": "02/03/2012",
    },
    { "id": "spec3",
      "type": "success",
      "msg": "esta é uma mensagem de erro",
      "date": "02/03/2014",
    },
  ],
  "total": 3
};

/* GET logs listing. */
router.get('/', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(logs, null, 3));
});

/* GET/DATE log. */
router.get('/:d/:m/:y', function(req, res) {

  var 
  date = req.params.d + '/' + req.params.m + '/' + req.params.y,
  logsFilter = [];

  for (var i = 0; i < logs.total; i++) {
  	if ( logs.logs[i].date == date ) {
		logsFilter.push(logs.logs[i]);
  	}
  };

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(logsFilter, null, 3));

});

/* GET/TYPE log. */
router.get('/:type', function(req, res) {

  var type = req.params.type,
  logsFilter = [];

  for (var i = 0; i < logs.total; i++) {
  	if ( logs.logs[i].type == type ) {
		logsFilter.push(logs.logs[i]);
  	}
  };

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(logsFilter, null, 3));

});


/* POST/CREATE log. */
router.post('/', function(req, res) {
  var 
  msg = req.body.msg,
  type = req.body.type,
  date = req.body.date,
  logTotal = ++logs.total,
  logsObj = {
  	"id" : "spec" + ( logTotal ),
  	"msg" : msg,
  	"type" : type,
  	"date" : date
  };

  logs.logs.push(logsObj);
  logs.total = logTotal;

});


/* POST/DELETE log. */
router.delete('/:id', function(req, res) {
  var 
  id = req.params.id,
  logTotal = --logs.total;

  for (var i = 0; i < logs.total; i++) {
  	if ( logs.logs[i].id == id ) {
		//logs.logs.shift(logs.logs[i]);
    logs.logs.splice(i, 1);
    console.log(i);
		break;
  	}
  };

  logs.total = logTotal;

  
  console.log(logs.logs);

  res.send(200);

});


module.exports = router;
