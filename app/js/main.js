$(function(){
    $('.slider__inner').slick({
        arrows: false,
        dots: true,
    });

    $('.partners__inner').slick({
        dots: false,
        arrows: false,
        variableWidth: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              centerMode: true,
            }
          }
        ]
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


    var mixer1 = mixitup('.product__inner', {
        selectors: {
            control: '.product .goods__btn'
        },
    });
    var mixer2 = mixitup('.design__inner', {
        selectors: {
            control: '.design .goods__btn'
        },
    });
})