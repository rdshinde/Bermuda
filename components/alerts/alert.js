const dismissBtns = document.querySelectorAll(".alert__dismiss-btn");

dismissBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.remove();
  });
});
