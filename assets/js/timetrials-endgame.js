/**
 * Dom Selectors
 */

const finalScore = document.getElementById('final-score')
const finalTime = document.getElementById('final-time')

/**
 * Local Storage 
 */

const mostRecentScore = localStorage.getItem('mostRecentScore')
const mostRecentTime = localStorage.getItem('mostRecentTime')


/**
 * Text input
 */

finalScore.innerText = mostRecentScore;
finalTime.innerText = mostRecentTime;
