'use strict';
var client = require('twilio')();
var mongoose = require('mongoose');
var Calls = mongoose.model('Calls');

module.exports = {
  makeCalls: function(time) {
    Calls.find({time:time}).then(function(numbers){
      numbers.forEach(function(number){
        if(!number.isDone){
          client.makeCall({
            to: number.number,
            from: '+15862001110',
            url: 'https://stormy-bayou-8964.herokuapp.com/twiml?recording=' +
            number.url
          }).then(function(){
            number.isDone = true;
            number.save();
          }).then(null,console.log);
        }
      });
    });
    // client.makeCall({
    //   to:'+15864199473',
    //   from: '+15862001110',
    //   url: 'http://localhost:1337/server/app/routes/calls/twiml.js'//going to be from the twiml
    // })
    // .then(function(call) {
    //     console.log('Call success! Call SID: '+call.sid);
    // }).then(null, console.log);
 }
};
