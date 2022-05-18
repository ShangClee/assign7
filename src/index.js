const myDebugging = false;
const ONEDAY = 1000 * 60 * 60 * 24;
const TIMEINTERVAL = 1000;
const mainDiv = document.querySelector("#imainDiv");
const displayCountdown = document.querySelector("#imainDiv h2");
const displayToday = document.querySelector("#imainDiv h3");

function getNumberOfDays(start, end) {
  const date1 = new Date(start);
  const date2 = new Date(end);

  // Calculating the time difference between two dates
  const diffInTime = date2.getTime() - date1.getTime();

  // Calculating the no. of days between two dates
  const diffInDays = Math.floor(diffInTime / ONEDAY);

  return diffInDays;
}

function fDisplayCountDown() {
  const xmasDate = new Date("12/25/2022");
  const tDate = new Date();
  // const timeDiff = tDate.getTime() - xmasDate.getTime();
  const timeDiff = xmasDate - tDate;
  const diffDate = new Date(timeDiff);

  // One day in milliseconds
  const daysDiff = getNumberOfDays(tDate, xmasDate);
  const TimeDiffMinusDays = tDate.getTime() - daysDiff * ONEDAY;
  const lessOneDayTime = new Date(TimeDiffMinusDays);

  let d = 100,
    h = 10,
    m = 30,
    s = 25;
  d = getNumberOfDays(tDate, xmasDate);
  h = diffDate.getHours();
  m = diffDate.getMinutes();
  s = diffDate.getSeconds();
  const y4 = diffDate.getFullYear();
  const m2 = diffDate.getMonth();
  const d2 = diffDate.getDay();
  // here to calc
  const m001 = `
      ${lessOneDayTime}<br>
      ${lessOneDayTime.getHours()}: <br>
      ${lessOneDayTime.getMinutes()}: <br>
      ${lessOneDayTime.getSeconds()}: <br>
  `;
  const msg00 = `${daysDiff}<br>`;
  const msg0 = `${y4}/${m2}/${d2}<br>`;
  const msg = `${d}day(s) ${h}hour(s) ${m}minute(s) ${s}seconds`;
  const msg2 = `<br><br>Total TimeDiff (milliseconds) ${timeDiff}<br> ${xmasDate}<br>${tDate}`;
  if (myDebugging) {
    mainDiv.innerHTML = m001 + msg00 + msg0 + msg + msg2;

    //out2footer.innerHTML = `Date() = ${Date()}`;
    //console.log(Date());
  }
  displayCountdown.innerHTML = msg + msg2;
  displayToday.innerText = `Today: ${Date()}`;
}
fDisplayCountDown();
setInterval(fDisplayCountDown, TIMEINTERVAL);
