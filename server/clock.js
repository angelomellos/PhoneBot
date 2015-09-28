var client = require('twilio')(process.env.TWILIO_ACCOUNT_SID,
process.env.TWILIO_AUTH_TOKEN);
var CronJob = require('cron').CronJob;
var clock = require('./clock.js');

// var threeMinutes = 120000;
// var inTwoMinutes = new Date(Date.now()+threeMinutes);
// var job = new CronJob(
//   inTwoMinutes,
//   function() {
//     console.log('trying to make call at: ',new Date());
//     client.makeCall({
//       to:'+15864199473',
//       from: '+15862001110',
//       url: 'http://two-letter-study.appspot.com/twiml'//going to be from the twiml
//     }).then(function(call){
//       console.log('Call success! Call SID: '+call.sid);
//     }).then(null, console.log)
// },
//   null,
//   true
// );

//
// var makeCalls = function() {
//   console.log('running makeCalls function');
//     client.makeCall({
//       to:'+15864199473',
//       from: '+15862001110',
//       url: 'http://localhost:1337/server/app/routes/calls/twiml.js'//going to be from the twiml
//     })
//     .then(function(call) {
//         console.log('Call success! Call SID: '+call.sid);
//     }).then(null, console.log);
//  };
