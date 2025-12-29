## Rolling the dices

we can manipulate the src

```js
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
```

[Next: Switching Player](./03-switching-player.md)
