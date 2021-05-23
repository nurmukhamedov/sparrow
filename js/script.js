const navSlide = () => {
    const burger = document.querySelector('.toggle5');
    const nav = document.querySelector('.header_menu');
    const navLinks = document.querySelectorAll('.header_menu li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');


        //animate
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
            }



        });

        //burger animation

        burger.classList.toggle('toggle1');


    });
}
navSlide();
$(function() {
    $('.toggle5').click(function() {
        $('.header_menu').toggleClass('active');

    })
})
$(window).resize(function() {
    if ($(window).width() < 992) {
        $('.header_menu').remove.Class('active');
    }
})