'use strict';

const headerMain = document.querySelector(".header");
const navMain = document.querySelector(".header__navigation");
const navOpenButton = document.querySelector(".header__button--open");
const navCloseButton = document.querySelector(".header__button--close");
const targetElement = document.querySelector(".header__navigation--opened");

headerMain.classList.remove("header--nojs");

navOpenButton.addEventListener("click", function() {
  if (navMain.classList.contains("header__navigation--closed")) {
    navMain.classList.remove("header__navigation--closed");
    navMain.classList.add("header__navigation--opened");
    navOpenButton.style.display="none";
    navCloseButton.style.display="block";
  }
});

navCloseButton.addEventListener("click", function() {
  navMain.classList.add("header__navigation--closed");
  navMain.classList.remove("header__navigation--opened");
  navCloseButton.style.display="none";
  navOpenButton.style.display="block";
});

import bodyScrollLock from 'body-scroll-lock';
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;
disableBodyScroll(targetElement);
enableBodyScroll(targetElement);
