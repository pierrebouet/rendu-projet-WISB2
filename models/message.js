var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
    subject: String,
    text: String,
    email: String
});
var Message = mongoose.model('Message', messageSchema);
module.exports = Message;
