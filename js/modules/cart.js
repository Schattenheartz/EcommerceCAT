export function initCart() {

    const cartBadge = document.querySelector('.cart__badge');

    let cantidad = 0;

    function actualizarCarrito() {
        cartBadge.textContent = cantidad;
    }

    // Simulación (luego conectas con productos reales)
    document.addEventListener('click', (e) => {
        if (e.target.matches('[data-add-to-cart]')) {
            cantidad++;
            actualizarCarrito();
        }
    });

    actualizarCarrito();
}