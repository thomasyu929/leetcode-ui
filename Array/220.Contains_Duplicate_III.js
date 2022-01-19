/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */

// https://leetcode-cn.com/problems/contains-duplicate-iii/

// var containsNearbyAlmostDuplicate = function(nums, k, t) {
//   if (k === 0) {
//     return false;
//   }

//   for (let i = 0; i < nums.length; ++i) {
//     for (let j = i+1; j < i + k + 1; ++j) {
//       if (Math.abs(nums[j] - nums[i]) <= t) {
//         return true;
//       }
//     }
//   }

//   return false;
// };

// Bucket sort
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  let m = new Map();
  let n = nums.length;
  
  for (let i = 0; i < n; ++i) {
    let id = getID(nums[i], t + 1);
    
    if (m.has(id)) {
      return true;
    }
    if (m.has(id-1) && Math.abs(nums[i] - m.get(id-1)) <= t) {
      return true;
    }
    if (m.has(id+1) && Math.abs(nums[i] - m.get(id+1)) <= t) {
      return true;
    }
    
    m.set(id, nums[i]);
    
    if (i >= k) {
      m.delete(getID(nums[i-k], t + 1));
    }
  }
  
  return false;
}

function getID(v, w) {
  return v < 0 ? Math.floor((v + 1) / w) - 1 : Math.floor(v / w)
}