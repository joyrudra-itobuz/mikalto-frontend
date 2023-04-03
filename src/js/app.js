import "../scss/app.scss";
import "bootstrap/scss/bootstrap.scss";

/* JS imports */
import "./form-operations";
import "./get-card-data";
import "./get-form-date";
import "./get-bg-images";

//Nav Controller

console.log("Starts Main");

const menuBtn = document.querySelector(".menu-trigger-btn");
const menuContainer = document.querySelector(".menu-container");
const menuCollapseBtn = document.querySelector(".menu-collapse-btn");

menuBtn.addEventListener("click", () => {
  menuContainer.classList.toggle("menu-closing-animation");
  menuContainer.classList.toggle("d-none");
  menuContainer.classList.toggle("menu-openning-animation");
});

menuCollapseBtn.addEventListener("click", () => {
  menuContainer.classList.toggle("menu-openning-animation");
  menuContainer.classList.toggle("menu-closing-animation");
  setTimeout(() => {
    menuContainer.classList.toggle("d-none");
  }, 500);
});

//Swiper

const swiper = new Swiper(".room-category-swiper", {
  cssMode: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewheel: true,
  keyboard: true,
});
