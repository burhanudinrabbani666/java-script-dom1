## Implement Logic

We can aslo implement logic to showing what we want

```js
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
    document.querySelector(".message").textContent = "💥 Your Lose the game !!";
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
    document.querySelector(".message").textContent = "💥 Your Lose the game !!";
    document.querySelector(".score").textContent = 0;
  }
}
```

[Next: Manipulating CSS](./05-manipulating-css.md)
