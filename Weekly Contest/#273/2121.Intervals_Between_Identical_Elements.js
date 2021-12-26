/**
 * @param {number[]} arr
 * @return {number[]}
 */

// https://leetcode.com/contest/weekly-contest-273/problems/intervals-between-identical-elements/

var getDistances = function(arr) {
  let m = {};
  let n = arr.length;
  let pre = new Array(n).fill(0);
  let suf = new Array(n).fill(0);
  let intervals = [];
  
  for (let i = 0; i < n; ++i) {
    if (m[arr[i]]) {
      m[arr[i]].push(i);
    }
    else {
      m[arr[i]] = [i];
    }
  }
  
  for (let key in m) {
    let nums = m[key];
    for (let i = 1; i < nums.length; ++i) {
      pre[nums[i]] = pre[nums[i-1]] + i * (nums[i] - nums[i-1]);
    }

    for (let i = nums.length-2; i >= 0; --i) {
      suf[nums[i]] = suf[nums[i+1]] + (nums.length - i - 1) * (nums[i+1] - nums[i]);
    }
  }
  for (let i = 0; i < n; ++i) {
    intervals.push(pre[i] + suf[i]);
  }
  
  
  return intervals;
};