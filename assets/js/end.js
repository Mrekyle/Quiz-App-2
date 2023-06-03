/**
 * DOM Selectors
 */

const finalScore = document.getElementById('final-score')
const finalTimeMinutes = document.getElementById('final-time-minutes')
const finalTimeSeconds = document.getElementById('final-time-seconds')

/**
 * Misc Constants 
 */

const mostRecentScore = localStorage.getItem('mostRecentScore')
const mostRecentTimeMinutes = localStorage.getItem('mostRecentTimeMinutes')
const mostRecentTimeSeconds = localStorage.getItem('mostRecentTimeSeconds')

/**
 *  Text Input
 */

finalScore.innerText = mostRecentScore;
finalTimeMinutes.innerText = mostRecentTimeMinutes;
finalTimeSeconds.innerText = mostRecentTimeSeconds;
