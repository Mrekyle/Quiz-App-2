/**
 * DOM Selectors
 */

const finalScore = document.getElementById('final-score')

/**
 * Misc Constants 
 */

const mostRecentScore = localStorage.getItem('mostRecentScore')

/**
 *  Text Input
 */

finalScore.innerText = mostRecentScore;
