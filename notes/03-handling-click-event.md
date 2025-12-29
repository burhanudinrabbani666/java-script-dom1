## Handling Click

Handling click from UI with addEventListener

```js
document.querySelector(".check").addEventListener("click", function () {
  const valueIput = Number(document.querySelector(".guess").value); // string
  console.log(valueIput, typeof valueIput);

  // Validating Input
  if (!valueIput) {
    document.querySelector(".message").textContent = "Input The Number !!";

    setTimeout(() => {
      document.querySelector(".message").textContent = "Start guessing...";

      return;
    }, 3000);
  }
});
```

here I take the value when the button is pressed and change the message when the value of the value is false

[Next: Impelement Logic](./04-implement-logic.md)
