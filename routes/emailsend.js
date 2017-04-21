var express = require('express');
var router = express.Router();
var emailController = require('../controllers/emailsend.js')
var moment = require('moment');


router.post('/', function(req, res) {
  emailController.init(req, function(status, json){
    res.status(status).json(json);
  });
});
module.exports = router;
