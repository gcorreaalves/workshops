var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var logSchema = new Schema({
    msg: { type: String },
    type: String,
    date: String
});


mongoose.connect('mongodb://localhost/logs');

module.exports = mongoose.model('Log', logSchema);