var typed = new Typed('.typing', {
    strings: ["Web-Designer.", "UI/UX Designer.", "Web Developer."],
    loop: true,
    typeSpeed: 50
});

new WOW().init();

$(document).ready(function () {
    $('.slider-active').owlCarousel({
        loop: true,
        autoplay: true,
        dots: false,
        slideSpeed: 300,
        paginationSpeed: 500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
});
