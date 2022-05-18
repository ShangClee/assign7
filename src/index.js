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
  const dDays = timeDiff / ONEDAY;
  const hHours = (dDays - Math.floor(dDays)) * 24;
  const mMins = (hHours - Math.floor(hHours)) * 60;
  const sSecs = (mMins - Math.floor(mMins)) * 60;
  const msg = `
      ${Math.floor(dDays)}d,
      ${Math.floor(hHours)}h:
      ${Math.floor(mMins)}m:
      ${Math.floor(sSecs)}s
      `
  const msg2 = `<br><br>Total TimeDiff (milliseconds) ${timeDiff}<br> ${xmasDate}<br>${tDate}`;
  if (myDebugging) {
    mainDiv.innerHTML = msg + msg2;

    //out2footer.innerHTML = `Date() = ${Date()}`;
    //console.log(Date());
  }
  displayCountdown.innerHTML = msg + msg2;
  displayToday.innerText = `Today: ${Date()}`;
}
fDisplayCountDown();
setInterval(fDisplayCountDown, TIMEINTERVAL);
