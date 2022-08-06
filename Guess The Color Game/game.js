let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let gameStarted = false;
let level = 0;


var buttonId = gamePattern[0];

console.log(buttonId);


$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  console.log(gamePattern);
  console.log(userClickedPattern);
  let correctAnswer = checkAnswer(userClickedPattern.length - 1);

  if (userClickedPattern.length === gamePattern.length) {
    if (correctAnswer === true) {
      setTimeout(() => nextSequence(), 1000);
      userClickedPattern = [];
    }
  }
});



// Functions

function nextSequence() {

  var randomChosenColour = buttonColours[Math.floor(Math.random() * 4)];
  gamePattern.push(randomChosenColour);
  flashButton(randomChosenColour);

  level++;
  $("h1").text(`Level ${level}`);
}


function flashButton(colorName) {
  $("." + colorName).fadeOut();
  $("." + colorName).fadeIn();
}

function playAudio(colorName) {

  switch (colorName) {
    case "red":
      var red = new Audio('sounds/red.mp3');
      red.play();
      break;

    case "green":
      var green = new Audio('sounds/green.mp3');
      green.play();
      break;

    case "blue":
      var blue = new Audio('sounds/blue.mp3');
      blue.play();
      break;

    case "yellow":
      var yellow = new Audio('sounds/yellow.mp3');
      yellow.play();
      break;
  }
}


function animatePress(currentColor) {
  $("." + currentColor).addClass("pressed");

  setTimeout(() => $("." + currentColor).removeClass("pressed"),
    100);
}

$(document).keypress(function() {
  if (!gameStarted) {
    nextSequence();
    gameStarted = true;
    console.log("Game has star-ed");
  }

});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("A match!");
    playAudio(userClickedPattern[currentLevel]);
    animatePress(userClickedPattern[currentLevel]);
    return true;
  } else {
    console.log("Wrong!");
    var wrong = new Audio('sounds/wrong.mp3');
    wrong.play();
    $("body").addClass("game-over");
    setTimeout(() => $("body").removeClass("game-over"), 200);
    $("h1").text(`Game Over, Press Any Key to Restart the Challenge`);
    return startOver();
  }
}

function startOver() {
  gameStarted = false;
  userClickedPattern = [];
  gamePattern = [];
  level = 0;
  return false;
}