/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

// https://leetcode.com/problems/gas-station/

var canCompleteCircuit = function(gas, cost) {
  let n = gas.length;
  let temp = 0, total = 0;
  let start = 0;
  
  for (let i = 0; i < n; ++i) {
    temp += gas[i] - cost[i];
    total += gas[i] - cost[i];
    
    if (temp < 0) {
      start = i + 1;
      temp = 0;
    }
  }
  
  return total < 0 ? -1 : start
};