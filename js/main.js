// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

document.addEventListener(
  "click",
  () => {
    if (navCollapse.classList.contains("show")) {
      navCollapse.classList.remove("show");
    }
  },
  true
);

navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

//countdown logic

let interval;
const eventDay = new Date("07/01/2022");

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let dayField = document.getElementById("day");
let hourField = document.getElementById("hour");
let minuteField = document.getElementById("minute");
let secondField = document.getElementById("second");

const countDownFn = () => {
  // all logic goes in
  everySecond = setInterval(countDownFn, second);
  everyMinute = setInterval(countDownFn, minute);
  everyHour = setInterval(countDownFn, hour);

  let now = new Date();
  let timeSpan = eventDay - now;

  if (timeSpan <= 0) {
    console.log("Today is the event day");
    clearInterval(interval);
    return;
  } else {
    const days = Math.floor(timeSpan / day);
    const hours = Math.floor((timeSpan % day) / hour);
    const minutes = Math.floor((timeSpan % hour) / minute);
    const seconds = Math.floor((timeSpan % minute) / second);

    console.log(days + ":" + hours + ":" + minutes + ":" + seconds);
    dayField.innerHTML = days;
    hourField.innerHTML = hours;
    minuteField.innerHTML = minutes;
    secondField.innerHTML = seconds;
  }
};

interval = setInterval(countDownFn, second);
