/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// https://leetcode.com/problems/minimum-depth-of-binary-tree/

/**
 * @param {TreeNode} root
 * @return {number}
 */

// Time: O(n)
// Space: O(n)

// var minDepth = function(root) {
//   if (!root) {
//     return 0;
//   }
//   let res = [Number.MAX_VALUE];
//   helper(Number.MAX_VALUE, 1, root);
//   return res;
// };

// var helper = (res, dep, node) => {
//   if (!node.left && !node.right) {
//     res[0] = Math.min(dep, res);
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

var minDepth = function(root) {
  if (!root) {
    return 0;
  }
  if (!root.left) return 1 + minDepth(root.right);
  if (!root.right) return 1 + minDepth(root.left);
  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
}

// var minDepth = function(root) {
//   if (!root) {
//     return 0;
//   }
//   let res = 0;
//   let queue = [root];
//   while (queue.length) {
//     // use level order traversal, every while loop means a new level - new depth;
//     res++;
//     for (let i = queue.length; i > 0; --i) {
//       let node = queue.shift();
//       if (!node.left && !node.right) {
//         return res;
//       }
//       if (node.left) {
//         queue.push(node.left);
//       }
//       if (node.right) {
//         queue.push(node.right);
//       }
//     }
//   }
//   return -1;
// }