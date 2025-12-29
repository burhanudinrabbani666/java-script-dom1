# Challenge #1

```js
document.querySelector(".again").addEventListener("click", function () {
  // Initial Value
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Initial UI
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";

  // Reset CSS
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
```

[Next: Implement HighScore](./07-implement-highscores.md)
