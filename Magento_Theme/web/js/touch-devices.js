define([], function() {
  const android = navigator.userAgent.match(/Android/i),
        blackBerry = navigator.userAgent.match(/BlackBerry/i),
        iOS = navigator.userAgent.match(/iPhone|iPad|iPod/i),
        windows = navigator.userAgent.match(/IEMobile/i),
        opera = navigator.userAgent.match(/Opera Mini/i);

  const isTouchDevice = android || blackBerry || iOS || opera || windows;

  if (isTouchDevice) {
    document.querySelector('body').classList.add('is-touch-device');
  }
});
