/**
 * @param {number[]} height
 * @return {number}
 */

// https://leetcode.com/problems/container-with-most-water/

var maxArea = function(height) {
  let left = 0,
      right = height.length - 1;
  res = 0;
  while (left < right) {
    let temp = Math.min(height[left], height[right]) * (right - left);
    res = Math.max(res, temp);
    
    // compare left height and right height;
    // move lower side, because if move higher side, will only get smaller area;
    if (height[left] < height[right]) {
      left++;
    }
    else {
      right--;
    }
  }
  
  return res;
};