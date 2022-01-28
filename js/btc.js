function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// fixed numbers with out rounding
// and abbreviate numbers with suffix
// for numbers greater than billion

function toFixedNoRound(value) {
    const factor = Math.pow(10, 1);
    let result = (value / 1000000000);
    result = Math.floor(result * factor) / factor;
    result = result + ' B';
    return result;

}

// reducing numbers to decimal of 8

function calc(num) {
    var with8Decimals = num.toString().match(/^-?\d+(?:\.\d{0,8})?/)[0]
    return with8Decimals
}

// change number suffix abbreviation to numbers

function abTonu(value) {
    let price = value.replace(/\$/g, '');
    let num = price.substring(0, price.length - 1);

    var lastPriceValue = price.slice(-1);
    if (lastPriceValue === 'K') {
        return num * 1000;
    }
    if (lastPriceValue === 'M') {
        return num * 1000000
    }
}

// api calls 

const bitcoin_url = "https://api.coingecko.com/api/v3/coins/bitcoin/";
const bitcoin_market = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false/";
const companies_holdings = "https://api.coingecko.com/api/v3/companies/public_treasury/bitcoin/";

// store response recieved from api calls to these variables

var bitcoin_data, market_data, companies_data;

console.log("bitcoin data value " + bitcoin_data)

// fetch Bitcoin Price , Total Volume , All Time High,
// Bitcoin Network table data,

fetch(bitcoin_url)
    .then(res => res.json())
    .then(data => bitcoin_data = data)
    .then(() => {
        document.getElementById('price-id').innerHTML = "$" + numberWithCommas(bitcoin_data.market_data.current_price.usd);
        console.log("this is from the api " + numberWithCommas(bitcoin_data.market_data.current_price.usd))
        document.getElementById('ath-id').innerHTML = "$" + numberWithCommas(bitcoin_data.market_data.ath.usd);
        document.getElementById('volume-id').innerHTML = "$" + toFixedNoRound(bitcoin_data.market_data.total_volume.usd);

        let id1 = 1;
        let dollar1 = document.getElementById('dollarAmt' + id1).innerHTML.replace(/\$/g, '');
        let btc1 = document.getElementById('bitcoinAmt' + id1).innerHTML = calc(dollar1 / bitcoin_data.market_data.current_price.usd) + " BTC";

        let id2 = 2;
        let dollar2 = document.getElementById('dollarAmt' + id2).innerHTML.replace(/\$/g, '');
        let btc2 = document.getElementById('bitcoinAmt' + id2).innerHTML = calc(dollar2 / bitcoin_data.market_data.current_price.usd) + " BTC";

        let id3 = 3;
        let dollar3 = document.getElementById('dollarAmt' + id3).innerHTML.replace(/\$/g, '');
        let btc3 = document.getElementById('bitcoinAmt' + id3).innerHTML = calc(dollar3 / bitcoin_data.market_data.current_price.usd) + " BTC";

        let id4 = 4;

        let dollar_4 = document.getElementById('dollarAmt' + id4).innerHTML;
        let dollar4 = abTonu(dollar_4);
        let btc4 = document.getElementById('bitcoinAmt' + id4).innerHTML = calc(dollar4 / bitcoin_data.market_data.current_price.usd) + " BTC";

        let id5 = 5;
        let dollar_5 = document.getElementById('dollarAmt' + id5).innerHTML;
        let dollar5 = abTonu(dollar_5);
        let btc5 = document.getElementById('bitcoinAmt' + id5).innerHTML = calc(dollar5 / bitcoin_data.market_data.current_price.usd) + " BTC";

        let id6 = 6;
        let dollar_6 = document.getElementById('dollarAmt' + id6).innerHTML;
        let dollar6 = abTonu(dollar_6);
        let btc6 = document.getElementById('bitcoinAmt' + id6).innerHTML = calc(dollar6 / bitcoin_data.market_data.current_price.usd) + " BTC";

        let id7 = 7;
        let dollar_7 = document.getElementById('dollarAmt' + id7).innerHTML;
        let dollar7 = abTonu(dollar_7);
        let btc7 = document.getElementById('bitcoinAmt' + id7).innerHTML = calc(dollar7 / bitcoin_data.market_data.current_price.usd) + " BTC";

        let id8 = 8;
        let dollar_8 = document.getElementById('dollarAmt' + id8).innerHTML;
        let dollar8 = abTonu(dollar_8);
        let btc8 = document.getElementById('bitcoinAmt' + id8).innerHTML = calc(dollar8 / bitcoin_data.market_data.current_price.usd) + " BTC";


        let id9 = 9;
        let dollar_9 = document.getElementById('dollarAmt' + id9).innerHTML;
        let dollar9 = abTonu(dollar_9);
        let btc9 = document.getElementById('bitcoinAmt' + id9).innerHTML = calc(dollar9 / bitcoin_data.market_data.current_price.usd) + " BTC";

        document.getElementById('sentiment-up').innerHTML = bitcoin_data.sentiment_votes_up_percentage + "%( CoinGecko)";
        document.getElementById('sentiment-down').innerHTML = bitcoin_data.sentiment_votes_down_percentage + "%( CoinGecko)";
        document.getElementById('genesis-date').innerHTML = new Date(bitcoin_data.genesis_date);
        document.getElementById('coingecko-score').innerHTML = bitcoin_data.coingecko_score;
        document.getElementById('interest-score').innerHTML = bitcoin_data.public_interest_score;
        document.getElementById('hash-alg').innerHTML = bitcoin_data.hashing_algorithm;
        document.getElementById('block-time').innerHTML = bitcoin_data.block_time_in_minutes + " Minutes";

    })

// fetch Bitcoin Price , Total Volume , All Time High,
// Bitcoin Network table data,
// and also Bitcoin Price table data by updating every 10 sec

setInterval(() => fetch(bitcoin_url)
    .then(res => res.json())
    .then(data => bitcoin_data = data)
    .then(() => {
        document.getElementById('price-id').innerHTML = "$" + numberWithCommas(bitcoin_data.market_data.current_price.usd);
        console.log("this is from the api " + numberWithCommas(bitcoin_data.market_data.current_price.usd))
        document.getElementById('ath-id').innerHTML = "$" + numberWithCommas(bitcoin_data.market_data.ath.usd);
        document.getElementById('volume-id').innerHTML = "$" + toFixedNoRound(bitcoin_data.market_data.total_volume.usd);

        let id1 = 1;
        let dollar1 = document.getElementById('dollarAmt' + id1).innerHTML.replace(/\$/g, '');
        let btc1 = document.getElementById('bitcoinAmt' + id1).innerHTML = calc(dollar1 / bitcoin_data.market_data.current_price.usd) + " BTC";

        let id2 = 2;
        let dollar2 = document.getElementById('dollarAmt' + id2).innerHTML.replace(/\$/g, '');
        let btc2 = document.getElementById('bitcoinAmt' + id2).innerHTML = calc(dollar2 / bitcoin_data.market_data.current_price.usd) + " BTC";

        let id3 = 3;
        let dollar3 = document.getElementById('dollarAmt' + id3).innerHTML.replace(/\$/g, '');
        let btc3 = document.getElementById('bitcoinAmt' + id3).innerHTML = calc(dollar3 / bitcoin_data.market_data.current_price.usd) + " BTC";

        let id4 = 4;

        let dollar_4 = document.getElementById('dollarAmt' + id4).innerHTML;
        let dollar4 = abTonu(dollar_4);
        let btc4 = document.getElementById('bitcoinAmt' + id4).innerHTML = calc(dollar4 / bitcoin_data.market_data.current_price.usd) + " BTC";

        let id5 = 5;
        let dollar_5 = document.getElementById('dollarAmt' + id5).innerHTML;
        let dollar5 = abTonu(dollar_5);
        let btc5 = document.getElementById('bitcoinAmt' + id5).innerHTML = calc(dollar5 / bitcoin_data.market_data.current_price.usd) + " BTC";

        let id6 = 6;
        let dollar_6 = document.getElementById('dollarAmt' + id6).innerHTML;
        let dollar6 = abTonu(dollar_6);
        let btc6 = document.getElementById('bitcoinAmt' + id6).innerHTML = calc(dollar6 / bitcoin_data.market_data.current_price.usd) + " BTC";

        let id7 = 7;
        let dollar_7 = document.getElementById('dollarAmt' + id7).innerHTML;
        let dollar7 = abTonu(dollar_7);
        let btc7 = document.getElementById('bitcoinAmt' + id7).innerHTML = calc(dollar7 / bitcoin_data.market_data.current_price.usd) + " BTC";

        let id8 = 8;
        let dollar_8 = document.getElementById('dollarAmt' + id8).innerHTML;
        let dollar8 = abTonu(dollar_8);
        let btc8 = document.getElementById('bitcoinAmt' + id8).innerHTML = calc(dollar8 / bitcoin_data.market_data.current_price.usd) + " BTC";


        let id9 = 9;
        let dollar_9 = document.getElementById('dollarAmt' + id9).innerHTML;
        let dollar9 = abTonu(dollar_9);
        let btc9 = document.getElementById('bitcoinAmt' + id9).innerHTML = calc(dollar9 / bitcoin_data.market_data.current_price.usd) + " BTC";

        document.getElementById('sentiment-up').innerHTML = bitcoin_data.sentiment_votes_up_percentage + "%( CoinGecko)";
        document.getElementById('sentiment-down').innerHTML = bitcoin_data.sentiment_votes_down_percentage + "%( CoinGecko)";
        document.getElementById('genesis-date').innerHTML = new Date(bitcoin_data.genesis_date);
        document.getElementById('coingecko-score').innerHTML = bitcoin_data.coingecko_score;
        document.getElementById('interest-score').innerHTML = bitcoin_data.public_interest_score;
        document.getElementById('hash-alg').innerHTML = bitcoin_data.hashing_algorithm;
        document.getElementById('block-time').innerHTML = bitcoin_data.block_time_in_minutes + " Minutes";


    }), 10000)

// fetch Bitcoin Market table data 

fetch(bitcoin_market)
    .then(res => res.json())
    .then(data => market_data = data)
    .then(() => {
        document.getElementById('market_cap').innerHTML = "$" + toFixedNoRound(market_data.find(x => x.id === 'bitcoin').market_cap);
        document.getElementById('rank').innerHTML = market_data.find(x => x.id === 'bitcoin').market_cap_rank;
        document.getElementById('high-24h').innerHTML = market_data.find(x => x.id === 'bitcoin').high_24h;
        document.getElementById('low-24h').innerHTML = market_data.find(x => x.id === 'bitcoin').low_24h;
        document.getElementById('change-24h').innerHTML = market_data.find(x => x.id === 'bitcoin').price_change_percentage_24h + "%";
        document.getElementById('circulatory').innerHTML = market_data.find(x => x.id === 'bitcoin').circulating_supply;
        document.getElementById('tot-supply').innerHTML = market_data.find(x => x.id === 'bitcoin').total_supply;
        document.getElementById('max-supply').innerHTML = market_data.find(x => x.id === 'bitcoin').max_supply;
        document.getElementById('ath-change').innerHTML = market_data.find(x => x.id === 'bitcoin').ath_change_percentage + "%";
        console.log("market data updated    ")

    })

// fetch Bitcoin Market table data every 10 sec

setInterval(() => fetch(bitcoin_market)
    .then(res => res.json())
    .then(data => market_data = data)
    .then(() => {
        document.getElementById('market_cap').innerHTML = "$" + toFixedNoRound(market_data.find(x => x.id === 'bitcoin').market_cap);
        document.getElementById('rank').innerHTML = market_data.find(x => x.id === 'bitcoin').market_cap_rank;
        document.getElementById('high-24h').innerHTML = market_data.find(x => x.id === 'bitcoin').high_24h;
        document.getElementById('low-24h').innerHTML = market_data.find(x => x.id === 'bitcoin').low_24h;
        document.getElementById('change-24h').innerHTML = market_data.find(x => x.id === 'bitcoin').price_change_percentage_24h + "%";
        document.getElementById('circulatory').innerHTML = market_data.find(x => x.id === 'bitcoin').circulating_supply;
        document.getElementById('tot-supply').innerHTML = market_data.find(x => x.id === 'bitcoin').total_supply;
        document.getElementById('max-supply').innerHTML = market_data.find(x => x.id === 'bitcoin').max_supply;
        document.getElementById('ath-change').innerHTML = market_data.find(x => x.id === 'bitcoin').ath_change_percentage + "%";
        console.log("market data updated    ")

    }), 10000)

// fetch Public Companies  bitcoin 

fetch(companies_holdings)
    .then(res => res.json())
    .then(data => companies_data = data)
    .then(() => {
        document.getElementById('micro').innerHTML = companies_data.companies.find(x => x.name === 'MicroStrategy Inc.').total_holdings;
        document.getElementById('tes').innerHTML = companies_data.companies.find(x => x.name === 'Tesla').total_holdings;
        document.getElementById('galaxy').innerHTML = companies_data.companies.find(x => x.name === 'Galaxy Digital Holdings').total_holdings;
        document.getElementById('square').innerHTML = companies_data.companies.find(x => x.name === 'Square Inc.').total_holdings;;
        document.getElementById('marathon').innerHTML = companies_data.companies.find(x => x.name === 'Marathon Patent Group').total_holdings;
        document.getElementById('hut').innerHTML = companies_data.companies.find(x => x.name === 'Hut 8 Mining Corp').total_holdings;
        document.getElementById('coin').innerHTML = companies_data.companies.find(x => x.name === 'Coinbase').total_holdings;;
        document.getElementById('nexon').innerHTML = companies_data.companies.find(x => x.name === 'NEXON Co Ltd').total_holdings;;
        document.getElementById('voyag').innerHTML = companies_data.companies.find(x => x.name === 'Voyager Digital LTD').total_holdings;;


    })

// fetch Public Companies  bitcoin every 10 sec

setInterval(() => fetch(companies_holdings)
    .then(res => res.json())
    .then(data => companies_data = data)
    .then(() => {
        document.getElementById('micro').innerHTML = companies_data.companies.find(x => x.name === 'MicroStrategy Inc.').total_holdings;
        document.getElementById('tes').innerHTML = companies_data.companies.find(x => x.name === 'Tesla').total_holdings;
        document.getElementById('galaxy').innerHTML = companies_data.companies.find(x => x.name === 'Galaxy Digital Holdings').total_holdings;
        document.getElementById('square').innerHTML = companies_data.companies.find(x => x.name === 'Square Inc.').total_holdings;;
        document.getElementById('marathon').innerHTML = companies_data.companies.find(x => x.name === 'Marathon Patent Group').total_holdings;
        document.getElementById('hut').innerHTML = companies_data.companies.find(x => x.name === 'Hut 8 Mining Corp').total_holdings;
        document.getElementById('coin').innerHTML = companies_data.companies.find(x => x.name === 'Coinbase').total_holdings;;
        document.getElementById('nexon').innerHTML = companies_data.companies.find(x => x.name === 'NEXON Co Ltd').total_holdings;;
        document.getElementById('voyag').innerHTML = companies_data.companies.find(x => x.name === 'Voyager Digital LTD').total_holdings;;


    }), 10000)
