var express = require('express');
var router = express.Router();
var dateController = require('../controllers/date.js')
var moment = require('moment');

/* GET dates listing. */
router.get('/', function(req, res) {
  dateController.findAll(function(status, json){
    res.status(status).json(json);
  });
});
router.get('/:dateId', function (req,res){
  dateController.findByDate(req, function(status,json){
    res.status(status).json(json);
  });
});
router.post('/', function(req, res) {
  dateController.create(req, function(status, json){
    res.status(status).json(json);
  });
});
router.delete('/:dateId', function(req, res) {
  dateController.delete(req, function(status, json){
    res.status(status).json(json);
  });
});
router.put('/', function(req, res) {
  dateController.update(req, function(status, json){
    res.status(status).json(json);
  });
});
module.exports = router;
