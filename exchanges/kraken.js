'use strict';

const returnTicker = `https://api.kraken.com/0/public/Ticker?pair=
    DASHEUR,DASHUSD,DASHXBT,GNOETH,GNOEUR,GNOUSD,GNOXBT,USDTZUSD,XETCXETH,
    XETCXXBT,XETCZEUR,XETCZUSD,XETHXXBT,XETHZCAD,XETHZEUR,XETHZGBP,XETHZJPY,
    XETHZUSD,XICNXETH,XICNXXBT,XLTCXXBT,XLTCZEUR,XLTCZUSD,XMLNXETH,XMLNXXBT,
    XREPXETH,XREPXXBT,XREPZEUR,XREPZUSD,XXBTZCAD,XXBTZEUR,XXBTZGBP,XXBTZJPY,
    XXBTZUSD,XXDGXXBT,XXLMXXBT,XXLMZEUR,XXLMZUSD,XXMRXXBT,XXMRZEUR,XXMRZUSD,
    XXRPXXBT,XXRPZCAD,XXRPZEUR,XXRPZJPY,XXRPZUSD,XZECXXBT,XZECZEUR,XZECZUSD`;

/*
https://www.kraken.com/en-us/help/api#get-ticker-info
<pair_name> = pair name
    a = ask array(<price>, <whole lot volume>, <lot volume>),
    b = bid array(<price>, <whole lot volume>, <lot volume>),
    c = last trade closed array(<price>, <lot volume>),
    v = volume array(<today>, <last 24 hours>),
    p = volume weighted average price array(<today>, <last 24 hours>),
    t = number of trades array(<today>, <last 24 hours>),
    l = low array(<today>, <last 24 hours>),
    h = high array(<today>, <last 24 hours>),
    o = today's opening price
 */

module.exports = {
    sendRequest: function (request, reqTimeInUtc, pool) {
        request(returnTicker, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                let info = JSON.parse(body);
                let insertStatement = '';
                // console.log(info.result)
                for (let thing in info.result) {
                    let buyPrice = info.result[thing]['a'][0];
                    let buyVolume = info.result[thing]['a'][1];
                    let sellPrice = info.result[thing]['b'][0];
                    let sellVolume = info.result[thing]['b'][1];
                    let inputCurrency;
                    let outputCurrency;
                    if(thing === 'DASHEUR'){
                        inputCurrency = 'DSH';
                        outputCurrency = 'EUR';
                    }
                    if(thing === 'DASHUSD'){
                        inputCurrency = 'DSH';
                        outputCurrency = 'USD';
                    }
                    if(thing === 'DASHXBT'){
                        inputCurrency = 'DSH';
                        outputCurrency = 'XBT';
                    }
                    if(thing === 'GNOETH'){
                        inputCurrency = 'GNO';
                        outputCurrency = 'ETH';
                    }
                    if(thing === 'GNOEUR'){
                        inputCurrency = 'GNO';
                        outputCurrency = 'EUR';
                    }
                    if(thing === 'GNOUSD'){
                        inputCurrency = 'GNO';
                        outputCurrency = 'USD';
                    }
                    if(thing === 'GNOXBT'){
                        inputCurrency = 'GNO';
                        outputCurrency = 'XBT';
                    }
                    if(thing === 'USDTZUSD'){
                        inputCurrency = 'USDT';
                        outputCurrency = 'USD';
                    }
                    if(thing === 'XETCXETH'){
                        inputCurrency = 'ETC';
                        outputCurrency = 'ETH';
                    }
                    if(thing === 'XETCXXBT'){
                        inputCurrency = 'ETC';
                        outputCurrency = 'XBT';
                    }
                    if(thing === 'XETCZEUR'){
                        inputCurrency = 'ETC';
                        outputCurrency = 'EUR';
                    }
                    if(thing === 'XETCZUSD'){
                        inputCurrency = 'ETC';
                        outputCurrency = 'USD';
                    }
                    if(thing === 'XETHXXBT'){
                        inputCurrency = 'ETH';
                        outputCurrency = 'XBT';
                    }
                    if(thing === 'XETHZCAD'){
                        inputCurrency = 'ETH';
                        outputCurrency = 'CAD';
                    }
                    if(thing === 'XETHZEUR'){
                        inputCurrency = 'ETH';
                        outputCurrency = 'EUR';
                    }
                    if(thing === 'XETHZGBP'){
                        inputCurrency = 'ETH';
                        outputCurrency = 'GBP';
                    }
                    if(thing === 'XETHZJPY'){
                        inputCurrency = 'ETH';
                        outputCurrency = 'JPY';
                    }
                    if(thing === 'XETHZUSD'){
                        inputCurrency = 'ETH';
                        outputCurrency = 'USD';
                    }
                    if(thing === 'XICNXETH'){
                        inputCurrency = 'ICN';
                        outputCurrency = 'ETH';
                    }
                    if(thing === 'XICNXXBT'){
                        inputCurrency = 'ICN';
                        outputCurrency = 'XBT';
                    }
                    if(thing === 'XLTCXXBT'){
                        inputCurrency = 'LTC';
                        outputCurrency = 'XBT';
                    }
                    if(thing === 'XLTCZEUR'){
                        inputCurrency = 'LTC';
                        outputCurrency = 'EUR';
                    }
                    if(thing === 'XLTCZUSD'){
                        inputCurrency = 'LTC';
                        outputCurrency = 'USD';
                    }
                    if(thing === 'XMLNXETH'){
                        inputCurrency = 'MLN';
                        outputCurrency = 'ETH';
                    }
                    if(thing === 'XMLNXXBT'){
                        inputCurrency = 'MLN';
                        outputCurrency = 'XBT';
                    }
                    if(thing === 'XREPXETH'){
                        inputCurrency = 'REP';
                        outputCurrency = 'ETH';
                    }
                    if(thing === 'XREPXXBT'){
                        inputCurrency = 'REP';
                        outputCurrency = 'XBT';
                    }
                    if(thing === 'XREPZEUR'){
                        inputCurrency = 'REP';
                        outputCurrency = 'EUR';
                    }
                    if(thing === 'XREPZUSD'){
                        inputCurrency = 'REP';
                        outputCurrency = 'USD';
                    }
                    if(thing === 'XXBTZCAD'){
                        inputCurrency = 'XBT';
                        outputCurrency = 'CAD';
                    }
                    if(thing === 'XXBTZEUR'){
                        inputCurrency = 'XBT';
                        outputCurrency = 'EUR';
                    }
                    if(thing === 'XXBTZGBP'){
                        inputCurrency = 'XBT';
                        outputCurrency = 'GBP';
                    }
                    if(thing === 'XXBTZJPY'){
                        inputCurrency = 'XBT';
                        outputCurrency = 'JPY';
                    }
                    if(thing === 'XXBTZUSD'){
                        inputCurrency = 'XBT';
                        outputCurrency = 'USD';
                    }
                    if(thing === 'XXDGXXBT'){
                        inputCurrency = 'XDG';
                        outputCurrency = 'XBT';
                    }
                    if(thing === 'XXLMXXBT'){
                        inputCurrency = 'XLM';
                        outputCurrency = 'XBT';
                    }
                    if(thing === 'XXLMZEUR'){
                        inputCurrency = 'XLM';
                        outputCurrency = 'EUR';
                    }
                    if(thing === 'XXLMZUSD'){
                        inputCurrency = 'XLM';
                        outputCurrency = 'USD';
                    }
                    if(thing === 'XXMRXXBT'){
                        inputCurrency = 'XMR';
                        outputCurrency = 'XBT';
                    }
                    if(thing === 'XXMRZEUR'){
                        inputCurrency = 'XMR';
                        outputCurrency = 'EUR';
                    }
                    if(thing === 'XXMRZUSD'){
                        inputCurrency = 'XMR';
                        outputCurrency = 'USD';
                    }
                   if(thing === 'XXRPXXBT'){
                        inputCurrency = 'XRP';
                        outputCurrency = 'XBT';
                    }
                    if(thing === 'XXRPZCAD'){
                        inputCurrency = 'XRP';
                        outputCurrency = 'CAD';
                    }
                    if(thing === 'XXRPZEUR'){
                        inputCurrency = 'XRP';
                        outputCurrency = 'EUR';
                    }
                    if(thing === 'XXRPZJPY'){
                        inputCurrency = 'XRP';
                        outputCurrency = 'JPY';
                    }
                    if(thing === 'XXRPZUSD'){
                        inputCurrency = 'XRP';
                        outputCurrency = 'USD';
                    }
                    if(thing === 'XZECXXBT'){
                        inputCurrency = 'ZEC';
                        outputCurrency = 'XBT';
                    }
                    if(thing === 'XZECZEUR'){
                        inputCurrency = 'ZEC';
                        outputCurrency = 'EUR';
                    }
                    if(thing === 'XZECZUSD'){
                        inputCurrency = 'ZEC';
                        outputCurrency = 'USD';
                    }
                    // console.log(info.result[thing], buyPrice, sellPrice)
                    // console.log(info[thing], '/n/n/n/n')
                //     let inputCurrency = a.split('_')[0];
                //     let outputCurrency = a.split('_')[1];
                //     // inputCurrency * buyPrice = how many outputCurrency you have
                //     // outputCurrency / sellPrice = how many input currency you get
                    if (insertStatement.length === 0) {
                        insertStatement += `('Kraken','${inputCurrency}', ${buyPrice}, '${outputCurrency}', ${sellPrice}, '${reqTimeInUtc}')`
                    } else {
                        insertStatement += `,('Kraken','${inputCurrency}', ${buyPrice}, '${outputCurrency}', ${sellPrice}, '${reqTimeInUtc}')`
                    }
                }


                /*
                    https://github.com/brianc/node-postgres/issues/880
                    INSERT INTO films (code, title, did, date_prod, kind) VALUES
                        ('B6717', 'Tampopo', 110, '1985-02-10', 'Comedy'),
                        ('HG120', 'The Dinner Game', 140, DEFAULT, 'Comedy');
                 */


                pool.query(`INSERT INTO test (exchange, inputCurrency, buyPrice, outputCurrency, sellPrice, utcTime) VALUES ${insertStatement};`, function (err, result) {
                    //  console.log(err)
                    // console.log(result)
                    //  console.log(`INSERT INTO test (exchange, inputCurrency, buyPrice, outputCurrency, sellPrice, utcTime) VALUES ${insertStatement};`)
                });

            }
        })
    }
};