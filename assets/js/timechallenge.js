/**
 * Dom Selectors
 */
const mainQuestion = document.getElementById('question');
const choiceTxt = Array.from(document.getElementsByClassName('choice-text'));
const questionCounterTxt = document.getElementById('question-counter');
const gameScore = document.getElementById('score');
const minutesTimer = document.getElementById("timer-counter-minutes");
const secondsTimer = document.getElementById("timer-counter-seconds");

/**
 * Misc Variables
 */
let currentQuestion = {}
let acceptAnswer = false
let currentScore = 0 
let questionCounter = 0
let nextQuestions = []

const correctScoreUp = 10
const maxQuestions = 20

let totalSeconds = 0;
let totalMinutes = 0

setInterval(setTime, 1000);

/**
 * Questions for the Quiz
 */

fetch('https://opentdb.com/api.php?amount=20&category=9&difficulty=medium&type=multiple')

.then((res) => {
    return res.json();
})
.then((loadedQuestions) => {
    questions = loadedQuestions.results.map((loadedQuestion) => {
        const formattedQuestion = {
            question: loadedQuestion.question,
        };

        const answerChoices = [...loadedQuestion.incorrect_answers];
        formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
        answerChoices.splice(
            formattedQuestion.answer - 1,
            0,
            loadedQuestion.correct_answer
        );

        answerChoices.forEach((choice, index) => {
            formattedQuestion['choice' + (index + 1)] = choice;
        });

        return formattedQuestion;
    });
    startGame();
})
.catch((err) => {
    console.error(err);
});


/**
 * Starts the quiz game 
 */
startGame = () => {
    questionCounter = 0
    currentScore = 0
    nextQuestions = [...questions]
    // console.log(nextQuestions)
    getNextQuestion()
}

/**
 * Sets the question in the question area of the game page. Also setting the answer choices 
 * for the current question
 */
getNextQuestion = () => {

    if(nextQuestions.length === 0 || questionCounter > maxQuestions) {
        localStorage.setItem('mostRecentTimeMinutes', totalMinutes)
        localStorage.setItem('mostRecentTimeSeconds', totalSeconds)
        localStorage.setItem('mostRecentScore', currentScore)
        return window.location.assign('/timetrials-endgame.html')
    }

    questionCounter++;
    questionCounterTxt.innerText = questionCounter + '/' + maxQuestions

    const currentQuestionI = Math.floor(Math.random() * nextQuestions.length)
        currentQuestion = nextQuestions[currentQuestionI]
        mainQuestion.innerHTML = currentQuestion.question
    
        choiceTxt.forEach( choice => {
            const choiceNum = choice.dataset['number']
            choice.innerText = currentQuestion['choice' + choiceNum]
        })

        nextQuestions.splice(currentQuestionI, 1)

        acceptAnswer = true
}

/**
 * Timer Function
 */
function setTime() {
    ++totalSeconds;
    secondsTimer.innerHTML = pad(totalSeconds%60);

    if(totalSeconds > 60 ) {
        totalSeconds = 0;
        ++totalMinutes;
        minutesTimer.innerHTML = totalMinutes;
    }
}

function pad(val) {
    var valString = val + "";
    if(valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}

/**
 * Gets the users selected answer
 */
choiceTxt.forEach(choice => {
    choice.addEventListener('click', e => {
        // console.log(e.target)
        if(!acceptAnswer) return

        acceptAnswer = false

        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let  classToApply = 'incorrect'
        if(selectedAnswer == currentQuestion.answer) {
            classToApply = 'correct'
        }

        if(classToApply === 'correct') {
            incrementScore(correctScoreUp)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNextQuestion()
        }, 500)
        // console.log(selectedAnswer == currentQuestion.answer)
    })
})

incrementScore = num => {
    currentScore +=num 
    gameScore.innerText = currentScore
}

startGame();

