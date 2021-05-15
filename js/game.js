const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: "Che differenze ci sono tra le foreste decidue tropicali e le foreste pluviali tropicali?",
        choice1: "Nella latitudine in cui si trovano",
        choice2: "Non ci sono differenze",
        choice3: "Nessuna delle altre",
        choice4: "Le principali differenza stanno nella quantità di precipitazioni e nella vegetazione",
        answer: 4,
    },
    {
        question: "Dove si trova il bioma delle foreste pluviali tropicali?",
        choice1: "Nelle regioni equatoriali con più di 250cm di precipitazioni l'anno",
        choice2: "Nelle regioni equatoriali con meno di 250cm di precipitazioni l'anno",
        choice3: "In europa",
        choice4: "Nessuna delle precedenti",
        answer: 1,
    },
    {
        question: "Quanta superficie mondiale è ricoperta dalle foreste pluviali tropicali?",
        choice1: "2.2%",
        choice2: "1%",
        choice3: "2%",
        choice4: "50%",
        answer: 3,
    },
    {
        question: "Quanto dura la stagione secca nella foresta pluviale?",
        choice1: "4-5 mesi",
        choice2: "1-4 mesi",
        choice3: "5-7 mesi",
        choice4: "1-3 mesi",
        answer: 4,
    },
    {
        question: "Quanti ettari di foresta pluviale vengono disboscati ogni anno?",
        choice1: "Circa 10 milioni",
        choice2: "Circa 20 milioni",
        choice3: "Circa 5 milioni",
        choice4: "30+ milioni",
        answer: 2,
    },
    {
        question: "Da dove deriva la parola 'pluviale'?",
        choice1: "Dal latino 'pluvia' = pioggia",
        choice2: "Dal spagnolo 'lluvia' = pioggia",
        choice3: "Dall'inglese 'rain' = pioggia",
        choice4: "Dal greco 'βροχή' = pioggia",
        answer: 1,
    },
    {
        question: "Quanto rimane della foresta decidua tropicale nella Costa Rica?",
        choice1: "30%",
        choice2: "40%",
        choice3: "7%",
        choice4: "10%",
        answer: 3,
    },
    {
        question: "Perchè le aree della foresta decidua tropicale sono tra i migliori terreni agricoli?",
        choice1: "Nessuna delle altre",
        choice2: "Perchè contengono più nutrienti rispetto ai suoli delle aree più umide",
        choice3: "Perchè si estendono maggiormente nei poli in aree particolarmente coltivabili",
        choice4: "Perchè contengono meno nutrienti rispetto ai suoli delle aree più umide",
        answer: 2,
    },
    {
        question: "Come si chiamano le 'piante che crescono su altre piante'?",
        choice1: "Epifite",
        choice2: "Arboricole",
        choice3: "Liane",
        choice4: "Baobab",
        answer: 1,
    },
    {
        question: "Cosa indica il termine deforestazione?",
        choice1: "Indica la coltivazione di alberi",
        choice2: "La distruzione delle strade",
        choice3: "È un sinonimo di riforestazione",
        choice4: "Indica l’abbattimento di alberi per motivi commerciali o per ottenere nuovi terreni.",
        answer: 4,
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 10

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }

    questionCounter++
    progressText.innerText = `Domanda ${questionCounter} di ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()