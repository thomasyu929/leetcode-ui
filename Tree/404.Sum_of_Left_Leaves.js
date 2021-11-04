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

// https://leetcode.com/problems/sum-of-left-leaves/

// var sumOfLeftLeaves = function(root) {
//   let res = [0];
//   helper(root, 'right', res);
//   return res[0];
// };

// var helper = (node, pos, res) => {
//   if (!node.left && !node.right) {
//     if (pos === 'left') {
//       res[0] += node.val;
//     }
//     return;
//   }
  
//   if (node.left) {
//     helper(node.left, 'left', res);
//   }
//   if (node.right) {
//     helper(node.right, 'right', res);
//   }
// }

// var sumOfLeftLeaves = function(root) {
//   let res = 0;
//   let queue = [[root, false]];
//   while (queue.length) {
//     let [node, isLeft] = queue.shift();
//     if (!node.left && !node.right && isLeft) {
//       res += node.val;
//     }
//     if (node.left) {
//       queue.push([node.left, true]);
//     }
//     if (node.right) {
//       queue.push([node.right, false]);
//     }
//   }
  
//   return res;
// }

var sumOfLeftLeaves = function(root) {
  if (!root) {
    return 0;
  }
  if (root.left && !root.left.left && !root.left.right) {
    return root.left.val + sumOfLeftLeaves(root.right);
  }
  
  return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
}