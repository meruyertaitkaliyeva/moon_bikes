'use strict';

(function () {
  const anchors = document.querySelectorAll('a.header__link')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href')

      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    })
  }
})();

