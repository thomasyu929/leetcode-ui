/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// https://leetcode.com/problems/balanced-binary-tree

// Time: O(n);
// Space: O(n);

// var isBalanced = function(root) {
//   if (!root) {
//     return true;
//   }
//   if (Math.abs(helper(root.left) - helper(root.right)) > 1) {
//     return false;
//   };
//   return isBalanced(root.left) && isBalanced(root.right);
// };

// var helper = (node) => {
//   if (!node) {
//     return 0;
//   }
//   // get maxmium depth;
//   return 1 + Math.max(helper(node.left), helper(node.right));
// }

// Optimize way, check balanced or not when calculate depth;
// Time: O(n);
// Space: O(H);  Space complexity depends on binary tree the number of nodes;

var isBalanced = (root) => {
  return helper(root) !== -1;
}

var helper = (node) => {
  if (!node) {
    return 0;
  }
  let left = helper(node.left);
  let right = helper(node.right);

  if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
    return -1;
  }
  return 1 + Math.max(left, right);
}