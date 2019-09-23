'use strict'

const checkboxPassword = document.querySelector('input#changePassword'),
      checkboxEmail    = document.querySelector('input#changeEmail'),
      confirmPassword  = document.querySelector('.confirmPassword'),
      email            = document.querySelector('.email'),
      fields           = document.querySelector('.dashboard-form__fields'),
      newPassword      = document.querySelector('.newPassword'),
      password         = document.querySelector('.password'),
      title            = document.querySelector('.dashboard-form__title-form'),
      toggledClass     = 'dashboard-form--hidden';

if (checkboxEmail) {
  checkboxEmail.addEventListener('change', () => {
    if (checkboxPassword.checked && checkboxEmail.checked) {
      title.innerHTML = 'Change Email and Password';

      toggleElements(4);
    }
    else if (checkboxPassword.checked && !checkboxEmail.checked) {
      title.innerHTML = 'Change Password';

      toggleElements(1);
    }
    else {
      fields.classList.toggle(toggledClass);
      title.innerHTML = 'Change Email';

      toggleElements(2);
    }
  });
}

if (checkboxPassword) {
  checkboxPassword.addEventListener('change', () => {
    if (checkboxEmail.checked && checkboxPassword.checked) {
      title.innerHTML = 'Change Email and Password';

      toggleElements(4);
    }
    else if (checkboxEmail.checked && !checkboxPassword.checked) {
      title.innerHTML = 'Change Email';

      toggleElements(2);
    }
    else {
      fields.classList.toggle(toggledClass);
      title.innerHTML = 'Change Password';

      toggleElements(1);
    }
  });
}

function toggleElements(elements) {
  if (elements === 4) {
    email.classList.remove(toggledClass);
    password.classList.remove(toggledClass);
    newPassword.classList.remove(toggledClass);
    confirmPassword.classList.remove(toggledClass);
  }
  else if (elements === 2) {
    email.classList.remove(toggledClass);
    password.classList.remove(toggledClass);
    newPassword.classList.add(toggledClass);
    confirmPassword.classList.add(toggledClass);
  }
  else if (elements === 1) {
    email.classList.add(toggledClass);
    password.classList.remove(toggledClass);
    newPassword.classList.remove(toggledClass);
    confirmPassword.classList.remove(toggledClass);
  }
}
