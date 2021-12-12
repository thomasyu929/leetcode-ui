/**
 * @param {number[]} nums
 * @return {number}
 */

// https://leetcode.com/contest/weekly-contest-271/problems/sum-of-subarray-ranges/

 var subArrayRanges = function(nums) {
  let n = nums.length;
  if (n <= 1) {
    return 0;
  }
  let m = {};
  for (let i = 0; i < n; i++) {
    m[i] = [nums[i], nums[i]];
  }
  let res = 0;
  for (let k = 2; k <= n; k++) {
    let sum = 0;
    for (let i = 0; i < n - k + 1; i++) {
      if (nums[i+k-1] < m[i][0]) {
        sum += m[i][1] - nums[i+k-1];
        m[i][0] = nums[i+k-1];
      }
      else if (nums[i+k-1] > m[i][1]) {
        sum += nums[i+k-1] - m[i][0];
        m[i][1] = nums[i+k-1];
      }
      else {
        sum += m[i][1] - m[i][0];
      }
    }
    res += sum
  }
  return res;
};