
document.addEventListener('DOMContentLoaded', function () {
    const mobileBtn = document.getElementById('mobile-btn');
    const mobileMenu = document.getElementById('mobile-options');
    const overlay = document.getElementById('overlay');

    function openMenu() {
        mobileMenu.style.left = '0';
        overlay.classList.add('active');
        document.body.classList.add('menu-open');
    }

    function closeMenu() {
        mobileMenu.style.left = '-100%';
        overlay.classList.remove('active');
        document.body.classList.remove('menu-open');
    }

    mobileBtn.addEventListener('click', openMenu);
    overlay.addEventListener('click', closeMenu);
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});
