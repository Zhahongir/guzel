// Autoplay 
const splide = new Splide( '.splide', {
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    perPage: 4,
    arrows: false,
    autoWidth: true,
    pagination: false,
    gap: 25,
    autoScroll: {
        speed: 1,
    },
  } );
  
splide.mount(window.splide.Extensions);


document.addEventListener("DOMContentLoaded", function() {
    var header = document.getElementById("header");

    window.onscroll = function() {
        if (document.documentElement.scrollTop > 150 || document.body.scrollTop > 150) {
            header.style.transform = "translateY(0)";
        } else {
            header.style.transform = "translateY(-100%)";
        }
    };
});

// Hamburger
document.addEventListener('DOMContentLoaded', function() {
    const hamburgers = document.querySelectorAll('.header__wrap__menu__hamburger');
    const menu = document.getElementById('menu');

    hamburgers.forEach(hamburger => {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            menu.classList.toggle('open');
        });
    });

    const links = menu.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('open');
            hamburgers.forEach(hamburger => hamburger.classList.remove('active'));
        });
    });
});
