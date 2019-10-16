// this script is only for for components, it mirrors the dashboard form change password behavior,
// we don't use it in Theme implementation
'use strict';

class DashboardForm {
  constructor(checkboxPassword) {
    this.checkboxPassword = checkboxPassword;
    this.checkboxEmail    = document.querySelector('input#changeEmail'),
    this.confirmPassword  = document.querySelector('.confirmPassword'),
    this.email            = document.querySelector('.email'),
    this.fields           = document.querySelector('.dashboard-form__fields'),
    this.newPassword      = document.querySelector('.newPassword'),
    this.password         = document.querySelector('.password'),
    this.title            = document.querySelector('.dashboard-form__title-form'),
    this.toggledClass     = 'dashboard-form--hidden';

    if (this.checkboxEmail) {
      this.checkboxEmail.addEventListener('change', () => {
        if (this.checkboxPassword.checked && this.checkboxEmail.checked) {
          this.title.innerHTML = 'Change Email and Password';

          this.toggleElements(4);
        }
        else if (this.checkboxPassword.checked && !this.checkboxEmail.checked) {
          this.title.innerHTML = 'Change Password';

          this.toggleElements(1);
        }
        else {
          this.fields.classList.toggle(this.toggledClass);
          this.title.innerHTML = 'Change Email';

          this.toggleElements(2);
        }
      });
    }
    if (this.checkboxPassword) {
      this.checkboxPassword.addEventListener('change', () => {
        if (this.checkboxEmail.checked && this.checkboxPassword.checked) {
          this.title.innerHTML = 'Change Email and Password';

          this.toggleElements(4);
        }
        else if (this.checkboxEmail.checked && !this.checkboxPassword.checked) {
          this.title.innerHTML = 'Change Email';

          this.toggleElements(2);
        }
        else {
          this.fields.classList.toggle(this.toggledClass);
          this.title.innerHTML = 'Change Password';

          this.toggleElements(1);
        }
      });
    }
  }

  toggleElements(elements) {
    if (elements === 4) {
      this.email.classList.remove(this.toggledClass);
      this.password.classList.remove(this.toggledClass);
      this.newPassword.classList.remove(this.toggledClass);
      this.confirmPassword.classList.remove(this.toggledClass);
    }
    else if (elements === 2) {
      this.email.classList.remove(this.toggledClass);
      this.password.classList.remove(this.toggledClass);
      this.newPassword.classList.add(this.toggledClass);
      this.confirmPassword.classList.add(this.toggledClass);
    }
    else if (elements === 1) {
      this.email.classList.add(this.toggledClass);
      this.password.classList.remove(this.toggledClass);
      this.newPassword.classList.remove(this.toggledClass);
      this.confirmPassword.classList.remove(this.toggledClass);
    }
  }
}
new DashboardForm(document.querySelector('input#changePassword'));
