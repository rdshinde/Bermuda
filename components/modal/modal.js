const overlay = document.querySelector(".overlay");
const modalAction = document.querySelectorAll(".modal__action");
const modal = document.querySelectorAll(".modal");
const openSimpleModal = document.querySelector(".open-simple-modal");

const simpleModal = document.querySelector(".simple-modal");

openSimpleModal.addEventListener("click", () => {
  simpleModal.classList.remove("hide");
  overlay.classList.remove("hide");
});
modalAction.forEach((btn) => {
  btn.addEventListener("click", () => {
    overlay.classList.add("hide");
    modal.forEach((ele) => {
      ele.classList.add("hide");
    });
  });
});
