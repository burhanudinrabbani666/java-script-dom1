## Holding Current score

To stop the game, we need a state containing a boolean. This is so that when one of the players wins, all systems can be turned off.

```js
let playing = true;

//

holdDiceEl.addEventListener("click", () => {
  if (playing) {
    // 1) add current score to active player
    score[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    // 2) check if playerscore is >= 100
    if (score[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add("hidden");

      // 3) finish game
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
    }

    // 4) switch player
    switchPlayer();
  }
});
```

[Next: Reseting the game](./05-resetting-the-game.md)
