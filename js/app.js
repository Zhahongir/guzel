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

jQuery(document).ready(function() { 
    jQuery('[data-modal=callBack]').on('click', function() {
        jQuery('.modal-ru').fadeIn();
    });
    jQuery('.modal__close').on('click', function() {
        jQuery('.bg-modal').fadeOut();
    });
});