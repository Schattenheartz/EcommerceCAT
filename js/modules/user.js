export function initUser() {

    const userBtn = document.getElementById('userBtn');
    const userMenu = document.getElementById('userMenu');

    const itemLoginDesktop = document.getElementById('itemLoginDesktop');
    const itemLogoutDesktop = document.getElementById('itemLogoutDesktop');
    const userGreetingDesktop = document.getElementById('userGreetingDesktop');

    const itemLoginMobile = document.getElementById('itemLoginMobile');
    const itemLogoutMobile = document.getElementById('itemLogoutMobile');
    const userGreetingMobile = document.getElementById('userGreetingMobile');

    let estaConectado = true;

    function actualizarEstadoUsuario() {

        const nombre = estaConectado ? 'Astray' : 'Invitado';

        itemLoginDesktop.style.display = estaConectado ? 'none' : 'block';
        itemLogoutDesktop.style.display = estaConectado ? 'block' : 'none';
        userGreetingDesktop.innerHTML = `Hola, <strong>${nombre}</strong>`;

        itemLoginMobile.style.display = estaConectado ? 'none' : 'block';
        itemLogoutMobile.style.display = estaConectado ? 'block' : 'none';
        userGreetingMobile.innerHTML = `Hola, <strong>${nombre}</strong>`;
    }

    userBtn.addEventListener('click', (e) => {
        userMenu.classList.toggle('user-menu--active');
        actualizarEstadoUsuario();
        e.stopPropagation();
    });

    document.addEventListener('click', (e) => {
        if (!userMenu.contains(e.target) && !userBtn.contains(e.target)) {
            userMenu.classList.remove('user-menu--active');
        }
    });

    actualizarEstadoUsuario();
}