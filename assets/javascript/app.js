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
    question: "In Star Wars: The Rise of Skywalker, what does Rey say her last name is at the end of the movie?",
    answers: ["Skywalker", "Palpatine", "Organa", "Solo"],
    correctAnswer: "Skywalker",
    correctImage: "assets/images/yellow-ls.png",
    correctText: "Skywalker"
  },
  {
    question: "In Star Wars: The Rise of Skywalker, whose lightsaber does Luke’s spirit give to Rey?",
    answers: ["Yoda’s", "Leia’s", "Ben’s", "Obi-Wan’s"],
    correctAnswer: "Leia’s",
    correctImage: "assets/images/light-saber.png",
    correctText: "Leia’s"
  },
  {
    question: "In Star Wars: The Rise of Skywalker, who kills Palpatine?",
    answers: ["Finn", "Rey", "Ben", "Poe"],
    correctAnswer: "Rey",
    correctImage: "assets/images/rey2.jpg",
    correctText: "Rey"
  },
  {
    question: "In Star Wars: The Rise of Skywalker, what is the name of the devices that are used to find the hidden planet of Exegol?",
    answers: ["Trailblazers", "Coursefinders", "Pathfinders", "Wayfinders"],
    correctAnswer: "Wayfinders",
    correctImage: "assets/images/wayfinder.jpeg",
    correctText: "Wayfinders"
  },
  {
    question: "In Diary of a Wimpy Kid, at the beginning of the movie what prank did Rodrick pull on Greg?",
    answers: ["Put chewed up bubblegum in all of his shoes", "Tied his shoelaces together under the table", "Convinced him he was very late for his first day of school", "Told him he won the lottery"],
    correctAnswer: "Convinced him he was very late for his first day of school",
    correctImage: "assets/images/greg.jpg",
    correctText: "Late for first day"
  },
  {
    question: "In Diary of a Wimpy Kid, what activity did Greg first sign up for, in an attempt to become popular in middle school?",
    answers: ["Wrestling", "Debate Team", "Football", "Soccer"],
    correctAnswer: "Wrestling",
    correctImage: "assets/images/wrestling.jpg",
    correctText: "Wrestling"
  },
  {
    question: "In Diary of a Wimpy Kid, what was the name of Rodrick's band?",
    answers: ["The Gremlins", "Rodrick’s Rockers", "The Kids on the Block", "Loded Diper"],
    correctAnswer: "Loded Diper",
    correctImage: "assets/images/rock.jpg",
    correctText: "Loded Diper"
  },
  {
    question: "In Diary of a Wimpy Kid, what did Greg's father do on Halloween?",
    answers: ["Stole candy from the neighborhood kids", "Guarded the house against TP’ers", "Threw a huge halloween party", "Went trick-or-treating with Greg and Rowley"],
    correctAnswer: "Guarded the house against TP’ers",
    correctImage: "assets/images/halloween.jpg",
    correctText: "Guarded the house against TP’ers"
  },
  {
    question: "In Diary of a Wimpy Kid, what did Greg and Rowley have to do as Safety Patrol Officers?",
    answers: ["Pick up garbage in the schoolyard", "Patrol the school bake sale", "Walk the kindergarten students home", "Keep the third graders out of trouble"],
    correctAnswer: "Walk the kindergarten students home",
    correctImage: "assets/images/safety.jpg",
    correctText: "Walk the kindergarten students home"
  },
  {
    question: "In Diary of a Wimpy Kid, during a sleepover at Fregley's house, where did Greg sleep for a while?",
    answers: ["In the bathtub", "In the kitchen", "In the attic", "On the roof"],
    correctAnswer: "In the bathtub",
    correctImage: "assets/images/tub.jpg",
    correctText: "In the bathtub"
  },
  {
    question: "In Diary of a Wimpy Kid,  at auditions for the school play, what song did the director make the kids sing for their audition?",
    answers: ["Born to Be Wild", "Like a Virgin", "We Will Rock You", "Total Eclipse of the Heart"],
    correctAnswer: "Total Eclipse of the Heart",
    correctImage: "assets/images/audition.jpg",
    correctText: "Total Eclipse of the Heart"
  },
  {
    question: "In Diary of a Wimpy Kid, what part did Greg play in the school play, 'The Wizard of Oz'?",
    answers: ["He was Dorothy", "He was a tree", "He was the Scarecrow", "He was a flying monkey"],
    correctAnswer: "He was a tree",
    correctImage: "assets/images/tree.jpg",
    correctText: "He was a tree"
  },
  {
    question: "In Diary of a Wimpy Kid, what nice thing did Greg do for Rowley at the end of the movie, allowing them to become friends again?",
    answers: ["Greg let Rowley have his favorite toy", "Greg let Rowley ride his bike", "Greg told everyone that he was the one who ate the gross cheese", "Greg let Rowley win at video games"],
    correctAnswer: "Greg told everyone that he was the one who ate the gross cheese",
    correctImage: "assets/images/cheese.jpg",
    correctText: "Gross cheese"
  },
  {
    question: "In Frozen, what is the name of the kingdom that Elsa and Anna live in?",
    answers: ["Farendelle", "Brendenville", "Arentown", "Arendelle"],
    correctAnswer: "Arendelle",
    correctImage: "assets/images/arendelle.jpg",
    correctText: "Arendelle"
  },
  {
    question: "In Frozen, what other Disney princess is seen when they open the gates in the song “For The First Time In Forever”?",
    answers: ["Rapunzel", "Cinderella", "Snow White", "Aurora"],
    correctAnswer: "Rapunzel",
    correctImage: "assets/images/rapunzel.jpg",
    correctText: "Rapunzel"
  },
  {
    question: "In Frozen, what is the name of the prince that asks Anna to marry him?",
    answers: ["Prince Franz", "Prince Olaf", "Prince Zander", "Prince Hans"],
    correctAnswer: "Prince Hans",
    correctImage: "assets/images/hans.jpg",
    correctText: "Prince Hans"
  },
  {
    question: "In Frozen, what does Kristoff sell for a living?",
    answers: ["Snowmen", "Sleds", "Ice", "Clothes"],
    correctAnswer: "Ice",
    correctImage: "assets/images/ice.png",
    correctText: "Ice"
  },
  {
    question: "In Frozen, the Anna and Kristoff run into Olaf, what does Olaf say he likes?",
    answers: ["Ice skating", "Snowball fights", "Warm hugs", "Snowflakes"],
    correctAnswer: "Warm hugs",
    correctImage: "assets/images/olaf.jpg",
    correctText: "Warm hugs"
  },
  {
    question: "In Frozen, what is the name of Kristoff’s reindeer?",
    answers: ["Sven", "Steve", "Sorren", "Hans"],
    correctAnswer: "Sven",
    correctImage: "assets/images/sven.jpeg",
    correctText: "Sven"
  },
  {
    question: "In Frozen, what does Anna give to Kristoff for his reindeer to get him to help her?",
    answers: ["Berries", "Carrots", "Apples", "Hay"],
    correctAnswer: "Carrots",
    correctImage: "assets/images/sven.jpeg",
    correctText: "Carrots"
  },
  {
    question: "In Frozen, what is the name of the snowman?",
    answers: ["Olsen", "Oliver", "Olaf", "Oscar"],
    correctAnswer: "Olaf",
    correctImage: "assets/images/olaf.jpg",
    correctText: "Olaf"
  },
  {
    question: "In Playing With Fire, what is the name of the John Cena’s character, referred to as “Supe”?",
    answers: ["Jason Cardly", "Jeff Cardin", "John Carlton", "Jake Carson"],
    correctAnswer: "Jake Carson",
    correctImage: "assets/images/supe.jpeg",
    correctText: "Jake Carson"
  },
  {
    question: "In Playing With Fire, what does Brynn spill all over the driveway to stop the guys from following them when she steals the ATV?",
    answers: ["Oil", "Jello", "Dish soap", "Bacon grease"],
    correctAnswer: "Oil",
    correctImage: "assets/images/brynn.jpg",
    correctText: "Oil"
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
var masterTimerAmount = 30;
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
  $("#logo").empty();
}

// function to display "Correct" in place of timer.
function displayCorrText() {
  $(".answers").empty();

  $("#logo").html(currentCorrText);
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
  question(0);
  questionsPlaying.splice(0, 1);
  questionsLeft--;
});