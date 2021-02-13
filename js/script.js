$(function () {
    "use strict";
    // index page banner starts
    $('.banner_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    });

    // Details page starts

    $('.details_img').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        fade: true,
        asNavFor: '.details_small_img',
    });
    $('.details_small_img').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '.details_img',
        dots: true,
        focusOnSelect: true,
    });



});