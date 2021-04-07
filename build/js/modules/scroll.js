'use strict';

(function () {
  const nav = document.querySelector('.header__navigation');
  const ancors = nav.querySelectorAll('.header__link a[href^="#"]');
  ancors.forEach(trigger => {
    trigger.onclick = function (e) {
      e.preventDefault();
      let hash = this.getAttribute('href');
      let target = document.querySelector(hash);
      let headerOffset = 100;
      let elementPosition = target.offsetTop;
      let offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    };
  });
})();
