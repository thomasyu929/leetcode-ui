/**
 * @param {number[]} nums
 * @return {number}
 */

// https://leetcode.com/problems/single-number/

// var singleNumber = function(nums) {
//     let s = new Set();
//     for (let num of nums) {
//         if (s.has(num)) s.delete(num);
//         else s.add(num);
//     }
//     return [...s][0]
// };

var singleNumber = function(nums) {
  let res = 0;
  
  for (let num of nums) {
    res ^= num;
  }
  
  return res;
};
