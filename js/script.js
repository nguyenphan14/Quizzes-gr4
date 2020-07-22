const newUser = document.querySelector('.login_sign_up > span');

function checkUser(userName) {
    for(let user of userData) {
        if(userName === user.userName) {
            alert(`${userName} was in used. Try again!`);
            return true;
        }
    }
    return false;
}
/* Chưa xong */
function addUser() {
    const userName = document.querySelector('.login_acc > input');
    const password = document.querySelector('.login_pwd > input');
    const subBtn = document.querySelector('.login_button');
    subBtn.addEventListener('click', () => {
        while(checkUser(userName) === true) {
            checkUser(userName);
            userName = document.querySelector('.login_acc > input');
        }
        userData.push({
            userName: userName.value,
            password: password.value,
            subject: []
        })
    })
    console.log(userData);

}

newUser.addEventListener('click', () => {
    document.querySelector('.login_label > h1').innerHTML = 'Sign Up';
})

/* Game play */
/* Choose Subject from Game Home */
const basicQuizz = document.getElementsByClassName('quizz_subject_item');
let subjectChosen = null;
function chooseSubject() {
    for(let i = 0; i < basicQuizz.length; i++) {
        basicQuizz[i].addEventListener('click', () => {
            subjectChosen = basicQuizz[i].innerHTML;
            document.querySelector('#game').style.display = "none";
            document.querySelector('#game_play').style.display = "flex";
        })
    }
}
chooseSubject();


/* Create a package of quizzes */
function createQuizzPack(subject, numberOfQuizzes) {
    let quizzes = [];
    let newArray = shuffleArray(findSubject(subject).quizzes);
    for(let i = 0; i < numberOfQuizzes; i++) {
        quizzes.push(newArray[i]);
    }
    return quizzes;
}

/* Find Subject in quizzData */
function findSubject(subjectName) {
    return quizzData.find((subject) => {
            return subject.name.toLowerCase() == subjectName.toLowerCase();
    })
}

/* Shuffle an Array */
function shuffleArray(arr) {
    let currentIndex = arr.length, randomIndex, temporaryValue;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
    }
    return arr;
}

/* Start click */
const startBtn = document.querySelector('.game_start');
startBtn.addEventListener('click', () => {
    document.querySelector('.modal_overlay').style.display = 'none';
    startGame('Math', 10);
})

/* Show quizz in game play */
const question = document.querySelector('.quizz_question');
const answers = document.querySelectorAll('.quizz_answer > span');
function showQuizz(quizz) {
    question.textContent = quizz.question;
    let shuffleAnswers = shuffleArray(quizz.answer);
    for(let i = 0; i < 4; i++) {
        answers[i].textContent = shuffleAnswers[i];
    }
}


/* Game timer */
function startTimer(time) {
    let freeSpace = 100/(time/0.01);
    let sumSpace = freeSpace;
    let runTimer = setInterval(() => {
        document.querySelector('.game_timer').style.width = `${100-freeSpace}%`;
        
        freeSpace += sumSpace;
    }, 10);
    if(freeSpace > 100) {
        clearInterval(runTimer);
    }
}
    
/* Main */
function startGame(subject, time) {
    let mainSubject = findSubject(subject);
    for(let quizz of createQuizzPack(subject, 10)) {
        showQuizz(quizz);
        startTimer(time);
        console.log(chooseAnswer(mainSubject.answer, mainSubject.trueAnswer))
        
    }
}

function chooseAnswer(answers, trueAns) {
    for(let i = 0; i < 4; i++) {
        answers[i].addEventListener('click', () => {
            if(answers[i] === trueAns) {
                console.log(true);
            } else {
                console.log(false);
            }
        })
    }
}   
