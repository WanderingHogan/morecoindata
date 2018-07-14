There are hundreds of independent cryptocurrency markets around the world. Each market has it's own value for currencies trading on that market. Values are sometimes measured against the US Dollar, but often against other cryptocurrencies.

This tool continuously tracks various exchange rates for the top 10 cryptocurrencies across 3 markets. We will need to build in actual trading to create an arbitrage app.

To make this tool valuable, more currencies and exchanges will need to be continuously added. The cost of trades on different exchanges will need to be weighed, and the volume of trading on each market will need to be evaluated. We will also want to consider time it takes for a network to reconcile the trade - favoring fast transactions.

Basically - with all this information, we are taking a GIS methodology - least-cost-path analysis, to figure out what the best route through multiple exchanges would be to return the most profit, when accounting for trading costs/gas/etc. Basically, we will start with X quantity of Y cryptocurrency on one exchange, run it through our formula, which is constantly re-evaluating the best trade path, and auto-trade that currency, returning more coin in whatever denomination you start at.

Starting currencies: (top 10 based on market share from here: https://coinmarketcap.com/)
- Bitcoin BTC (slow transaction times, high cost)
- Ethereum ETH
- Ripple XRP
- Litecoin LTC
- NEM XEM
- Dash DASH
- Ethereum Classic ETC
- Monero XMR
- Stellar Lumens XLM
- Augur REP

Exchanges: BTC-E, Poloniex, 

kucoin: https://kucoinapidocs.docs.apiary.io/#
binance: https://github.com/binance-exchange/binance-official-api-docs/blob/master/rest-api.md
hitbtc: https://api.hitbtc.com/
coinex: https://github.com/coinexcom/coinex_exchange_api/wiki
