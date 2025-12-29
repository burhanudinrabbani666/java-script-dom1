"use strict";
// Function
function renderMessage(message) {
  document.querySelector(".message").textContent = `${message}`;
}

function renderScore(score) {
  document.querySelector(".score").textContent = score;
}

function renderNumber(number) {
  document.querySelector(".number").textContent = number;
}

function setCSS(color, width) {
  document.querySelector("body").style.backgroundColor = color;
  document.querySelector(".number").style.width = width;
}

function initialSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

const INITIAL_SCORE = 20;

// Storing Initia Value
let secretNumber = initialSecretNumber();
let score = INITIAL_SCORE;
let highScore = 0;

// DOM Manipulation
renderScore(score);

document.querySelector(".check").addEventListener("click", function () {
  const valueIput = Number(document.querySelector(".guess").value); // string

  // Validating Input
  if (!valueIput) {
    renderMessage("No Number");
    score -= 1;
    renderScore(score);
    if (score < 0) {
      renderMessage("💥 You Lose!! Input the number");
      renderScore(0);
      score = 20;

      setTimeout(() => {
        renderMessage("Start guessing again !!!");
        renderScore(score);

        return;
      }, 3000);
    }

    return;
  }

  // Correct Number
  if (valueIput === secretNumber) {
    renderMessage("🎉 Correct Number!!");
    renderNumber(secretNumber);
    setCSS("#60b347", "30rem");

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }

  // Check Value
  if (valueIput !== secretNumber) {
    if (score > 1) {
      renderMessage(
        valueIput < secretNumber ? "📉 Too low !!" : "📈 Too high !!"
      );
      score -= 1;
      renderScore(score);

      return;
    }

    renderMessage("💥 Your Lose the game !!");
    renderScore(0);
  }
});

document.querySelector(".again").addEventListener("click", function () {
  // Initial Value
  score = INITIAL_SCORE;
  secretNumber = initialSecretNumber();

  // Initial UI
  document.querySelector(".guess").value = "";
  renderScore(score);
  renderNumber("?");
  renderMessage("Start guessing...");

  // Reset CSS
  setCSS("#222", "15rem");
});
