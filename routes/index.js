var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
var Calls = mongoose.model('Calls');
var client = require('twilio')('AC35326c4f5ae8dd516f973d837fe4d485',
'c4ac1a1aace3333a3414904c3fa7f918');
var CronJob = require('cron').CronJob;
var worker = require('../server/bot.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('/index.html', { root: path.join(__dirname, '../views') });
});

router.post('/', function(req,res,next){
  var callDate = new Date(req.body.datetime);
  Calls.create({number: req.body.arrs[1][2], time: callDate})
  .then(function(calls){
    createCronJob(callDate);
    console.log('should run at ',callDate);
    res.status(200).send();
})
  .then(null, console.log);
});

var createCronJob = function(time){
  return new CronJob(
    new Date(time),
    function(time) {worker.makeCalls(time)},
    null,
    true
  );
};
var createCronJobTest = function(time){
  console.log('creating cron job for time: ',time);
  return new CronJob(
    new Date(time),
    function() {console.log('would have made call at ', new Date())},
    null,
    true
  );
};

module.exports = router;
