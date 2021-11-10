/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/

var maxProfit = function(k, prices) {
  if (!prices.length) {
    return 0;
  }
  let n = prices.length;
  k = Math.min(k, Math.floor(n / 2));
  
  let buys = new Array(n).fill().map(() => new Array(k+1).fill(0));
  let sells = new Array(n).fill().map(() => new Array(k+1).fill(0));

  buys[0][0] = -prices[0]
  
  for (let i = 1; i <= k; ++i) {
    // we can't do anything at first day, so give a invalid value;
    sells[0][i] = buys[0][i] = -Number.MAX_VALUE;
  }
  
  for (let i = 1; i < n; ++i) {
    // set initial state for buys
    buys[i][0] = Math.max(buys[i-1][0], sells[i-1][0] - prices[i]); // if not set invalid value will get error on this part;
    
    for (let j = 1; j <= k; ++j) {
      // set the max profit based on sell or buy after k opreations on ith day;
      // only after sell it will as one transaction;
      buys[i][j] = Math.max(buys[i-1][j], sells[i-1][j] - prices[i]);
      sells[i][j] = Math.max(sells[i-1][j], buys[i-1][j-1] + prices[i]);
    }
  }

  return Math.max(...sells[n-1]);
};
