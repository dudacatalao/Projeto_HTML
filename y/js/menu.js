
$(document).ready(function () {
    
    $('.sub-btn').click(function () {
        $(this).next('.sub-menu-adm, .sub-menu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
    });

    $('.menuicon').click(function () {
        $('.side-bar').toggleClass('active');
        $('.menuicon').css("visibility", "hidden")
    });

    $('.close-btn').click(function () {
        $('.side-bar').toggleClass('active');
        $('.menuicon').css("visibility", "visible")
    });

});
