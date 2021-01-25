$(function(){
    $('.slider__inner').slick({
        arrows: false,
        dots: true,
    });

    $('.partners__inner').slick({
        arrows: false,
        dots: true,
    });


    var mixer1 = mixitup('.product__content', {
        selectors: {
            control: '.product__item'
        }
    });
    var mixer2 = mixitup('.design__inner', {
        selectors: {
            control: '.design__item'
        }
    });
})