"use strict";

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

// Open Modal
for (let index = 0; index < btnsOpenModal.length; index++) {
  btnsOpenModal[index].addEventListener("click", openModal);
}

// Close Modal
btnCloseModal.addEventListener("click", hideModal);
overlay.addEventListener("click", hideModal);

// Listen to keyboard
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.classList.contains(".hidden"))
    return hideModal();
});
