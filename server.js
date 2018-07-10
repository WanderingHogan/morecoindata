// load 3rd party libs
const request = require('request-promise');
      Pool = require('pg').Pool;

// connect to mongo and load config
const env = require('./config/database.js'),
      environment = new env();

var pool = new Pool(environment.pgconfig);

const kraken = require('./exchanges/kraken.js'),
      polo = require('./exchanges/poloniex.js');
    //       = require('./exchanges/bittrex.js');

// const nodeEth = require('./currencyNodes/eth.js');

// load exchanges
setInterval(function() {
    let utcDateTime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    btcE.sendRequest(request, utcDateTime, pool); // uses async/await because route for each currency
    // polo.sendRequest(request, utcDateTime, pool);
    // kraken.sendRequest(request, utcDateTime, pool);

//     bttx.sendRequest(request, utcDateTime, ExchangeRecord);
}, (environment.pollFrequencyInSeconds * 1000)); // 30 second intervals, 
// }, 2000); // for testing, 2 second intervals

console.log('running the database populator microservice...')