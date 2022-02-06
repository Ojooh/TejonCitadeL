
jQuery(window).ready(function ($) {
    CryptoCharts.priceHistory({
        chart_id: "chartContainer",
        loading_indicator: { colors: ["#f2a900", "#f2a900", "#f2a900", "#f2a900"] },
        cryptocompare_tickers: ["BTC"],
        last_days: 90,
        axes: true,
        options: {
            colors: ["#f2a900"],
            title: {
                text: "Bitcoin price chart", align: 'left',
                style: {
                    color: '#edf2fc',
                    fontWeight: 'bold',
                    fontSize: '25px'
                }
            },
            subtitle: {
                text: 'Last 90 days', align: 'left',
                style: {
                    fontSize: '15px'
                }
            },
            chart: { type: 'line', height: '100%' },
            yaxis: { opposite: true }
        }
    });

    $('#preloader-active').delay(4500).fadeOut('slow');
    $('body').delay(4500).css({ 'overflow': 'visible' });
    var wow = new WOW({ offset: 100, mobile: false });
    wow.init();


});

// var vidy = document.getElementById("header-vd");
// vidy.play();

// var mp4Vid = document.getElementById('mp4Source');
// var count = 0;
// var max = 1
// vidy.addEventListener('ended', function (e) {
//     if (!e) {
//         e = window.event;
//     }
//     if (count == max) {
//         count = 0
//     }
//     count = count + 1;
//     $(mp4Vid).attr('src', 'video/vid-' + count.toString() + '.mp4');
//     vidy.load();
//     vidy.play();



// }, false);