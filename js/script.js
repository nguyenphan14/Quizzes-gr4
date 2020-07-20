let newUser = document.querySelector('.login_sign_up > span');

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
    let userName = document.querySelector('.login_acc > input');
    let password = document.querySelector('.login_pwd > input');
    let subBtn = document.querySelector('.login_button');
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
let basicQuizz = document.getElementsByClassName('quizz_subject_item');
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
            return subject.name == subjectName;
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

/* Show quizz in game play */
function showQuizz(quizz) {
    let question = document.querySelector('.quizz_question');
    let answers = document.querySelectorAll('.quizz_answer > span');
    question.textContent = quizz.question;

    let shuffleAnswers = shuffleArray(quizz.answer);
    for(let i = 0; i < 4; i++) {
        answers[i].textContent = shuffleAnswers[i];
    }
}



