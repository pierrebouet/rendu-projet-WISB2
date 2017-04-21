var express = require('express');
var router = express.Router();
var messageController = require('../controllers/message.js')
/* GET messages listing. */
router.get('/', function(req, res) {
  messageController.findAll(function(status, json){
    res.status(status).json(json);
  });
});
router.get('/:messagename', function (req,res){
  messageController.findByMessagename(req, function(status,json){
    res.status(status).json(json);
  });
});
router.post('/', function(req, res) {
  messageController.create(req, function(status, json){
    res.status(status).json(json);
  });
});
router.delete('/:id', function(req, res) {
  messageController.delete(req, function(status, json){
    res.status(status).json(json);
  });
});
router.put('/', function(req, res) {
  messageController.update(req, function(status, json){
    res.status(status).json(json);
  });
});
module.exports = router;
