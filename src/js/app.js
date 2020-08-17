$(function(){
    $('.header__slider').slick({
        infinite: true,
        swipe: false,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<img class="header__slider-arrow header__slider-arrow--left" src="./images/dest/arrow-lf.svg" alt="left">',
        nextArrow: '<img class="header__slider-arrow header__slider-arrow--right" src="./images/dest/arrow-rg.svg" alt="right">',
    });
});