jQuery(window).ready(function ($) {
    var header = $("#header");
    var about = $("#aboutUs");
    var videBG = $("#video-bg");
    var btcCounter = $("#btc-counter");
    var newsletter = $("#newsletter");
    var footer = $("footer");

    header.load('components/header.html');
    about.load('components/aboutUs.html');
    videBG.load('components/videoBg.html');
    btcCounter.load('components/BTCCounter.html');
    newsletter.load('components/newsletter.html');
    // footer.load('components/footer.html');
});