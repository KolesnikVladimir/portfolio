$('button.scroll-top').click(function(){
    $("html").animate({scrollTop:0},"slow");
});

$('.main-slider-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    autoHeight : true,
    loop: true,
    animateOut: 'fadeOut',
    items: 1
});

$('.testimonial-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    autoHeight : true,
    loop: true,
    items: 3
});

$('.js-anim-menu-btn').click(function (e){
    $(".main-header .nav-outer .nav-inner").toggleClass("active");
    e.preventDefault();
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 350) {
        $('.main-header').addClass("fixed-header");
    } else {
        $('.main-header').removeClass("fixed-header");
    }
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 350) {
        $('.scroll-to-target').fadeIn();
    } else {
        $('.scroll-to-target').fadeOut();
    }
});

$(function() { 
    $(".scroll-to-target").scrollToTop(); 
});

var myMap;
ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map('map', {
        center: [53.934721, 27.427892],
        zoom: 15,
        controls: ['zoomControl']
    }, {
        searchControlProvider: 'yandex#search'
    });
    // myMap.behaviors.disable('scrollZoom');
    // myMap.behaviors.disable('drag');
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Беларусь, Минск, Каменногорская улица, 47, 3 этаж. офис 38',
            balloonContent: 'Беларусь, Минск, Каменногорская улица, 47, 3 этаж. офис 38'
        }, {

            iconLayout: 'default#image',
            iconImageHref: '/netcat_template/template/3/img/map.png',
            iconImageSize: [50, 74.24],
            iconImageOffset: [-25, -62]
        });
    myMap.geoObjects.add(myPlacemark);
};


