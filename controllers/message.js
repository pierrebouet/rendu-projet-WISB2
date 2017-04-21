var Message = require('../models/message.js')

var MessageController = {
  findAll: function(callback) {
    Message.find({}, function(error, messages) {
      callback(200, messages);
    });
  },
  findByMessagename: function(req, callback) {
    var messagename = req.params.messagename;
    Message.find({
      messagename: messagename

    }, function(error, messages) {
      callback(200, messages);
    });
  },
  create: function(req, callback) {
    var message = req.body;
    Message.create(message, function(error, message) {
      callback(200, message);
    });
  },
  delete: function(req, callback) {
    var messageId = req.params.id;
    Message.remove({
      _id: messageId
    }, function(error, message) {
      callback(200, message);
    });
  },
  update: function(req, callback) {
    var messageUpdate = req.body;
    Message.findByIdAndUpdate(messageUpdate._id, messageUpdate, function(error, messageUpdated) {
      callback(200, messageUpdated);
    });
  }
}
module.exports = MessageController;
