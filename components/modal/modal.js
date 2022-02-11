const overlay = document.querySelector(".overlay");
const modalAction = document.querySelectorAll(".modal__action");
const modal = document.querySelectorAll(".modal");
const openSimplemodal = document.querySelector(".open-simple-modal");

const simplemodal = document.querySelector(".simple-modal");

openSimplemodal.addEventListener("click", () => {
  simplemodal.classList.remove("hide");
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
