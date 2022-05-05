 export const timer = document.querySelector("#timer");
let timerRunning = false;
let check = null;

export function startTimer() {
  if (!timerRunning) {
    timerRunning = true;
    let seconds = 0;
    let minuts = 0;
    check = setInterval(() => {
      let total = minuts < 10 ? "0" + minuts : minuts;
      seconds++;
      timer.innerText =
        seconds < 10 ? total + ":0" + seconds : total + ":" + seconds;
      if (seconds === 59) {
        seconds = -1;
        minuts++;
      }
    }, 1000);
  }
}

export function stopTimer() {
  clearInterval(check);
  timerRunning = false;
}
