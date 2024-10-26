let menuIcon = document.querySelector(".menu-icon");
let menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
