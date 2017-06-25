## Exercise

Writing programming interview questions hasn't made me rich. Maybe trading Apple stocks will.
Suppose we could access yesterday's stock prices as a list, where:

The indices are the time in minutes past trade opening time, which was 9:30am local time.
The values are the price in dollars of Apple stock at that time.
So if the stock cost $500 at 10:30am, stock_prices_yesterday[60] = 500.

Write an efficient function that takes stock_prices_yesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

For example:

```js
stock_prices_yesterday = [10, 7, 5, 8, 11, 9]

getMaxProfit(stock_prices_yesterday)
// returns 6 (buying for $5 and selling for $11)
```

No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least 1 minute must pass).


## Solution

```js
function getMaxProfit(prices){
 if(prices.length < 2) throw Error('There should be at least 2 prices')

 let minPrice = prices[0];
 let maxProfit = prices[1] - prices[0];

 prices.forEach((currentPrice, index) => {
   if(index === 0){}
   else {
      let potentialProfit = currentPrice - minPrice;
      maxProfit = Math.max(maxProfit, potentialProfit);
      minPrice = Math.min(minPrice, currentPrice);
   }
 })

  return maxProfit;
}
```