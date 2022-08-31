let countDownDate = new Date("Aug 31, 2022 21:00:00");

let countDate = setInterval(countDown, 1000);

function countDown(day, monath) {

  day = new Date();
  monath = new Date().getMonth();

  let distance = countDownDate - day;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector("#countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(countDown);
    document.querySelector("#countdown").innerHTML = "Վերջացել է նշված ժամանակը";
  }
}