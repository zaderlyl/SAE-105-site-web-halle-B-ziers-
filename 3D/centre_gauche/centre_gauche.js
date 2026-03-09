document.addEventListener('DOMContentLoaded', () => {

    // Apparition du header
    const menu = document.querySelector('.menu');
    menu.classList.add('show');

    // Menu mobile
    const mobileBtn = document.querySelector('.menu__mobile__brand');
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('menuOverlay');
    const closeBtn = document.getElementById('closeMenu');
    
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        overlay.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
    });


});
 
document.querySelector('arriere')
    .addEventListener('click', () => {
      window.location.href = '/3D/centre_droite/centre_droite.html';
});