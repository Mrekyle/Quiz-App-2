const mainQuestion = document.getElementById('question');
const choiceTxt = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {}
let acceptAnswer = true
let currentScore = 0 
let questionCounter = 0
let nextQuestions = []

const correctScoreUp = 10
const maxQuestions = 10

/**
 * Questions for the Quiz
 */
const questions = [
    {
        question: "What is 2 + 2?",
            choice1: '4',
            choice2: '32',
            choice3: '5',
            choice4: 'Fish?',
        answer: 1
    },
    {
        question: 'What is the capital of Finland?',
            choice1: 'Tokyo',
            choice2: 'London',
            choice3: 'Helsinki',
            choice4: 'New York',
        answer: 3
    },
    { 
        question: 'How many bones does a shark have?',
            choice1: 'None, Its all cartilage',
            choice2: '43',
            choice3: '76',
            choice4: '1',
        answer: 1
    },
    {
        question: 'Area 51 is located in which American state?',
            choice1: 'Mississippi',
            choice2: 'Texas',
            choice3: 'Idaho',
            choice4: 'Nevada',
        answer: 4
    },
    {
        question: 'What is a group of ravens called?',
            choice1: 'Pack',
            choice2: 'Conglomerate',
            choice3: 'An Unkindness',
            choice4: 'Gaggle',
        answer: 3
        
    },
    { 
        question: 'What is David Bowies original surname?',
            choice1: 'Hollister',
            choice2: 'Humphries',
            choice3: 'Dann',
            choice4: 'Jones',
        answer: 4
    },
    {
        question: 'Who won the X Factor in 2011?',
            choice1: 'Ollie Murs',
            choice2: 'Little Mix',
            choice3: 'Lincoln Park',
            choice4: 'Alexandra Burke',
        answer: 2
    },
    { 
        question: 'What grain is the Japanese spirit Sake made from?',
            choice1: 'Barley',
            choice2: 'Rice',
            choice3: 'Quiona',
            choice4: 'Oats',
        answer: 2
    }, 
    { 
        question: 'Who is the manager of the England football team as of 2020?',
            choice1: 'Sam Allardyce',
            choice2: 'Fabio Capello',
            choice3: 'Steve McClaren',
            choice4: 'Gareth Southgate',
        answer: 4
    },
    { 
        question: 'What year was Google Images invented?',
            choice1: 'July 2001',
            choice2: 'August 2003',
            choice3: 'March 2021',
            choice4: 'April 2002',
        answer: 1
    },
    {
        question: 'How many sides does a heptadecagon have?',
            choice1: '13',
            choice2: '17',
            choice3: '21',
            choice4: '19',
        answer: 2
    },
    {
        question: 'How many time zones are in Russia?',
            choice1: '18',
            choice2: '11',
            choice3: '14',
            choice4: '9',
        answer: 2
    }, 
    {
        question: 'Which UK city is the artist Banksy from?',
            choice1: 'Bristol',
            choice2: 'Chelmsford',
            choice3: 'Colchester',
            choice4: 'Manchester',
        answer: 1
    },
    { 
        question: 'Who invented the World Wide Web in 1990?',
            choice1: 'Jimmy Carr',
            choice2: 'Barack Obama',
            choice3: 'Tim Burners-Lee',
            choice4: 'Stephan Hawking',
        answer: 3
    },
    {
        question: 'What is a group of spiders called?',
            choice1: 'Gathering',
            choice2: 'Cluster',
            choice3: 'Pocahontas',
            choice4: 'Huddle',
        answer: 2
    },
    {
        question: 'What is the smallest country in the world?',
            choice1: 'Vatican City',
            choice2: 'Latvia',
            choice3: 'Canada',
            choice4: 'Libya',
        answer: 1
    }, 
    {
        question: 'What is the name for a donkey crossed with a zebra?', 
            choice1: 'Cheetah',
            choice2: 'Koala',
            choice3: 'Pangolin',
            choice4: 'Zeedonk',
        answer: 4
    }, 
    { 
        question: 'How many Prime Ministers did the UK have in 2022?',
            choice1: '3',
            choice2: '1',
            choice3: '2',
            choice4: '5',
        answer: 1
    },
    {
        question: 'Who was the barista in friends?', 
            choice1: 'Harry',
            choice2: 'Gunther',
            choice3: 'Ross',
            choice4: 'Janicse',
        answer: 2
    },
    { 
        question: 'What does "He" stand for in the periodic table?',
            choice1: 'Hydrogen',
            choice2: 'Calcium',
            choice3: 'Gold',
            choice4: 'Helium',
        answer: 4
    }
]

startGame = () => {
    questionCounter = 0
    currentScore = 0
    nextQuestions = [...questions]
    // console.log(nextQuestions)
    getNextQuestion()
}

getNextQuestion = () => {
    questionCounter++;
    const currentQuestionI = Math.floor(Math.random() * nextQuestions.length)
        currentQuestion = nextQuestions[currentQuestionI]
        mainQuestion.innerHTML = currentQuestion.question
    
        choiceTxt.forEach( choice => {
            const choiceNum = choice.dataset['number']
            choice.innerText = currentQuestion['choice' + choiceNum]
        })
}

startGame();

