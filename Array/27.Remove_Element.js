/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function(nums, val) {
//   let i = 0;
//   let n = nums.length;
  
//   while (i < n) {
//     if (nums[i] === val) {
//       [nums[i], nums[n-1]] = [nums[n-1], nums[i]];
//       nums.pop();
//       n = n - 1;
//     }
//     else {
//       i++;
//     }
//   }
  
//   // return nums;
// };

var removeElement = function(nums, val) {
  let j = 0;
  for (let x of nums) {
    if (x !== val) {
      nums[j] = x;
      j++;
    }
  }
  // It does not matter what you leave beyond the first k elements.
  return j;
}