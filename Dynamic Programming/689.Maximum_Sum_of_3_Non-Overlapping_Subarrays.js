/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSumOfThreeSubarrays = function(nums, k) {
  let n = nums.length,
      mx = Number.MIN_VALUE;
  let sums = [0],
      res = [],
      left = new Array(n).fill(0),
      right = new Array(n).fill(n - k);
  for (let num of nums) {
    sums.push(sums[sums.length - 1] + num);
  }

  // calculate left max subarray sum
  for (let i = k, total = sums[k] - sums[0]; i < n; ++i) {
    if (sums[i+1] - sums[i+1-k] > total) {
      total = sums[i+1] - sums[i+1-k];
      left[i] = i + 1 - k;
    }
    else {
      left[i] = left[i-1];
    }
  }

  // calculate right max subarray sum
  for (let i = n-k-1, total = sums[n] - sums[n-k]; i >= 0; --i) {
    if (sums[i+k] - sums[i] >= total) { //lexicographically sort
      total = sums[i+k] - sums[i];
      right[i] = i;
    }
    else {
      right[i] = right[i+1];
    }
  }

  // calculate mid sum and add them together compoare to get maximum value
  for (let i = k; i <= n - 2 * k; ++i) {
    let l = left[i-1], r = right[i+k];
    let total = sums[l+k] - sums[l] + sums[i+k] - sums[i] + sums[r+k] - sums[r];
    if (total > mx) {
      mx = total;
      res = [l, i, r];
    }
  }

  return res;
};