/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// https://leetcode-cn.com/problems/maximize-sum-of-array-after-k-negations/

 var largestSumAfterKNegations = function(nums, k) {
  let res = 0,
      mn = Number.MAX_VALUE;
  nums.sort((a, b) => a - b);

  // Sometimes you have to do tow loops, don't always try to push all logic to one loop
  for (let i = 0; i < nums.length && nums[i] < 0 && k > 0; ++i, --k) {
    nums[i] *= -1;
  }
  for (let num of nums) {
    res += num;
    mn = Math.min(mn, num);
  }
  
  return res - k % 2 * 2 * mn;
};