const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function seconds(second) {
  const secondHandDegree = ((second/60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondHandDegree}deg)`;
  };

function minutes(minute) {
  const minuteHandDegree = ((minute/60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minuteHandDegree}deg)`
};

function hours(hour) {
  const hourHandDegree = ((hour/12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourHandDegree}deg)`
};

function time() {
  const now = new Date();
  seconds(now.getSeconds());
  minutes(now.getMinutes());
  hours(now.getHours());
};

setInterval(time, 1000);
