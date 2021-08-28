$(".menu > a").click(function (e) {
    $(this).parent().toggleClass("open");
    e.preventDefault();
});

$(".order-phone").click(function (e) {
    $("body").addClass("hidden");
    $(".pop-up-block").addClass('open');
    e.preventDefault();
});

$(".pop-up-block .close_btn").click(function (e) {
    $("body").removeClass("hidden");
    $(".pop-up-block").removeClass("open");
    e.preventDefault();
});

var phone_order = $('.phone-order');
phone_order.submit(function (e) {
    var formData = new FormData(this);
    $.ajax({
        type: "POST",
        url: '/netcat/add.php',
        data: formData,
        success: function () {
            phone_order[0].reset();
            $("body").addClass("hidden");
            phone_order.find(".form-div").addClass("none");
            phone_order.find(".message-alert").append("<div id='nc_modal_status'><div class='nc_true'>Спасибо! Ваши данные для предварительной записи на приём успешно отправлены!</div>");
            phone_order.find(".message-alert").addClass("open");
        },
        cache: false,
        contentType: false,
        processData: false
    });
    e.preventDefault();
});

var form_order = $('.form-order');
form_order.submit(function (e) {
    var formData = new FormData(this);
    $.ajax({
        type: "POST",
        url: '/netcat/add.php',
        data: formData,
        success: function () {
            form_order[0].reset();
            $("body").addClass("hidden");
            form_order.parent().parent().find(".pop-up-block").removeClass("open");
            form_order.find(".message-alert").append("<div id='nc_modal_status'><div class='nc_true'>Спасибо! Ваши данные для предварительной записи на приём успешно отправлены!</div>");
            form_order.find(".message-alert").addClass("open");
        },
        cache: false,
        contentType: false,
        processData: false
    });
    e.preventDefault();
});

var form_order2 = $('.form-order2');
form_order2.submit(function (e) {
    var formData = new FormData(this);
    $.ajax({
        type: "POST",
        url: '/netcat/add.php',
        data: formData,
        success: function () {
            form_order2[0].reset();
            $("body").addClass("hidden");
            form_order2.find(".pop-up-block").removeClass("open");
            form_order2.find(".message-alert").append("<div id='nc_modal_status'><div class='nc_true'>Спасибо! Ваши данные для предварительной записи на приём успешно отправлены!</div>");
            form_order2.find(".message-alert").addClass("open");
        },
        cache: false,
        contentType: false,
        processData: false
    });
    e.preventDefault();
});

$(".close-icon").click(function (e) {
    $("body").removeClass("hidden");
    $(".message-alert").removeClass("open");
    $("#nc_modal_status").remove();
    e.preventDefault();
});

$(".services a.item").click(function() { // ID откуда кливаем
    var elementClick = $(this).attr("href")
    var elementClick = elementClick.replace("/uslugi/", '');
    $('html, body').animate({
        scrollTop: $(elementClick).offset().top  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
    return false;
});
