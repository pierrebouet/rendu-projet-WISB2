var mongoose = require('mongoose');

var dateSchema = mongoose.Schema({
    date : String,
    email: String
});
var Date = mongoose.model('Date', dateSchema);
module.exports = Date;
