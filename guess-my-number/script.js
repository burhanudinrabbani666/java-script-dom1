"use strict";
/*
// Set content inside html
document.querySelector(".message").textContent = "Correct Number! 🥳";

document.querySelector(".number").textContent = "69";
document.querySelector(".score").textContent = "66";

// Get Value
document.querySelector(".guess").value = 123;
console.log(document.querySelector(".guess").value);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".score").textContent = score;
document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const valueIput = Number(document.querySelector(".guess").value); // string

  // Validating Input
  if (!valueIput) {
    document.querySelector(".message").textContent = "No number !!";

    setTimeout(() => {
      document.querySelector(".message").textContent = "Start guessing...";
      return;
    }, 3000);

    return;
  }

  // Correct Number
  if (valueIput === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!!";
    score = 20;
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#";
  }

  // Number too Low
  if (valueIput < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low";
      score -= 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "💥 Your Lose the game !!";
      document.querySelector(".score").textContent = 0;
    }
  }

  // Number too high
  if (valueIput > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High";
      score -= 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "💥 Your Lose the game !!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
