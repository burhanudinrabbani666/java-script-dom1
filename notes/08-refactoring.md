## Refactoring

make everything the same to be a reusable function

```js
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
```

[Next Project: Modal Window](../modal-window/01-wowrking-with-classes.md)
