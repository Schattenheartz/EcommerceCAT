document.addEventListener('DOMContentLoaded', () => {

    // ELEMENTOS DESKTOP
    const userBtn = document.getElementById('userBtn');
    const userMenu = document.getElementById('userMenu');

    const itemLoginDesktop = document.getElementById('itemLoginDesktop');
    const itemLogoutDesktop = document.getElementById('itemLogoutDesktop');
    const userGreetingDesktop = document.getElementById('userGreetingDesktop');

    // ELEMENTOS MOBILE
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    const itemLoginMobile = document.getElementById('itemLoginMobile');
    const itemLogoutMobile = document.getElementById('itemLogoutMobile');
    const userGreetingMobile = document.getElementById('userGreetingMobile');

    // ESTADO GLOBAL
    let estaConectado = true;

    // FUNCIÓN: ACTUALIZAR UI SEGÚN SESIÓN
    function actualizarEstadoUsuario() {

        if (estaConectado) {

            // ---- DESKTOP ----
            itemLoginDesktop.style.display = 'none';
            itemLogoutDesktop.style.display = 'block';
            userGreetingDesktop.innerHTML = 'Hola, <strong>Astray</strong>';

            // ---- MOBILE ----
            itemLoginMobile.style.display = 'none';
            itemLogoutMobile.style.display = 'block';
            userGreetingMobile.innerHTML = 'Hola, <strong>Astray</strong>';

        } else {

            // ---- DESKTOP ----
            itemLoginDesktop.style.display = 'block';
            itemLogoutDesktop.style.display = 'none';
            userGreetingDesktop.innerHTML = 'Hola, <strong>Invitado</strong>';

            // ---- MOBILE ----
            itemLoginMobile.style.display = 'block';
            itemLogoutMobile.style.display = 'none';
            userGreetingMobile.innerHTML = 'Hola, <strong>Invitado</strong>';
        }
    }

    // MENÚ USUARIO (DESKTOP)
    userBtn.addEventListener('click', (e) => {

        // CORRECTO: usa clase definida en CSS
        userMenu.classList.toggle('show');

        actualizarEstadoUsuario();

        // Evita que el click cierre el menú inmediatamente
        e.stopPropagation();
    });

    document.addEventListener('click', (e) => {

        if (!userMenu.contains(e.target) && e.target !== userBtn) {
            userMenu.classList.remove('show');
        }
    });

    // MENÚ HAMBURGUESA (MOBILE)
    menuToggle.addEventListener('click', (e) => {

        // CORRECTO: clase que existe en CSS
        mobileMenu.classList.toggle('active');

        actualizarEstadoUsuario();

        e.stopPropagation();
    });

    document.addEventListener('click', (e) => {

        if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            mobileMenu.classList.remove('active');
        }
    });

    // INICIALIZACIÓN
    actualizarEstadoUsuario();

});