// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// Variables:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
var mainElem = document.getElementById("main-content");
var currentIndex = 0;
var quizQuestions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
      },
      {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
      }
      ///etc.
    ];


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// Main Program: 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
pageLoad();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// Functions: 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
function pageLoad() {
    var startBtn = document.createElement("a");
    startBtn.setAttribute("class", "waves-effect waves-light btn");
    startBtn.textContent = "Start Code Quiz";
    mainElem.appendChild(startBtn);
    startBtn.addEventListener("click", function (event) {
        event.preventDefault();
        rotateQuestions();
});
}

function rotateQuestions() {
  var currentQuestion = quizQuestions[currentIndex];
  if (currentQuestion) {
    var intervalId = startTimer[currentIndex];
    buildQuestions(currentQuestion, true, intervalId);
    currentIndex++;
  } else {
    endGame();
  }
}

function startTimer(card) {
  var time = 15;
  var intervalId = setInterval(function () {
      time--;
      var timeDisplay = document.getElementById("timer-countdown");
      if (timeDisplay) {
          timeDisplay.textContent = time;
      }
      if (time === 0) {
          buildCard(card, false, null, true);
          clearInterval(intervalId);
      }
  }, 1000);
  return intervalId;
}
