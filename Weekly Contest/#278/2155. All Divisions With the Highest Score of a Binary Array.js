/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var maxScoreIndices = function(nums) {
  let n = nums.length;
  let sum = new Array(n+1).fill(0);
  let res = [];
  let mx = 0;

  for (let i = 0; i < n; ++i) {
    sum[i+1] = sum[i] + nums[i];
  }
  
  for (let i = 0; i <= n; ++i) {
    let score = i - sum[i] + sum[n] - sum[i];
    if (score > mx) {
      mx = score;
      res = [i];
    }
    else if (score === mx) {
      res.push(i);
    }
  }
  
  return res;
};