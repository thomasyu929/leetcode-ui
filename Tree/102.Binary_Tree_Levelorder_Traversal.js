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
 * @return {number[][]}
 */
// var levelOrder = function(root) {
//   if (!root) {
//     return []
//   }
//   let res = [];
//   let queue = [root];

//   while (queue.length) {
//     let path = [];
//     const n = queue.length;
//     for (let i = 0; i < n; i++) {
//       let node = queue.shift();
//       path.push(node.val);
//       if (node.left) {
//         queue.push(node.left);
//       }
//       if (node.right) {
//         queue.push(node.right);
//       }
//     }
//     res.push(path);
//   }
//   return res;
// };
let res;
var levelOrder = (root) => {
  if (!root) {
    return [];
  }
  res = [];
  helper(root, 0);
  return res;
}

var helper = (node, level) => {
  if (!node) {
    return;
  }
  if (res[level]) {
    res[level].push(node.val);
  } else {
    res[level] = [node.val];
  }
  if (node.left) {
    helper(node.left, level + 1);
  }
  if (node.right) {
    helper(node.right, level + 1);
  }
}