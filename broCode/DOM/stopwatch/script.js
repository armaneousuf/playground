const display = document.querySelector('.display-timer');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

let timeInterval = null;
let elapsedTime = 0;
let startTime = 0; 

function formatTime(ms) {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const centiseconds = Math.floor((ms % 1000) / 10);

    const pad = num => String(num).padStart(2, '0');
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(centiseconds)}`;
}

function updateDisplay() {
    const currentElapsed = elapsedTime + (Date.now() - startTime);
    display.textContent = formatTime(currentElapsed);
}

function start(){
    if(timeInterval) {
        return
    }

    startTime = Date.now();
    timeInterval = setInterval(updateDisplay, 10)
}

function stop(){
    if(!timeInterval) return;
    clearInterval(timeInterval);
    timeInterval = null;
    elapsedTime += Date.now() - startTime;
}

function reset(){
    clearInterval(timeInterval);

    timeInterval = null;
    elapsedTime = 0;
    startTime = 0;
    display.textContent = '00:00:00:00'
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);