'use strict';

(function () {
  const body = document.body;
  const headerMain = document.querySelector(".header");
  const navMain = headerMain.querySelector(".header__navigation");
  const navOpenButton = headerMain.querySelector(".header__button--open");
  const navCloseButton = headerMain.querySelector(".header__button--close");

  headerMain.classList.remove("header--nojs");

  navOpenButton.addEventListener("click", function () {
    if (navMain.classList.contains("header__navigation--closed")) {
      navMain.classList.remove("header__navigation--closed");
      navMain.classList.add("header__navigation--opened");
      navOpenButton.classList.remove("show");
      navOpenButton.classList.add("hide");
      navCloseButton.classList.remove("hide");
      navCloseButton.classList.add("show");
      const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
      body.style.position = 'fixed';
      body.style.width = '100%';
      body.style.top = `-${scrollY}`;
    }
  });

  navCloseButton.addEventListener("click", function () {
    navMain.classList.add("header__navigation--closed");
    navMain.classList.remove("header__navigation--opened");
    navCloseButton.classList.remove("show");
    navCloseButton.classList.add("hide");
    navOpenButton.classList.remove("hide");
    navOpenButton.classList.add("show");
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  });

  window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
  });
})();
