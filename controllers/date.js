var Date = require('../models/date.js')
var moment = require('moment');

var DateController = {
  findAll: function(callback) {
    Date.find({}, function(error, dates) {
      callback(200, dates);
    });
  },
  findByDatename: function(req, callback) {
    var datename = req.params.datename;
    Date.find({
      datename: datename

    }, function(error, dates) {
      callback(200, dates);
    });
  },
  create: function(req, callback) {
    var date = req.body;
    date.date = moment(date.date);
    Date.create(date, function(error, date) {
      callback(200, date);
    });
  },
  delete: function(req, callback) {
    var dateId = req.params.id;
    Date.remove({
      _id: dateId
    }, function(error, date) {
      callback(200, date);
    });
  },
  update: function(req, callback) {
    var dateUpdate = req.body;
    Date.findByIdAndUpdate(dateUpdate._id, dateUpdate, function(error, dateUpdated) {
      callback(200, dateUpdated);
    });
  }
}
module.exports = DateController;
