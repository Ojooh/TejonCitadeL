jQuery(window).ready(function ($) {
    $('#preloader-active').delay(4500).fadeOut('slow');
    $('body').delay(4500).css({ 'overflow': 'visible' });
    var wow = new WOW({ offset: 100, mobile: false });
    wow.init();

});