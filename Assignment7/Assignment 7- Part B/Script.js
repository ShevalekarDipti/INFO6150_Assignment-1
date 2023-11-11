const stopwatch = document.getElementById('stopwatch');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const datePicker = document.getElementById('datePicker');

let intervalId;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

async function startTimer() {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now() - elapsedTime;
    await startInterval();
  }
}

function startInterval() {
  return new Promise((resolve) => {
    intervalId = setInterval(() => {
      updateTime();
    }, 1000);
    resolve();
  });
}

async function stopTimer() {
  if (isRunning) {
    isRunning = false;
    clearInterval(intervalId);
    elapsedTime = Date.now() - startTime;
  }
}

function resetTimer() {
  clearInterval(intervalId);
  isRunning = false;
  elapsedTime = 0;
  stopwatch.textContent = '00:00:00';
}

function updateTime() {
  const currentTime = Date.now() - startTime + elapsedTime;
  const formattedTime = formatTime(currentTime);
  stopwatch.textContent = formattedTime;
}

function formatTime(milliseconds) {
  const date = new Date(milliseconds);
  const hours = padTime(date.getUTCHours());
  const minutes = padTime(date.getUTCMinutes());
  const seconds = padTime(date.getUTCSeconds());
  return `${hours}:${minutes}:${seconds}`;
}

function padTime(time) {
  return time < 10 ? `0${time}` : time;
}
