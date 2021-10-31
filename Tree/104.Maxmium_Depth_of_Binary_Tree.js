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
 * @return {number}
 */

// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// Time: O(n)
// Space: O(n)

// var maxDepth = function(root) {
//   if (!root) {
//     return 0;
//   }
//   let res = [Number.MIN_VALUE];
//   helper(res, 1, root);
//   return res;
// };

// var helper = (res, dep, node) => {
//   if (!node.left && !node.right) {
//     res[0] = Math.max(dep, res);
//     return;
//   }
//   if (node.left) {
//     helper(res, dep + 1, node.left);
//   }
//   if (node.right) {
//     helper(res, dep + 1, node.right);
//   }
// }

// More Simple way to recursive;

// var maxDepth = function(root) {
//   if (!root) {
//     return 0;
//   }
//   return Math.max(1 + maxDepth(root.left), 1 + maxDepth(root.right));
// }

var maxDepth = function(root) {
  if (!root) {
    return 0;
  }
  let res = 0;
  let queue = [root];
  while (queue.length) {
    // use level order traversal, every while loop means a new level - new depth;
    res++
    for (let i = queue.length; i > 0; --i) {
      let node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return res;
}