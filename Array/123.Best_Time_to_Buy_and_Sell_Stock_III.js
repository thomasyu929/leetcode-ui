/**
 * @param {number[]} prices
 * @return {number}
 */

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii

var maxProfit = function(prices) {
  if (!prices.length) {
    return 0;
  }
  
  let buy1 = prices[0], buy2 = prices[0];
  let sell1 = 0, sell2 = 0;
  
  for (let price of prices) {
    buy1 = Math.min(buy1, price);
    sell1 = Math.max(sell1, price - buy1);
    buy2 = Math.min(buy2, price - sell1);
    sell2 = Math.max(sell2, price - buy2);
  }
  
  return sell2;
};