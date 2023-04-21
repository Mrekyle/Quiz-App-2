const mainQuestion = document.getElementById('question');
const choiceTxt = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptAnswer = true;
let currentScore = 0; 
let questionCounter = 0;
let necxtQuestions = [];