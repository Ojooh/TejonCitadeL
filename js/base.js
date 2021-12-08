jQuery(window).ready(function ($) {
    var preloader = $("#preloader-active");
    var header = $("#header");
    var about = $("#aboutUs");
    var videBG = $("#video-bg");
    var btcCounter = $("#btc-counter");
    // var newsletter = $("#newsletter");
    var footer = $("#footer");

    preloader.load('components/preloader.html');
    header.load('components/header.html');
    about.load('components/aboutUs.html');
    videBG.load('components/videoBg.html');
    btcCounter.load('components/BTCCounter.html');
    // newsletter.load('components/newsletter.html');
    footer.load('components/footer.html');

    $('#preloader-active').delay(4500).fadeOut('slow');
    $('body').delay(4500).css({ 'overflow': 'visible' });
    var wow = new WOW({ offset: 100, mobile: false });
    wow.init();

});