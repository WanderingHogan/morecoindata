'use strict';

// TODO: This will have all cryptocurrencies we can match - normalize DSH and DASH for example, or full name to ticker switches

// module.exports = {
//     convolver: function (client) {
//         // console.warn('DateTime ', reqTimeInUtc);
//         let polo = client.hgetall("poloniex", function (err, reply) {
//             return reply;
//         });
//         let btce = client.hgetall("btc-e", function (err, reply) {
//             return reply;
//         });
//         for (var k in polo){
//             if (polo.hasOwnProperty(k)) {
//                 console.log("Key is " + k + ", value is" + polo[k]);
//             }
//         }
//     }
// };