const nodeList = document.querySelectorAll("[data-time]");

const list = [...nodeList];

const totalSeconds = list
  .map((item) => item.dataset.time.split(":"))
  .map((time) => {
    const [min, secs] = time.map(parseFloat);
    return min * 60 + secs;
  })
  .reduce((total, seconds) => total + seconds);

const hours = Math.floor(totalSeconds / 3600);
const mins = Math.floor((totalSeconds - hours * 3600) / 60);
const secs = totalSeconds - hours * 3600 - mins * 60;

console.log(hours + ":" + mins + ":" + secs);
