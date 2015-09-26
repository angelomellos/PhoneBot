var CronJob = require('cron').CronJob;
var bot = require('./bot.js');

new CronJob({
  cronTime: "1 35,36,37 16 * * *", // everyday, 9:13, 11:13, 4:13, 8:13,
  onTick: bot.makeCalls(),
  start: true,
  timeZone: "America/New_York"
});
