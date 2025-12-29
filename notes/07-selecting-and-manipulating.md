## Selecting and manipulating

We can set the HTML value from JavaScript by taking the element first and then changing the value.

```js
document.querySelector(".message").textContent = "Correct Number! 🥳";

document.querySelector(".number").textContent = "69";
document.querySelector(".score").textContent = "66";

// Get Value
document.querySelector(".guess").value = 123;
console.log(document.querySelector(".guess").value);
```

[Next: Handling Click Event](./03-handling-click-event.md)
