"use strict";

const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const rollDiceEl = document.querySelector(".btn--roll");
const newDiceEl = document.querySelector(".btn--new");
const holdDiceEl = document.querySelector(".btn--hold");
const diceEl = document.querySelector(".dice");

// Set Initial Score
const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

// Rolling Dice
rollDiceEl.addEventListener("click", () => {
  const dice = Math.trunc(Math.random() * 6) + 1;

  // Rendering dice Image
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Reset score first
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    // Switch Player
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;

    // Change CSS
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
  }
});
