// Get elements and assign them to variables for different containers

var startScreen = document.getElementById("start-container");
var finishScreen = document.getElementById("finish-container");
var scoreScreen = document.getElementById("score-container");

// These variables represent the containers for each separate set of questions.

var quizScreen1 = document.getElementById("question-container1");
var quizScreen2 = document.getElementById("question-container2");
var quizScreen3 = document.getElementById("question-container3");
var quizScreen4 = document.getElementById("question-container4");
var quizScreen5 = document.getElementById("question-container5");

// Hide the finish screen, the high-score screen, and the screens for the questions.

finishScreen.style.display = "none";
scoreScreen.style.display = "none";

quizScreen1.style.display = "none";
quizScreen2.style.display = "none";
quizScreen3.style.display = "none";
quizScreen4.style.display = "none";
quizScreen5.style.display = "none";

// Variables for controlling correct and incorrect answers in the quiz.

var answer;
var correctAnswer;
var wrongAnswer;

function correctFunction(){
    answer = true;
}

function wrongFunction(){
    answer = false;
}

// Function to start quiz, start timer, and switch to first question screen.

function startFunction() {
    startScreen.style.display = "none";
    quizScreen1.style.display = "block";
  }

// Function to advance to next question and log score.

function nextFunction1() {
    quizScreen1.style.display = "none";
    quizScreen2.style.display = "block";
}

function nextFunction2() {
    quizScreen2.style.display = "none";
    quizScreen3.style.display = "block";
}

function nextFunction3() {
    quizScreen3.style.display = "none";
    quizScreen4.style.display = "block";
}

function nextFunction4() {
    quizScreen4.style.display = "none";
    quizScreen5.style.display = "block";
}

function nextFunction5() {
    quizScreen5.style.display = "none";
    finishScreen.style.display = "block";
}

function nextFunction6() {
    finishScreen.style.display = "none";
    scoreScreen.style.displat = "block";
}
