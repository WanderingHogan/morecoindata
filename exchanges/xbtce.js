'use strict';

// TODO: remove this from polling and use suggested autobahn

const returnTicker = 'https://cryptottlivewebapi.xbtce.net:8443/api/v1/public/ticker';

module.exports = {
    sendRequest: function(request, reqTimeInUtc, client){
        // console.warn('DateTime ', reqTimeInUtc);
        let returnObs = {}
        let setterObj = []
        request(returnTicker, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                let info = JSON.parse(body)
                // const BTC_ETH = info['BTC_ETH'], //ethereum
                //       BTC_LTC = info['BTC_LTC'], // litecoin
                //       BTC_DASH = info['BTC_DASH'], // dash
                //       BTC_XRP = info['BTC_XRP'], // ripple
                //       BTC_XEM = info['BTC_XEM'], //nem
                //       BTC_ETC = info['BTC_ETC'], //ethereum classic
                //       BTC_XMR = info['BTC_XMR'], // monero
                //       BTC_REP = info['BTC_REP'], // augur
                //       BTC_ZEC = info['BTC_ZEC'],

                //       ETH_ETC = info['ETH_ETC'],
                //       ETH_REP = info['ETH_REP'],
                //       ETH_GNT = info['ETH_GNT'],
                //       ETH_ZEC = info['ETH_ZEC']
                    let arrayOfShit = [
                        ['ETHBTC', 'ETH_BTC'],
                        ['BTCGBP', 'BTC_GBP'],
                        ['USDCNH', 'USD_CNH'],
                        ['USDCHF', 'USD_CHF'],
                        ['USDRUB', 'USD_RUB'],
                        ['NMCBTC', 'NMC_BTC'],
                        ['GBPCHF', 'GBP_CHF'],
                        ['AUDCHF', 'AUD_CHF'],
                        ['NZDSGD', 'NZD_SGD'],
                        ['NMCUSD', 'NMC_USD'],
                        ['EURNZD', 'EUR_NZD'],
                        ['ETHCNH', 'ETH_CNH'],
                        ['GBPJPY', 'GBP_JPY'],
                        ['GBPUSD', 'GBP_USD'],
                        ['USDSGD', 'USD_SGD'],
                        ['HKDJPY', 'HKD_JPY'],
                        ['EURSEK', 'EUR_SEK'],
                        ['BTCEUR', 'BTC_EUR'],
                        ['USDNOK', 'USD_NOK'],
                        ['USDDKK', 'USD_DKK'],
                        ['LTCUSD', 'LTC_USD'],
                        ['AUDCAD', 'AUD_CAD'],
                        ['NZDCAD', 'NZD_CAD'],
                        ['USDMXN', 'USD_MXN'],
                        ['EURHKD', 'EUR_HKD'],
                        ['LTCRUB', 'LTC_RUB'],
                        ['USDCAD', 'USD_CAD'],
                        ['DSHUSD', 'DSH_USD'],
                        ['DSHCNH', 'DSH_CNH'],
                        ['LTCBTC', 'LTC_BTC'],
                        ['NOKSEK', 'NOK_SEK'],
                        ['GBPCAD', 'GBP_CAD'],
                        ['EURDKK', 'EUR_DKK'],
                        ['LTCJPY', 'LTC_JPY'],
                        ['GBPAUD', 'GBP_AUD'],
                        ['USDTRY', 'USD_TRY'],
                        ['EURPLN', 'EUR_PLN'],
                        ['BTCCNH', 'BTC_CNH'],
                        ['PPCUSD', 'PPC_USD'],
                        ['USDJPY', 'USD_JPY'],
                        ['AUDUSD', 'AUD_USD'],
                        ['PPCBTC', 'PPC_BTC'],
                        ['GBPSGD', 'GBP_SGD'],
                        ['ETHUSD', 'ETH_USD'],
                        ['ETHRUB', 'ETH_RUB'],
                        ['ETHBTC', 'ETH_BTC'],
                        ['EURCHF', 'EUR_CHF'],
                        ['USDSEK', 'USD_SEK'],
                        ['CADCHF', 'CAD_CHF'],
                        ['SGDJPY', 'SGD_JPY'],
                        ['EMCBTC', 'EMC_BTC'],
                        ['ETHJPY', 'ETH_JPY'],
                        ['EMCUSD', 'EMC_USD'],
                        ['EURAUD', 'EUR_AUD'],
                        ['EURTRY', 'EUR_TRY'],
                        ['NOKJPY', 'NOK_JPY'],
                        ['BTCUSD', 'BTC_USD'],
                        ['BTCRUB', 'BTC_RUB'],
                        ['EURNOK', 'EUR_NOK'],
                        ['EURCAD', 'EUR_CAD'],
                        ['AUDJPY', 'AUD_JPY'],
                        ['XRPEUR', 'XRP_EUR'],
                        ['GBPNZD', 'GBP_NZD'],
                        ['DSHBTC', 'DSH_BTC'],
                        ['USDPLN', 'USD_PLN'],
                        ['EURUSD', 'EUR_USD'],
                        ['BTCJPY', 'BTC_JPY'],
                        ['CADJPY', 'CAD_JPY'],
                        ['EURGBP', 'EUR_GBP'],
                        ['ETHLTC', 'ETH_LTC'],
                        ['LTCEUR', 'LTC_EUR'],
                        ['AUDNZD', 'AUD_NZD'],
                        ['XRPUSD', 'XRP_USD'],
                        ['NZDJPY', 'NZD_JPY'],
                        ['LTCCNH', 'LTC_CNH'],
                        ['CHFJPY', 'CHF_JPY'],
                        ['NZDCHF', 'NZD_CHF'],
                        ['NZDUSD', 'NZD_USD'],
                        ['MBTUSD', 'MBT_USD'],
                        ['EURJPY', 'EUR_JPY'],
                        ['USDHKD', 'USD_HKD']
                    ]
                    
                    arrayOfShit.map(function (element) {
                        setterObj.push(element, info[`${element}`].buy.toString())
                        returnObs[element] = info[`${element}`];
                    })
                    
                client.hmset("btc-e", setterObj
                // [
                //     "BTC_ETH", returnObs.BTC_ETH.highestBid, 
                //     "BTC_DASH", returnObs.BTC_DASH.highestBid,
                //     "BTC_LTC", returnObs.BTC_LTC.highestBid,
                //     "BTC_XRP", returnObs.BTC_XRP.highestBid,
                //     "BTC_XEM", returnObs.BTC_XEM.highestBid
                //     // "BTC_ETC", BTC_ETC.highestBid,
                //     // "BTC_XMR", BTC_XMR.highestBid,
                //     // "BTC_REP", BTC_REP.highestBid

                // ]
                , function (err, res) {});
                client.hgetall("btc-e", function(err, reply) {
                    console.log(reply);
                });
                client.hgetall("poloniex", function(err, reply) {
                    console.log(reply);
                });
                // let dataRecord = new ExchangeRecord({ exchange: 'polo', values: responseValues, timeRecorded: reqTimeInUtc })
                // dataRecord.save(function (err) {
                //     if (err) return handleError(err);
                // })
            }
        })
    }
};