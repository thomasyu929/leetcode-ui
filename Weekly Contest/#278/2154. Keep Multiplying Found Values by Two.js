/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
 var findFinalValue = function(nums, original) {
  let m = new Map();
  
  for (let num of nums) {
    m.set(num, 1);
  }
  res = original;
  while (m.has(res)) {
    res *= 2;
  }
  
  return res;
};