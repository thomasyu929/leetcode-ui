/**
 * @param {number[]} arr
 * @return {number}
 */

// https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/

// Monotonic Stack
var mctFromLeafValues = function(arr) {
  let res = 0,
      stack = [Number.MAX_VALUE];
  
  // minimum monotonic stack: bigger to smaller..., put a MAX_VALUE at beginning.
  for (let leaf of arr) {
    while (stack.length && (stack[stack.length - 1] < leaf)) {
      let mid = stack.pop();
      res += mid * Math.min(stack[stack.length - 1], leaf);
    }
    stack.push(leaf);
  }
  
  while (stack.length > 2) {
    res += stack.pop() * stack[stack.length - 1];
  }
  
  return res;
};