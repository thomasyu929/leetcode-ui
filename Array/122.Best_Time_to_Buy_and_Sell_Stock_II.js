/**
 * @param {number[]} prices
 * @return {number}
 */

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

var maxProfit = function(prices) {
  let res = 0;
  for (let i = 0; i < prices.length; ++i) {
    // sell it when next day price is higher, that way will get highest profit at last.
    if (prices[i] < prices[i + 1]) {
      res += prices[i + 1] - prices[i];
    }
  }
  
  return res;
};