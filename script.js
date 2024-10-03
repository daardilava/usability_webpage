document.addEventListener('DOMContentLoaded', () => {
    // Funcionalidad para el menú hamburguesa
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');  // Alterna la clase 'active' para mostrar/ocultar el menú
    });

    // Funcionalidad para el desplazamiento suave en los enlaces internos
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            const href = event.target.getAttribute('href');

            // Si el enlace comienza con '#' es un ancla interna, evita la redirección
            if (href.startsWith('#')) {
                event.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 50,
                        behavior: 'smooth'
                    });
                }
            }
            // Si el menú está abierto en móvil, al hacer clic en un enlace se cierra automáticamente
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
            }
        });
    });
});

