/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

 // https://leetcode-cn.com/problems/maximum-depth-of-n-ary-tree/

/**
 * @param {Node|null} root
 * @return {number}
 */
// var maxDepth = function(root) {
//   if (!root) {
//     return 0;
//   }
//   let res = [1];
//   for (let child of root.children) {
//     res[0] = Math.max(res[0], maxDepth(child) + 1);
//   }

//   return res[0];
// };

var maxDepth = function(root) {
  let res = [0];
  helper(root, 1, res);
  return res[0];
}

var helper = function(root, curr, res) {
  if (!root) {
    return
  }
  if (!root.children.length) { // reach leaf
    res[0] = Math.max(res[0], curr);
  }
  for (let child of root.children) {
    helper(child, curr + 1, res);
  }
}