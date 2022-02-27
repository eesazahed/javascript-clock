const start = () => {
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";

  if (hours >= 13) hours -= 12;
  if (hours < 1) hours = 12;
  if (hours < 10) hours = `0${hours}`;
  if (minutes < 10) minutes = `0${minutes}`;
  if (seconds < 10) seconds = `0${seconds}`;

  document.getElementById(
    "clock"
  ).innerHTML = `${hours} <b>:</b> ${minutes} <b>:</b> ${seconds} ${ampm}`;
  setTimeout(start, 1000);
};
start();
