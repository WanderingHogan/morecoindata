'use strict';

// TODO: remove this from polling and use suggested autobahn

const returnTicker = 'https://poloniex.com/public?command=returnTicker'; // we need BTC_ETH, BTC_LTC, BTC_DASH

module.exports = {
    sendRequest: function (request, reqTimeInUtc, pool) {
        // console.warn('DateTime ', reqTimeInUtc);
        let returnObs = {}
        let setterObj = []
        request(returnTicker, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                let info = JSON.parse(body);
                let insertStatement = '';
                for (let a in info) {
                    let buyPrice = info[a].lowestAsk;
                    let sellPrice = info[a].highestBid;
                    let inputCurrency = a.split('_')[0].toUpperCase();
                    let outputCurrency = a.split('_')[1].toUpperCase();
                    // inputCurrency * buyPrice = how many outputCurrency you have
                    // outputCurrency / sellPrice = how many input currency you get
                    if (insertStatement.length === 0) {
                        insertStatement += `('Poloniex','${inputCurrency}', ${buyPrice}, '${outputCurrency}', ${sellPrice}, '${reqTimeInUtc}')`
                    } else {
                        insertStatement += `,('Poloniex','${inputCurrency}', ${buyPrice}, '${outputCurrency}', ${sellPrice}, '${reqTimeInUtc}')`
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