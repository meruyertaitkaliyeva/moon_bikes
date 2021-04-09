'use strict';

(function () {
  const form = document.querySelector('form');
  const phone = form.querySelector('#tel');
  const submit = form.querySelector('button');

  submit.addEventListener('click', function (evt) {
    if (phone.value.length < 10) {
      evt.preventDefault();
      return false;
    } else {
      return true;
    }
  })
})();
