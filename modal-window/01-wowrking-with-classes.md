## Working Witch class

you can remove class css name in html from javascript

```js
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// Function
function hideModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

// DOM Manipulation
for (let index = 0; index < btnsOpenModal.length; index++) {
  btnsOpenModal[index].addEventListener("click", openModal);
}

// Close Modal
btnCloseModal.addEventListener("click", hideModal);
overlay.addEventListener("click", hideModal);
```

[Next: Handling esc](./02-handling-esc.md)
