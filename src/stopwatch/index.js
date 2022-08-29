const stopwatchTime = document.getElementById("stopwatch-time");
const stopwatchStopButton = document.getElementById("stopwatch-stop-button");
const stopwatchStartButton = document.getElementById("stopwatch-start-button");
const stopwatchResetButton = document.getElementById("stopwatch-reset-button");

let isTimerStarted = false; 
let timerIntervalId = null;
let timerStartedAt = null;

stopwatchResetButton.addEventListener("click", () => {
    if (isTimerStarted) {
        stopwatchTime.innerHTML = "00:00"; 
        timerStartedAt = Date.now();
    }
});

stopwatchStopButton.addEventListener("click", () => {
    stopwatchTime.innerHTML = "00:00";
    isTimerStarted = false;

    window.clearInterval (timerIntervalId);
    timerIntervalId = null;
});

stopwatchStartButton.addEventListener("click", () => {
    if (isTimerStarted) { 
        return;
    }


    stopwatchTime.innerHTML = "00:00";
    timerStartedAt = Date.now();
    isTimerStarted = true;

    timerIntervalId = window.setInterval(()=> {
        stopwatchTime.innerHTML = formatTime(Date.now()-timerStartedAt);
    }, 250) ;
});

function formatTime(time) {
    const minutes = Math.floor(time / 1000 / 60);
    const seconds = Math.floor(time / 1000 % 60); 
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}