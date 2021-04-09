'use strict';

(function () {
  const form = document.querySelector('form');
  const error = form.querySelector('.intro__error');
  const phone = form.querySelector('#tel');
  const submit = form.querySelector('button');

  submit.addEventListener('click', function (evt) {
    if (phone.value.length < 10) {
      evt.preventDefault();
      error.classList.remove('hide');
      error.classList.add('show');
      return false;
    } else {
      error.classList.remove('show');
      error.classList.add('hide');
      return true;
    }
  })
})();
