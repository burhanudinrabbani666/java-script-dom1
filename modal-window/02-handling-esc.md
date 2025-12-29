## Handling esc

We can Also get what keyboard is presses

```js
// Listen to keyboard
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.classList.contains(".hidden"))
    return hideModal();
});
```

[Next: Pig Game](../pig-game/01-pig-game.md)
