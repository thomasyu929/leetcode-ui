/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// https://leetcode.com/problems/k-radius-subarray-averages/

var getAverages = function(nums, k) {
  let n = nums.length;
  let divisor = 2 * k + 1;
  let res = new Array(n).fill(-1);
  
  if (k === 0) {
    return nums;
  }
  if (divisor > n) {
    return res;
  }
  
  let temp = nums.slice(0, divisor).reduce((a, b) => a + b, 0);
  res[k] = Math.floor(temp / divisor);
  
  for (let i = k + 1; i < n; ++i) {
    if (n - i - 1 < k) {
      break;
    }
    else {
      temp += nums[i+k] - nums[i-k-1];
      res[i] = Math.floor(temp / (2 * k + 1));
    }
  }
  
  return res;
};