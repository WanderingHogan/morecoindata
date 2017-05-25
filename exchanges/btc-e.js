'use strict';

// TODO: remove this from polling and use suggested autobahn

const returnTicker = 'https://btc-e.com/api/3/ticker/ltc_btc-dsh_btc-dsh_ltc-dsh_eth-eth_btc-eth_ltc-btc_usd-btc_rur-btc_eur-ltc_usd-ltc_rur-ltc_eur-nmc_usd-nmc_btc-nvc_btc-nvc_usd-usd_rur-eur_usd-eur_rur-ppc_btc-ppc_usd-dsh_usd-dsh_rur-dsh_eur-eth_usd-eth_eur-eth_rur'; // we need BTC_ETH, BTC_LTC, BTC_DASH

module.exports = {
    sendRequest: function(request, reqTimeInUtc, pool){
        let returnObs = {}
        let setterObj = []
        request(returnTicker, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                let info = JSON.parse(body);
                let insertStatement = '';
                for (let a in info) {
                    let buyPrice = info[a].buy;
                    let sellPrice = info[a].sell;
                    let inputCurrency = a.split('_')[0];
                    let outputCurrency = a.split('_')[1];
                    // inputCurrency * buyPrice = how many outputCurrency you have
                    // outputCurrency / sellPrice = how many input currency you get
                    if (insertStatement.length === 0) {
                        insertStatement += `('btc-e','${inputCurrency}', ${buyPrice}, '${outputCurrency}', ${sellPrice}, '${reqTimeInUtc}')`
                    } else {
                        insertStatement += `,('btc-e','${inputCurrency}', ${buyPrice}, '${outputCurrency}', ${sellPrice}, '${reqTimeInUtc}')`
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
                    console.log(result)
                    //  console.log(`INSERT INTO test (exchange, inputCurrency, buyPrice, outputCurrency, sellPrice, utcTime) VALUES ${insertStatement};`)
                });

            }
        })
    }
};