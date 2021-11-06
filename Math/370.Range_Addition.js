/**
 * @param {number} length
 * @param {number[][]} updates
 * @return {number[]}
 */

// https://leetcode-cn.com/problems/range-addition/

var getModifiedArray = function(length, updates) {
  let res = new Array(length).fill(0);
  for (let update of updates) {
    res[update[0]] += update[2];
    if (update[1] + 1 < length) {
      res[update[1] + 1] -= update[2];
    }
  }

  for (let i = 1; i < res.length; ++i) {
    res[i] += res[i - 1];
  }

  return res;
};