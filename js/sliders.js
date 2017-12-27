$(document).ready(function() {

    // action products slider
    $('.slider-action').owlCarousel({
        loop:true,
        margin:10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout:4000,
        navText: ["<img src='images/slider-arrow-left.png'>","<img src='images/slider-arrow-right.png'>"],
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    // popular products slider
    $('.slider-popular').owlCarousel({
        loop:true,
        margin:10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout:4000,
        navText: ["<img src='images/slider-arrow-left.png'>","<img src='images/slider-arrow-right.png'>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    // trademark slider
    $('.slider-trademarks').owlCarousel({
        loop:true,
        margin:10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout:3000,
        navText: ["<img src='images/slider-arrow-left-purple.png'>","<img src='images/slider-arrow-right-purple.png'>"],
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    // aditional products slider
    $('.slider-aditional').owlCarousel({
        loop:true,
        margin:10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout:4000,
        navText: ["<img src='images/small-arrow-left.png'>","<img src='images/small-arrow-right.png'>"],
        responsive:{
            0:{
                items:3
            },
            600:{
                items:4
            },
            1000:{
                items:6
            }
        }
    });

    // similar products slider
    $('.slider-similar').owlCarousel({
        loop:true,
        margin:10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout:4000,
        navText: ["<img src='images/slider-arrow-left.png'>","<img src='images/slider-arrow-right.png'>"],
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    // viewed products slider
    $('.slider-viewed').owlCarousel({
        loop:true,
        margin:10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout:5000,
        navText: ["<img src='images/slider-arrow-left.png'>","<img src='images/slider-arrow-right.png'>"],
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

});

