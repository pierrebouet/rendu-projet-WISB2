var express = require('express');
var router = express.Router();
var userController = require('../controllers/user.js')
/* GET users listing. */
router.get('/', function(req, res) {
  userController.findAll(function(status, json){
    res.status(status).json(json);
  });
});
router.get('/:username', function (req,res){
  userController.findByUsername(req, function(status,json){
    res.status(status).json(json);
  });
});
router.post('/', function(req, res) {
  userController.create(req, function(status, json){
    res.status(status).json(json);
  });
});
router.delete('/:id', function(req, res) {
  userController.delete(req, function(status, json){
    res.status(status).json(json);
  });
});
router.put('/', function(req, res) {
  userController.update(req, function(status, json){
    res.status(status).json(json);
  });
});
module.exports = router;
