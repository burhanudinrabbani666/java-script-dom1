"use strict";
/*
// Set content inside html
document.querySelector(".message").textContent = "Correct Number! 🥳";

document.querySelector(".number").textContent = "69";
document.querySelector(".score").textContent = "66";

// Get Value
document.querySelector(".guess").value = 123;
console.log(document.querySelector(".guess").value);
*/

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
