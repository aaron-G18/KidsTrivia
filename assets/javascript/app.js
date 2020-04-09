// Questions:

/// An array of questions, and each question is an object with same formats. (colapsed)
var questionsMaster = [{
    question: "In Star Wars: The Rise of Skywalker, who continues to train Rey in the ways of the Jedi after Luke Skywalker is dead?",
    answers: ["Barris Offre", "Leia Organa", "Plo Koon", "Kylo Ren"],
    correctAnswer: "Leia Organa",
    correctImage: "assets/images/leia.jpg",
    correctText: "Leia Organa"
  },
  {
    question: "In Star Wars: The Rise of Skywalker, who does Kylo Ren find alive on the uncharted planet of Exegol?",
    answers: ["Snoke", "Han Solo", "Luke Skywalker", "Emperor Palpatine"],
    correctAnswer: "Emperor Palpatine",
    correctImage: "assets/images/palpatine.jpg",
    correctText: "Emperor Palpatine"
  },
  {
    question: "In Star Wars: The Rise of Skywalker, what color is Rey’s new lightsaber?",
    answers: ["Pink", "Red", "Yellow", "Green"],
    correctAnswer: "Yellow",
    correctImage: "assets/images/yellow-ls.png",
    correctText: "Yellow"
  },
  {
    question: "",
    answers: ["", "", "", ""],
    correctAnswer: "",
    correctImage: "assets/images/Jon-Snow.jpg",
    correctText: ""
  },
  {
    question: "",
    answers: ["", "", "", ""],
    correctAnswer: "",
    correctImage: "assets/images/Jon-Snow.jpg",
    correctText: ""
  },
  {
    question: "",
    answers: ["", "", "", ""],
    correctAnswer: "",
    correctImage: "assets/images/Jon-Snow.jpg",
    correctText: ""
  },
  {
    question: "",
    answers: ["", "", "", ""],
    correctAnswer: "",
    correctImage: "assets/images/Jon-Snow.jpg",
    correctText: ""
  },
  {
    question: "",
    answers: ["", "", "", ""],
    correctAnswer: "",
    correctImage: "assets/images/Jon-Snow.jpg",
    correctText: ""
  },
  {
    question: "",
    answers: ["", "", "", ""],
    correctAnswer: "",
    correctImage: "assets/images/Jon-Snow.jpg",
    correctText: ""
  },
  {
    question: "",
    answers: ["", "", "", ""],
    correctAnswer: "",
    correctImage: "assets/images/Jon-Snow.jpg",
    correctText: ""
  },
  {
    question: "",
    answers: ["", "", "", ""],
    correctAnswer: "",
    correctImage: "assets/images/Jon-Snow.jpg",
    correctText: ""
  },
  {
    question: "",
    answers: ["", "", "", ""],
    correctAnswer: "",
    correctImage: "assets/images/Jon-Snow.jpg",
    correctText: ""
  },
  {
    question: "",
    answers: ["", "", "", ""],
    correctAnswer: "",
    correctImage: "assets/images/Jon-Snow.jpg",
    correctText: ""
  },

];

var playAgainButtonHTML =
  "<div class='replay-button'><button id='playagain'>Play Again</button></div>";
var questionsPlaying;
var currentCorrAnswer;
var currentCorrImage;
var currentCorrText;
var gotItRight = "Correct!";
var gotItWrong = "Incorrect!";
var outOfTime = "Times up!";
var questionsLeftMaster = 20;
var questionsLeft;
var correcAnswerCount = 0;
var incorrectAnswerCount = 0;
var masterTimerAmount = 20;
var timerAmount;
var masterAnswerTimerAmount = 3;
var answerTimerAmount;
var interval;
var audio = new Audio(
  "https://www.televisiontunes.com/uploads/audio/Game%20of%20Thrones.mp3"
);

//////  Functions   //////

// Function to run countdown timer for question and possible answers
function runTimer() {
  timerAmount = masterTimerAmount;
  $(".timer").html(timerAmount);
  clearInterval(interval);
  interval = setInterval(decrement, 1000);
}

// Function for countdown timer of displayed question and possible answers.
function decrement() {
  timerAmount--;
  $(".timer").html(timerAmount);
  if (timerAmount === 0) {
    stopTimer();
    $(".timer").empty();
    incorrectAnswerCount++;
    console.log("That is WRONG!");
    $(".question").empty();
    $(".answers").empty();
    displayCorrImage();
    displayCorrText();
    $(".timer").html(outOfTime);
    runDisplayTimer();
  }
}

// Function to run countdown timer for displayed correct answer and message.
function runDisplayTimer() {
  answerTimerAmount = masterAnswerTimerAmount;
  clearInterval(interval);
  interval = setInterval(decrementDisplay, 1000);
}

// Function to for countdown of displayed correct answer and message.
function decrementDisplay() {
  answerTimerAmount--;
  if (answerTimerAmount === 0 && questionsLeft > 0) {
    stopTimer();
    console.log("display timer up!");
    $(".timer").html(answerTimerAmount);
    runTimer();
    clearDisplay();
    question(0);
    questionsPlaying.splice(0, 1);
    questionsLeft--;
    $(".qa-container").css({
      "box-shadow": "unset",
      width: "50%"
    });
    console.log("questions left " + questionsLeft);
  } else if (answerTimerAmount === 0 && questionsLeft === 0) {
    clearDisplay();
    $(".timer").empty();
    clearInterval(interval);
    $(".qa-container").css({
      "box-shadow": "unset",
      width: "50%"
    });
    console.log("out of questions");
    console.log("correct: " + correcAnswerCount);
    console.log("incorrect: " + incorrectAnswerCount);
    $(".question").html(
      "<p>Correct answers: " +
      correcAnswerCount +
      "</p>" +
      "<p>Incorrect answers: " +
      incorrectAnswerCount +
      "</p>"
    );
    $(".answers").html(playAgainButtonHTML);
  }
}

// Function to stop the timers
function stopTimer() {
  clearInterval(interval);
}

// Function to play GOT theme song when you click play.
function playAudio() {
  audio.loop = true;
  audio.play();
}

// function to "shuffle" the array of questions.
function makeNewArray() {
  questionsLeft = questionsLeftMaster;
  questionsPlaying = Array.from(questionsMaster);
  questionsPlaying.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  questionsPlaying = questionsPlaying;
}

// function to display answers for the current question.
function displayAnswers(item, index) {
  $(".answers").append("<div class='ans " + index + "'>" + item + "</div>");
}

// function to pick a question from the array of questions.
function question(x) {
  $(".question").html(questionsPlaying[x].question);
  $(".answers").empty();
  questionsPlaying[x].answers.forEach(displayAnswers);
  currentCorrAnswer = questionsPlaying[x].correctAnswer;
  currentCorrImage = questionsPlaying[x].correctImage;
  currentCorrText = questionsPlaying[x].correctText;
}

// function to set the logo.
function setLogo() {
  $("#logo").attr("src", "assets/images/GOT_transparent_logo_small.png");
}

// function to diplay correct image.
function displayCorrImage() {
  $(".question").empty();
  $(".answers").empty();
  // $(".qa-container").css("background-image", "url(" + currentCorrImage + ")");
  $(".qa-container").css({
    "background-image": "url(" + currentCorrImage + ")",
    "box-shadow": "8px 8px 4px black",
    width: "300px"
  });
}

// Function to clear the display in the qa-container.
function clearDisplay() {
  $(".question").empty();
  $(".answers").empty();
  $(".qa-container").css("background-image", "");
}

// function to display "Correct" in place of timer.
function displayCorrText() {
  $(".answers").empty();
  $(".answers").html(currentCorrText);
}

/////// the game "nuts and bolts."  ////////////

setLogo();

// On click "play" button to start game.
$(".button").on("click", "#start", function () {
  makeNewArray();
  $("#logo").css("width", "30%");
  $(".GOT-logo").css("height", "200px");
  $(".qa-container").css("visibility", "unset");
  $("#logo").attr("src", "");
  $("#logo").attr("src", "assets/images/GOT_transparent_logo_small.png");
  $(".button").css("display", "none");
  $(".timer").html(timerAmount);
  runTimer();
  // playAudio();
  question(0);
  questionsPlaying.splice(0, 1);
  questionsLeft--;
  console.log("questions left " + questionsLeft);
});

// On click for 1st possible answer.
$(".answers").on("click", ".0", function () {
  var clickedHTML = $(this).html();
  console.log(clickedHTML);
  if (clickedHTML === currentCorrAnswer) {
    correcAnswerCount++;
    console.log("answer is correct!");
    stopTimer();
    $(".timer").empty();
    displayCorrImage();
    displayCorrText();
    $(".timer").html(gotItRight);
    runDisplayTimer();
  } else {
    incorrectAnswerCount++;
    console.log("That is WRONG!");
    stopTimer();
    $(".timer").empty();
    $(".question").empty();
    $(".answers").empty();
    displayCorrImage();
    displayCorrText();
    $(".timer").html(gotItWrong);
    runDisplayTimer();
  }
});

// On click for 2nd possible answer.
$(".answers").on("click", ".1", function () {
  var clickedHTML = $(this).html();
  console.log(clickedHTML);
  if (clickedHTML === currentCorrAnswer) {
    correcAnswerCount++;
    console.log("answer is correct!");
    stopTimer();
    $(".timer").empty();
    displayCorrImage();
    displayCorrText();
    $(".timer").html(gotItRight);
    runDisplayTimer();
  } else {
    incorrectAnswerCount++;
    console.log("That is WRONG!");
    stopTimer();
    $(".timer").empty();
    $(".question").empty();
    $(".answers").empty();
    displayCorrImage();
    displayCorrText();
    $(".timer").html(gotItWrong);
    runDisplayTimer();
  }
});

// On click for 3rd possible answer.
$(".answers").on("click", ".2", function () {
  var clickedHTML = $(this).html();
  console.log(clickedHTML);
  if (clickedHTML === currentCorrAnswer) {
    correcAnswerCount++;
    console.log("answer is correct!");
    stopTimer();
    $(".timer").empty();
    displayCorrImage();
    displayCorrText();
    $(".timer").html(gotItRight);
    runDisplayTimer();
  } else {
    incorrectAnswerCount++;
    console.log("That is WRONG!");
    stopTimer();
    $(".timer").empty();
    $(".question").empty();
    $(".answers").empty();
    displayCorrImage();
    displayCorrText();
    $(".timer").html(gotItWrong);
    runDisplayTimer();
  }
});

// On click for 4th possible answer.
$(".answers").on("click", ".3", function () {
  var clickedHTML = $(this).html();
  console.log(clickedHTML);
  if (clickedHTML === currentCorrAnswer) {
    correcAnswerCount++;
    console.log("answer is correct!");
    stopTimer();
    $(".timer").empty();
    displayCorrImage();
    displayCorrText();
    $(".timer").html(gotItRight);
    runDisplayTimer();
  } else {
    incorrectAnswerCount++;
    console.log("That is WRONG!");
    stopTimer();
    $(".timer").empty();
    $(".question").empty();
    $(".answers").empty();
    displayCorrImage();
    displayCorrText();
    $(".timer").html(gotItWrong);
    runDisplayTimer();
  }
});

// On click for Play Again button after end of game.
$(".answers").on("click", "#playagain", function () {
  makeNewArray();
  $(".replay-button").css("display", "none");
  $(".timer").html(timerAmount);
  runTimer();
  playAudio();
  question(0);
  questionsPlaying.splice(0, 1);
  questionsLeft--;
});