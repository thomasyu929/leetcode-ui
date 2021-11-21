/**
 * @param {number[]} arr
 */

//https://leetcode.com/problems/range-frequency-queries/

let m = {};
var RangeFreqQuery = function(arr) {
  for (let i = 0; i < arr.length; ++i) {
    if (m[arr[i]]) {
      m[arr[i]].push(i);
    }
    else {
      m[arr[i]] = [i];
    }
  }
  
  return null;
};

/** 
 * @param {number} left 
 * @param {number} right 
 * @param {number} value
 * @return {number}
 */
RangeFreqQuery.prototype.query = function(left, right, value) {
  let left_bound = findLeftBound(m[value], left);
  let right_bound = findRightBound(m[value], right);
  // we need to find all index of value, which in [left, right];
  
  return right_bound - left_bound;
};

/** 
 * Your RangeFreqQuery object will be instantiated and called as such:
 * var obj = new RangeFreqQuery(arr)
 * var param_1 = obj.query(left,right,value)
 */

var findLeftBound = function(nums, val) {
  let left = 0,
      right = nums.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (val > nums[mid]) {
      left = mid + 1;
    }
    else {
      right = mid;
    }
  }
  
  return left;
}

var findRightBound = function(nums, val) {
  let left = 0,
      right = nums.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (val >= nums[mid]) {
      left = mid + 1;
    }
    else {
      right = mid;
    }
  }
  
  return left;
}