/**
 * @param {number[]} height
 * @return {number}
 */

// https://leetcode.com/problems/trapping-rain-water/

// var trap = function(height) {
//   // compare left and right height first, then traversal from the lower side.
//   // record the height difference when move on, until meet other side or higher one(switch to another side). 
  
//   let res = 0;
//   let left = 0,
//       right = height.length - 1;
//   while (left < right) {
//     if (height[left] < height[right]) {
//       let mx = height[left];
//       left++;
//       while (left < right && height[left] < mx) {
//         res += mx - height[left++];
//       }
//     }
//     else {
//       let mx = height[right];
//       right--;
//       while (left < right && height[right] < mx) {
//         res += mx - height[right--];
//       }
//     }
//   }
  
//   return res;
// };

// Monotonic Stack
var trap = function(height) {
  let res = 0;
  let stack = [];
  let i = 0,
      n = height.length;
  while (i < n) {
    if (stack.length && height[stack[stack.length - 1]] < height[i]) {
      let t = stack.pop();
      if (!stack.length) {
        continue;
      }
      res += (Math.min(height[stack[stack.length - 1]], height[i]) - height[t]) * (i - stack[stack.length - 1] - 1);
    }
    else {
      stack.push(i++);
    }
  }
  
  return res;
}