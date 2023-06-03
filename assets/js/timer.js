/**
 * DOM Selectors
 */

const minutesTimer = document.getElementById("timer-counter-minutes");
const secondsTimer = document.getElementById("timer-counter-seconds");

/**
 * Misc Variables 
 */

let totalSeconds = 0;

setInterval(setTime, 1000);

/**
 * Timer Function
 */
function setTime() {
    ++totalSeconds;
    secondsTimer.innerHTML = pad(totalSeconds%60);
    minutesTimer.innerHTML = pad(parseInt(totalSeconds/60));
}

function pad(val) {
    var valString = val + "";
    if(valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}