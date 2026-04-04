import { initUser } from './modules/user.js';
import { initMobileMenu } from './modules/mobile-menu.js';
import { initCart } from './modules/cart.js';
import { initSearch } from './modules/search.js';

document.addEventListener('DOMContentLoaded', () => {
    initUser();
    initMobileMenu();
    initCart();
    initSearch();
});