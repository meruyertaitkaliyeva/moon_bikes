let headerMain = document.querySelector(".header");
let navMain = document.querySelector(".header__navigation");
let navToggle = document.querySelector(".header__toggle");

headerMain.classList.remove("header--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("header__navigation--closed")) {
    navMain.classList.remove("header__navigation--closed");
    navMain.classList.add("header__navigation--opened");
  } else {
    navMain.classList.add("header__navigation--closed");
    navMain.classList.remove("header__navigation--opened");
  }
});
