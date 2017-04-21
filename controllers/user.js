var User = require('../models/user.js')

var UserController = {
  findAll: function(callback) {
    User.find({}, function(error, users) {
      callback(200, users);
    });
  },
  findByUsername: function(req, callback) {
    var username = req.params.username;
    User.find({
      username: username

    }, function(error, users) {
      callback(200, users);
    });
  },
  create: function(req, callback) {
    var user = req.body;
    User.create(user, function(error, user) {
      callback(200, user);
    });
  },
  delete: function(req, callback) {
    var userId = req.params.id;
    User.remove({
      _id: userId
    }, function(error, user) {
      callback(200, user);
    });
  },
  update: function(req, callback) {
    var userUpdate = req.body;
    User.findByIdAndUpdate(userUpdate._id, userUpdate, function(error, userUpdated) {
      callback(200, userUpdated);
    });
  }
}
module.exports = UserController;
