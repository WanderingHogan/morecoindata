CREATE TABLE test (
    exchange       varchar(20),
    inputCurrency  varchar(10),
    buyPrice       numeric,
    outputCurrency varchar(10),
    sellPrice      numeric,
    utcTime        timestamp
);


## sorting example, need to figure out multiple instead of adding transvals
SELECT a.*, b.*, c.*, a.transVal + b.transVal + c.transVal AS sumVal
FROM test AS a, test AS b, test AS c
WHERE a.pairb = b.paira AND b.pairb = c.paira AND a.paira = 'ETH' AND c.pairb = 'ETH'
ORDER BY sumVal DESC