var client = require('twilio')('AC35326c4f5ae8dd516f973d837fe4d485',
'c4ac1a1aace3333a3414904c3fa7f918');
var CronJob = require('cron').CronJob;
var clock = require('./clock.js');

var threeMinutes = 180000;
var inThreeMinutes = new Date(Date.now()+threeMinutes);
var job = new CronJob(
  inThreeMinutes,
  function() {
    console.log('trying to make call at: ',new Date());
    client.makeCall({
      to:'+15864199473',
      from: '+15862001110',
      url: 'http://localhost:1337/server/app/routes/calls/twiml.js'//going to be from the twiml
    });
},
  null,
  true
);


var makeCalls = function() {
  console.log('running makeCalls function');
    client.makeCall({
      to:'+15864199473',
      from: '+15862001110',
      url: 'http://localhost:1337/server/app/routes/calls/twiml.js'//going to be from the twiml
    })
    .then(function(call) {
        console.log('Call success! Call SID: '+call.sid);
    }).then(null, console.log);
 };
