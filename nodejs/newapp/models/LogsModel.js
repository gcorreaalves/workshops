var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
    var logSchema = new mongoose.Schema({
    	msg: { type: String },
    	type: String,
    	date: String
    });

    var Log = mongoose.model('Log', movieSchema);
    var logObj = new Log({
    	msg: 'Capitão América', 
    	type: 'PG-13',
    	date: '08/09/2013' 
    });

    logObj.save(function(err, logObj) {
      if (err) return console.error(err);
      console.dir(logObj);
    });

    // // Find a single movie by name.
    // Log.findOne({ title: 'Thor' }, function(err, logObj) {
    //   if (err) return console.error(err);
    //   console.dir(logObj);
    // });
   

    Log.find(function(err, logs) {
      if (err) return console.error(err);
      console.dir(logs);
    });
});

mongoose.connect('mongodb://localhost/logs');