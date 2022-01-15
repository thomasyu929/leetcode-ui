/**
 * @param {number} n
 * @return {number}
 */

// https://leetcode-cn.com/problems/calculate-money-in-leetcode-bank/

var totalMoney = function(n) {
  // S = 0.5 * n * (a1 + an)
  // an = a1 + 6

  let last = n % 7;
  let week = Math.floor(n / 7);
  let start = 1;
  let res = 0;

  for (let i = 1; i <= week; ++i) {
    res += 0.5 * 7 * (start + start + 6);
    start += 1;
  }

  res += 0.5 * last * (start + start + last - 1);

  return res;
};