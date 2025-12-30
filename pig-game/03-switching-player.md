## Switching Player

we need to have variables that we can change to determine which players play

```js
let activePlayer = 0;

//....
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
```

The toggle() function in Javascript adds a class to an element if that class is not already associated with that element. And if the class is already associated with that element, then that class is removed from that element.

[Next: Holding the current score](./04-holding-current-score.md)
