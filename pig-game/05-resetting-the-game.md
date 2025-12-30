## Reseting The Game

```js
newDiceEl.addEventListener("click", () => {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove(`player--winner`);

  // Reset variable
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score = [0, 0];

  // Reset Field
  player0El.classList.add("player--active");

  score0El.textContent = currentScore;
  score1El.textContent = currentScore;
  current0El.textContent = currentScore;
  current1El.textContent = currentScore;
  diceEl.classList.add("hidden");
});
```
