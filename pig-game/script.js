"use strict";

const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const rollDiceEl = document.querySelector(".btn--roll");
const newDiceEl = document.querySelector(".btn--new");
const holdDiceEl = document.querySelector(".btn--hold");
const diceEl = document.querySelector(".dice");

// Set Initial Score
let currentScore = 0;
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

// Rolling Dice
rollDiceEl.addEventListener("click", () => {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // Check classlist
  if (diceEl.classList.contains("hidden")) diceEl.classList.remove("hidden");

  // Rendering dice Image
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    current0El.textContent = currentScore;

    return;
  }
});
