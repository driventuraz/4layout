$(function () {
    $('.slider').slick({
        slidesToShow: 1,
        arrows: false,
        speed: 800,
        autoplay: true,
        infinite: false,
        autoplaySpeed: 10000,
        pauseOnHover: false,
        fade: true,
        draggable: true,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
        dots: true,

    });

        $('.site_dev').slick({
            dots: false,
            arrows: false,
            centerMode: false,
            centerPadding: 0,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 850,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: false,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }

            ]
        });

    $('.mentors_body').slick({
        slidesToShow: 1,
        arrows: false,
        speed: 800,
        autoplay: true,
        infinite: false,
        autoplaySpeed: 10000,
        pauseOnHover: false,
        fade: true,
        draggable: true,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
        dots: true
    });
})

$(document).ready(function (){
    $('.burger_menu').click(function(event){
        $('.burger_menu, .header_menu').toggleClass('active');
    });
});