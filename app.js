"use strict";

let number = Math.trunc(Math.random() * 30 + 1);

const revealNum = document.querySelector(".number");

let score = 30;
let highscore = 0;

function displayMessage(content) {
  document.querySelector(".start").textContent = content;
}

document.querySelector(".btn3").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("No input");
  } else if (guess === number) {
    revealNum.textContent = number;
    displayMessage("That's right lad! You finally did it");
    document.querySelector(".body").style.backgroundImage =
      "url(images/8533430.jpg)";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(
        guess > number
          ? "Guess too high lad! Try again"
          : "Guess too low lad! Try again"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("Game Over!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".btn2").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 30 + 1);
  displayMessage("Yo! Let's Go...");
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".body").style.backgroundColor = "rgb(10, 16, 74)";
  document.querySelector(".body").style.backgroundImage = "";
});
