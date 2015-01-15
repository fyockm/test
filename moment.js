var moment = require('moment');

var ad = 18941;
var tt = 492459;
var atpq = 789;

function duration(t) {
    var dur = moment.duration(t, 'seconds');

    console.log('dur:', dur.humanize());
    console.log('s:', dur.seconds());
    console.log('asS:', dur.asSeconds());
    console.log('m:', dur.minutes());
    console.log('h:', dur.hours());
    console.log('d:', dur.days());
    console.log();
}

duration(ad);
duration(tt);
duration(atpq);
