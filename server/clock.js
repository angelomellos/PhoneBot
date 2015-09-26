var CronJob = require('cron').CronJob;
var bot = require('./bot.js');

new CronJob({
  cronTime: "1 35,36,37 16 * * *",
  onTick: bot.makeCalls(),
  start: true,
  timeZone: "America/New_York"
});
