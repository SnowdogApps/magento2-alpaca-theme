define(function() {
    'use static'
    
    const sideMenuTrigger   = document.querySelector('.side-menu-trigger'),
          sideMenuContainer = document.querySelector('.side-menu');

    sideMenuTrigger.addEventListener('click', () => {
      sideMenuContainer.classList.toggle('side-menu--is-open');
    });

})
