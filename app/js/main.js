$(function(){
    $('.slider-top__inner').slick({
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


    var mixer1 = mixitup('.products__inner', {
        selectors: {
            control: '.products .goods-filter__btn'
        },
    });
    var mixer2 = mixitup('.design__inner', {
        selectors: {
            control: '.design .goods-filter__btn'
        },
    });
})