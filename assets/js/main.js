// -----lev1_1-----
console.log('%c-----lev1_1-----', 'color: lightgreen');
const out = document.getElementById('out');

let date1 = new Date("September 2, 2019 09:00:00");
console.log('date1', date1);
out.innerHTML += `new Date("September 2, 2019 09:00:00") = ${date1} <br>`;

let date2 = new Date(0);
console.log(date2);
out.innerHTML += `new Date(0) = ${date2} <br>`;

let date3 = new Date(31556908800);
console.log(date3);
out.innerHTML += `new Date(31556908800) = ${date3} <br>`;

let date4 = new Date(86400000);
console.log(date4);
out.innerHTML += `new Date(86400000) = ${date4} <br>`;


// -----lev1_2-----
console.log('%c-----lev1_2-----', 'color: lightgreen');

const day = document.getElementById('day');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const period = document.getElementById('period');

const date = new Date();

let days = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat'
];

clockHours = (date) => {
  let hours = date.getHours();
  let minute = date.getMinutes();
  hours = hours % 12;
  hours = hours ? hours : 12;
  minute = minute < 10 ? '0' + minute : minute;
  return hours;
}

let currentDay = days[date.getDay()];
console.log("currentDay", currentDay);
let currentHour = clockHours(new Date());
console.log("currentHour", currentHour);
let currentMinutes = date.getMinutes();
console.log("currentMinutes", currentMinutes);
let currentSeconds = date.getSeconds();
console.log("currentSeconds", currentSeconds);

day.innerHTML = currentDay;
hours.innerHTML = currentHour;
minutes.innerHTML = currentMinutes < 10 ? '0' + currentMinutes : currentMinutes;
seconds.innerHTML = currentSeconds < 10 ? '0' + currentSeconds : currentSeconds;
period.innerHTML = currentHour >= 12 ? 'PM' : 'AM';


// -----lev1_6-----
console.log('%c-----lev1_6-----', 'color: lightgreen');
getHours = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  let Time = hours + ':' + minutes + ' ' + ampm;
  return Time;
}

date1 = getHours(new Date(1999, 10, 5, 15));
console.log(date1);
date2 = getHours(new Date());
console.log(date2);
date3 = getHours(new Date(2019, 12, 3, 00));
console.log(date3);
date4 = getHours(new Date(2000, 1, 1, 11));
console.log(date4);


// -----lev1_7-----
console.log('%c-----lev1_7-----', 'color: lightgreen');
isWeekend = (date) => {
  let day = date.getDay();

  if(day === 0 || day === 6) {
    return 'Weekend';
  } else {
    return 'Arbeitstag';
  }
}

console.log(isWeekend(new Date('12.15.2019')));
console.log(new Date('12.15.2019'));
console.log(isWeekend(new Date('2.16.2001')));
console.log(new Date('2.16.2001'));
console.log(isWeekend(new Date('2.1.2020')));
console.log(new Date('2.1.2020'));
console.log(isWeekend(new Date('2.29.2020')));
console.log(new Date('2.29.2020'));


// -----lev1_8-----
console.log('%c-----lev1_8-----', 'color: lightgreen');
var i = 10;

let countdown = setInterval(function(){
  console.log(i);
  i--

  if(i < 0) {
    clearInterval(countdown);
  }
},1000); 
