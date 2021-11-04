/**
 * @param {number[]} heights
 * @return {number}
 */

// https://leetcode.com/problems/largest-rectangle-in-histogram/

// Monotonic stack

var largestRectangleArea = function(heights) {
  let res = 0,
      stack = [];
  heights.push(0);
  for (let i = 0; i < heights.length; ++i) {
    while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
      let t = stack.pop();
      // the bottom of the stack always be the lowest height of the whole histogram;
      res = Math.max(res, heights[t] * (stack.length ? i - stack[stack.length - 1] - 1 : i));
    }
    stack.push(i);
  }
  
  return res;
};