export function initMobileMenu() {

    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    menuToggle.addEventListener('click', (e) => {
        mobileMenu.classList.toggle('mobile-menu--active');
        e.stopPropagation();
    });

    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            mobileMenu.classList.remove('mobile-menu--active');
        }
    });
}