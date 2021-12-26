/**
 * @param {number} num
 * @return {boolean}
 */

// https://leetcode.com/contest/weekly-contest-273/problems/a-number-after-a-double-reversal/

var isSameAfterReversals = function(num) {
  let str = num.toString().split('').reverse().join('');
  let res = (+str).toString();
  
  return res.length === str.length;
};