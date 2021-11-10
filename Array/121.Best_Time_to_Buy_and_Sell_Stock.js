/**
 * @param {number[]} prices
 * @return {number}
 */

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function(prices) {
  let res = 0;
  let buy = Number.MAX_VALUE;
  for (let price of prices) {
    buy = Math.min(buy, price);
    res = Math.max(res, price - buy);
  }
  
  return res;
}