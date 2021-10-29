/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  let m = new Map();
  for (let i = 0; i < nums.length; ++i) {
    x = target - nums[i];
    if (m.has(x)) {
      return [m.get(x), i];
    }
    else {
      m.set(nums[i], i)
    }
  }
  
  return;
};