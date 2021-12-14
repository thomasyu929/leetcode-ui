/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// https://leetcode.com/problems/range-sum-of-bst/

/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
// var rangeSumBST = function(root, low, high) {
//   let res = 0;
//   let queue = [root];
//   while (queue.length) {
//     let node = queue.shift();
//     if (node.left) {
//       queue.push(node.left);
//     }
//     if (node.right) {
//       queue.push(node.right);
//     }
//     if (node.val >= low && node.val <= high) {
//       res += node.val;
//     }
//   }
  
//   return res;
// };

var rangeSumBST = function(root, low, high) {
  if (!root) {
    return 0;
  }
  let curr = root.val >= low && root.val <= high ? root.val : 0;
  return curr + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
}