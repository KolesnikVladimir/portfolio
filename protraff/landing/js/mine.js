$(document).ready(function () {
    $('.request-btm').click(function (e) {
        $('.popup').css({
            'top': '0',
            'z-index': '999'
        });
        $('body').addClass('overlay');

        e.preventDefault();
    });

    $('.popup > .close, .overlay:before').click(function (e) {
        $(this).parent().css({
            'top': '-200%'
        });
        setTimeout(function func() {
            $('body').animate().removeClass('overlay');
        }, 800);

        $(".content form").css("display", "block");
        $(".content h4").remove();
        $(".err").remove();
        e.preventDefault();
    });

    // Фокусируем placeholder при клике на поле или, если поле заполнено.
    $('.cdInputFix input, .cdInputFix textarea').each(function () {
        var inpPar2 = $(this).val();
        if (inpPar2.length != 0) {
            $(this).parent().addClass('goodfocus');
        }
    });
    $('.cdInputFix input, .cdInputFix textarea').on('focus', function () {
        $(this).parent().addClass('goodfocus');
    }).on('blur', function () {
        $(this).parent().removeClass('goodfocus');
        var inpPar = $(this).val();
        if (inpPar.length != 0) {
            $(this).parent().addClass('goodfocus');
        }
    });


    var scrollDiv = $(".top");
    if ($(window).scrollTop() != "0") {
        $(scrollDiv).fadeIn("slow")
    }

    $(window).scroll(function () {
        if ($(window).scrollTop() == "0") {
            $(scrollDiv).fadeOut("slow")
        } else {
            $(scrollDiv).fadeIn("slow")
        }
    });

    $(".top").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

});

