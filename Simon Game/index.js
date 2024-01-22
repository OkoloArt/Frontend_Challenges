var getButtons = $(".btn");
var randomChoice = [];
var userChoice = [];
var title = $("#level-title");
var numberOfLevel = 1;
var shouldProceedToNextLevel;
var bodyColor = $("body");
var gameStarted;

function startGame() {
  userChoice = [];
  addAnimation();
}

function continuePlaying() {
  numberOfLevel++;
  title.text("Level " + numberOfLevel + " !");
  setTimeout(startGame, 1000);
}

function addAnimation() {
  var randomNumber = generateRandomNumberForColor();
  var activeButton = getButtons[randomNumber];
  var id = $(activeButton).attr("id");
  $(activeButton).addClass("pressed");
  playAudio(id);
  randomChoice.push(randomNumber);
  setTimeout(() => {
    $(activeButton).removeClass("pressed");
  }, 100);

  setTimeout(() => {
    setClick();
  }, randomChoice.length * 1000);
}

function generateRandomNumberForColor() {
  return Math.floor(Math.random() * 4);
}

function getUserButtonClick(activeButton) {
  var id = $(activeButton).attr("id");

  $(activeButton)
    .off("click")
    .on("click", () => {
      playAudio(id);
      userChoice.push(getButtons.index(activeButton));

      // Trigger the animation when the button is clicked
      $(activeButton).addClass("pressed");

      setTimeout(() => {
        $(activeButton).removeClass("pressed");
      }, 100);

      if (userChoice.length === randomChoice.length) {
        if (arraysMatch(randomChoice, userChoice)) {
          continuePlaying();
        } else {
          console.log("false");
          gameOver();
        }
      }
    });
}

function playAudio(color) {
  var audio;

  switch (color) {
    case "blue":
      audio = new Audio("./sounds/blue.mp3");
      break;
    case "red":
      audio = new Audio("./sounds/red.mp3");
      break;
    case "green":
      audio = new Audio("./sounds/green.mp3");
      break;
    case "green":
      audio = new Audio("./sounds/yellow.mp3");
      break;
    default:
      audio = new Audio("./sounds/wrong.mp3");
      break;
  }

  audio.play(); // Corrected this line
}

function gameOver() {
  bodyColor.addClass("game-over");
  playAudio("wrong");
  title.text("Game Over! Press A Key to Restart");
  //   setTimeout(() => {

  //   }, 1000);

  // Reset game variables
  randomChoice.length = 0;
  userChoice.length = 0;
  numberOfLevel = 1;
  gameStarted = false;
}

function arraysMatch(arr1, arr2) {
  // If lengths are different, arrays cannot match
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Iterate through each element and check for equality
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  // If we reach this point, arrays didn't match
  return true;
}

function setClick() {
  for (let index = 0; index < getButtons.length; index++) {
    var activeButton = getButtons[index];
    getUserButtonClick(activeButton);
  }
}

$(document).on("keypress", () => {
  if (!gameStarted) {
    bodyColor.removeClass("game-over");
    gameStarted = true;
    title.text("Level " + numberOfLevel);
    startGame();
  }
});
