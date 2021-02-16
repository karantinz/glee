$(function () {

    $(".filter-recent__star").rateYo({
        starWidth: "15px",
        spacing: "5px",
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00",
        readOnly: true,
    });

    $(".product-details__star").rateYo({
        starWidth: "20px",
        spacing: "5px",
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00",
    });

    $(".star").rateYo({
        starWidth: "20px",
        spacing: "10px",
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00",
        readOnly: true,
    });

    $('.filter-price__input').ionRangeSlider({
        type: "double",
        prefix: "$",
        onStart: function (data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },

        onChange: function (data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
    });

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

    $('.product-related__goods').slick({
        speed: 300,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipe: false,
        infinite: false,
        prevArrow: '<button class="slick-prev" type="button"><i class="fa fa-chevron-left" aria-hidden="true"></i> <img src="images/arrows-l.png" alt=""></button>',
        nextArrow: '<button class="slick-next" type="button"><img src="images/arrows-r.png" alt=""> <i class="fa fa-chevron-right" aria-hidden="true"></i></button>',

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
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

    $('.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('tabs-active').siblings().removeClass('tabs-active')
            .closest('.tabs').find('.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
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