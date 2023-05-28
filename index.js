const months = [
"January", 
"Febuary", 
"March", 
"April", 
"May",
"June", 
"July",
"August", 
"September", 
"October", 
"November",
"December"
];

const weekdays = [
"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday",
];

const ticker = document.querySelector(".ticker");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date (2040,11,31,23,59,59);
//console.log(futureDate);
//for current date remove specified values in ()

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
//console.log(months[month]);
month = months[month];

const date = futureDate.getDate ();
const weekday = weekdays [futureDate.getDay()];
//console.log(weekday);


ticker.textContent = `The Final Countdown to ${weekday}, ${date}st ${month}, ${year} ${hours}:${minutes} has Commenced...`;
ticker.style.fontSize = "30px";

//future time in ms
const futureTime = futureDate.getTime();
//console.log(futureTime);

function getRemainingTime(){
  const today = new Date().getTime();
  //console.log(today);
  const t = futureTime - today;
  //1s = 1000ms
  //1m = 60s
  //1hr = 60min
  //1d = 24 hrs

  //value in ms

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  

  //calculate all values
  let days = t / oneDay;
  days = Math.floor(days);

  let hours = Math.floor ((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  //set values array;
  const values = [days, hours, minutes, seconds];

  function format (item){
    if (item <10) {
        return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (t<0) {
 clearInterval (countdown);
 deadline.innerHTML = `<h3 class="expired">Too Late.. Time's up!</h3>`;
  }
}
let countdown = setInterval(getRemainingTime,1000);
getRemainingTime();