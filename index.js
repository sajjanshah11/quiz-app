
// Object Array in javascript

const quizData = [
    {
        question: 'Who is the Prime Minister of India ? ',
        a: 'KP Oli',
        b: 'Narendra Modi',
        c: 'Sajjan Shah',
        d: 'Donald Trump',
        correct: 'b'
    }, {
        question: 'What is the capital city of India?',
        a: 'New Delhi',
        b: 'Jaipur',
        c: 'Mumbai',
        d: 'Patna',
        correct: 'a'
    }, {
        question: 'What is the capital city of Nepal?',
        a: 'Pokhara',
        b: 'Biratnagar',
        c: 'Birgunj',
        d: 'Kathmandu',
        correct: 'd'
    }, {
        question: 'what is the most used programming language used in 2020 ?',
        a: 'Javascript',
        b: 'Java',
        c: 'Dart',
        d: 'c++',
        correct: 'a'
    }

];

// selector

const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');


let currentQuiz = 0;
let score = 0;

// FUNCTION

loadQuiz();
function loadQuiz() {
    deSelectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deSelectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false
    })
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    // console.log(answer);    
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
            // console.log(score);
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            //TODO: show results
            quiz.innerHTML = `<h2> You answered correctly at ${score}/${quizData.length} questions . </h2>`
        }
    }

})

