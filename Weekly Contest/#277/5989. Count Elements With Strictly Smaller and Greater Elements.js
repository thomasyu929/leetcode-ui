/**
 * @param {number[]} nums
 * @return {number}
 */
 var countElements = function(nums) {
  let mn = Number.MAX_SAFE_INTEGER, mx = Number.MIN_SAFE_INTEGER;
  let m = new Map();
  
  for (let num of nums) {
    m.set(num, m.get(num) ? m.get(num) + 1 : 1);
    mn = Math.min(mn, num);
    mx = Math.max(mx, num);
  }

  let res = nums.length - m.get(mn) - m.get(mx);
  
  return res > 0 ? res : 0;
};