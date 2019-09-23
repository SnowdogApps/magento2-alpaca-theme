function stickyMessages() {
  let messageWrap = document.querySelector('.messages'),
      messages = messageWrap.querySelectorAll('.message');

  if (messages.length) {
    let fromTop = window.scrollY,
        headerWrap = document.querySelector('.header__wrapper');

    if (fromTop > (headerWrap.offsetTop + headerWrap.offsetHeight)) {
      messageWrap.classList.add('messages--sticky');
    }
    else {
      messageWrap.classList.remove('messages--sticky');
    }
  }
}

document.addEventListener('scroll', () => {
  stickyMessages();
}, { capture: false, passive: true });
