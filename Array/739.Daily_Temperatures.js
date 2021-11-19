/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

// https://leetcode.com/problems/daily-temperatures/

var dailyTemperatures = function(temperatures) {
  let n = temperatures.length;
  let res = new Array(n).fill(0);
  let stack = [];
  for (let i = 0; i < n; ++i) {
    while (stack.length && stack[stack.length - 1][0] < temperatures[i]) {
      let temp = stack.pop();
      res[temp[1]] = i - temp[1];
    }
    stack.push([temperatures[i], i]);
  }
    
  return res;
};