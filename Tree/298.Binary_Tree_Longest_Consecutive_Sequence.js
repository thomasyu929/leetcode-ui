// https://leetcode-cn.com/problems/binary-tree-longest-consecutive-sequence/**

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
// var longestConsecutive = function(root) {
//   let res = [0];
//   helper(root, root.val, 0, res);
//   return res;
// };

// const helper = (node, val, out, res) => {
//   if (!node) {
//     return;
//   }

//   if (node.val === val + 1) {
//     ++out;
//   }
//   else {
//     out = 1;
//   }

//   res[0] = Math.max(out, res[0]);

//   // next node, current node value, temporarily max length, result.
//   helper(node.left, node.val, out, res);
//   helper(node.right, node.val, out, res);
// }

// Divide and Conquer
// var longestConsecutive = function(root) {
//   let res = [0];
//   helper (root, 1, res);
//   return res;
// }

// var helper = (node, out, res) => {
//   res[0] = Math.max(out, res[0]);
//   if (node.left) {
//     if (node.val + 1 === node.left.val) {
//       helper(node.left, out + 1, res);
//     }
//     else {
//       helper(node.left, 1, res);
//     }
//   }
//   if (node.right) {
//     if (node.val + 1 === node.right.val) {
//       helper(node.right, out + 1, res);
//     }
//     else {
//       helper(node.right, 1, res);
//     }
//   }

//   return;
// }

// iterative
var longestConsecutive = function(root) {
  let res = 0;
  let queue = [root];
  while (queue.length) {
    let len = 1;
    let node = queue.shift();
    while ((node.left && node.left.val === node.val + 1) || (node.right && node.right.val === node.val + 1)) {
      if (node.left && node.left.val === node.val + 1) {
        if (node.right) {
          queue.push(node.right);
        }
        node = node.left;
      }
      else if (node.right && node.right.val === node.val + 1) {
        if (node.left) {
          queue.push(node.left);
        }
        node = node.right;
      }
      len++;
    }
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
    res = Math.max(res, len);
  }

  return res;
}