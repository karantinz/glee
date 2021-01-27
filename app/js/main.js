$(function(){
    $('.slider__inner').slick({
        arrows: false,
        dots: true,
    });

    $('.partners__inner').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
    });

    $('.menu__btn').on('click', function () {
        $('.menu__list, .menu__btn').toggleClass('menu__btn--active');
    });

    $('.menu__link').on('click', function () {
        $('.menu__list, .menu__btn').toggleClass('menu__btn--active');
    });

    $('.menu__btn').on('click', function () {
        $('.user-nav').toggleClass('user-nav__btn--active');
    });

    $('.menu__link').on('click', function () {
        $('.user-nav').toggleClass('user-nav__btn--active');
    });


    var mixer1 = mixitup('.product__content', {
        selectors: {
            control: '.goods__btn--product'
        }
    });
    var mixer2 = mixitup('.design__inner', {
        selectors: {
            control: '.goods__btn--design'
        }
    });
})