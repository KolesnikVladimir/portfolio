$(document).ready(function () {

    var heightPage = $(window).height() - 166;
    $(".contact-page").css("height", heightPage + "px");
    $(".contact-page #map").css("height", heightPage + "px");


    $('#order-add').submit(function (e) {
        $.ajax({
            type: "POST",
            url: '/netcat/add.php',
            data: $('#order-add').serialize(),
            success: function () {
                $('#ok_txt').fadeIn(200).append('Спасибо за Ваш выбор! Наш менеджер свяжется с Вами в самое ближайшее время.');
                setTimeout(function () { $('#ok_txt').fadeOut(800); }, 4000);
                setTimeout(function () { $('#ok_txt').html(''); }, 6000);
                $('#order-add')[0].reset();
            }
        });
        e.preventDefault();
    });

    
    $(".burger").click(function () {
        $("body").toggleClass("overlay");
        $(".pop-up-menu").toggleClass("open");
        $(".menucatalog").toggleClass("open");
        $(this).toggleClass("close");
        return false;
    });

    $(".open-form").click(function () {
        $("body").addClass("overlay");
        $(".pop-up").addClass("open");
        return false;
    });

    $(".close").click(function () {
        $("body").removeClass("overlay");
        $(".pop-up").removeClass("open");
        return false;
    });

    $(".bg").click(function () {
        $("body").removeClass("overlay");
        $(".pop-up").removeClass("open");
        return false;
    });

    $('.slider').owlCarousel({
        autoplay: true,
        items: 1,
        nav: true,
        loop: true,
        margin: 0,
        autoplayTimeout: 6000,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            2000: {
                items: 3
            }
        }

    });

    $(".frst-sect .next").click(function () {
        $('.slider').trigger("next.owl.carousel");
    });
    $(".frst-sect .prev").click(function () {
        $('.slider').trigger("prev.owl.carousel");
    });


    $('.slid').owlCarousel({
        autoplay: true,
        items: 1,
        nav: true,
        loop: true,
        margin: 0,
        autoplayTimeout: 6000,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1
            },

            600: {
                items: 2
            },
            1000: {
                items: 4
            },
            2000: {
                items: 3
            }
        }

    });
});

$(".offers .next").click(function () {
    $('.slid').trigger("next.owl.carousel");
});
$(".offers .prev").click(function () {
    $('.slid').trigger("prev.owl.carousel");
});


var myMap;
ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
        center: [55.68166556905436, 37.51661949999996],
        zoom: 13,
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
            hintContent: '119331 г. Москва, пр. Вернадского 29',
            balloonContent: '119331 г. Москва, пр. Вернадского 29'
        }, {

            iconLayout: 'default#image',
            iconImageHref: 'img/map.png',
            iconImageSize: [32, 48],
            iconImageOffset: [-25, -42]
        });
    myMap.geoObjects.add(myPlacemark);
};