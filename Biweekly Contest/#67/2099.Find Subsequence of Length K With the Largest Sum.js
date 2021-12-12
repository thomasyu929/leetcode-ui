/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// https://leetcode.com/contest/biweekly-contest-67/problems/find-subsequence-of-length-k-with-the-largest-sum/

var maxSubsequence = function(nums, k) {
  let n = nums.length;
  let res = nums.slice(0, k);
  
  for (let i = k ; i < n; ++i) {
    let mn = res.reduce((x, y, idx, arr) => arr[x] > y ? idx : x, 0);

    if (res[mn] < nums[i]) {
      res.splice(mn, 1);
      res.push(nums[i]);
    }
  }
  
  return res;
};