// https://leetcode.com/contest/weekly-contest-280/problems/minimum-operations-to-make-the-array-alternating/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var minimumOperations = function(nums) {
  if (nums.length === 1) {
    return 0;
  }
  if (nums.length === 2) {
    return nums[0] === nums[1] ? 1 : 0
  }
  let odd = [0, 0],
      even = [0, 0];
  let odd1 = 0,
      even1 = 0;

  let n = nums.length;
  let m1 = {};
  let m2 = {};
  
  for (let i = 0; i < n; i++) {
    if (i % 2) {
      if (m2[nums[i]]) {
        m2[nums[i]] += 1;
      }
      else {
        m2[nums[i]] = 1;
      }
    }
    else {
      if (m1[nums[i]]) {
        m1[nums[i]] += 1;
      }
      else {
        m1[nums[i]] = 1;
      }
    }
  }
  
  Object.keys(m1).forEach(num => {
    if (even[1] <= m1[num]) {
      even1 = even[1];
      even = [num, m1[num]];
    }
    else if (even1 <= m1[num]) {
      even1 = m1[num];
    }
  })
  
  Object.keys(m2).forEach(num => {
    if (odd[1] <= m2[num]) {
      odd1 = odd[1];
      odd = [num, m2[num]];
    }
    else if (odd1 <= m2[num]) {
      odd1 = m2[num];
    }
  })

  if (even[0] === odd[0]) {
    if (even[1] > odd[1]) {
      return  n - even[1] - odd1;
    }
    else if (even[1] < odd[1]) {
      return n - odd[1] - even1;
    }
    else {
      return n - even[1] - Math.max(even1, odd1)
    }
  }
  
  return n - odd[1] - even[1];
};