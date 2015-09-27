var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
var Calls = mongoose.model('Calls');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('/index.html', { root: path.join(__dirname, '../views') });
});

router.post('/', function(req,res,next){
  var callDate = new Date(req.body.date+'T'+req.body.time+':00');
  console.dir(req.body.file);
  //Calls.create({number: 15864199473});
  res.send('<p>Request Submitted</p>');
});

module.exports = router;
