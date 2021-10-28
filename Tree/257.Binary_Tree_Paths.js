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
 * @return {string[]}
 */

// var binaryTreePaths = function(root) {
//   let res = [];
//   if (!root) {
//     return res;
//   }
//   helper(root, "", res);
//   return res;
// };

// var helper = (node, path, res) => {
//   if (!node.left && !node.right) {
//     res.push(path + node.val);
//     return;
//   }
//   if (node.left) helper(node.left, path + node.val + '->', res);
//   if (node.right) helper(node.right, path + node.val + '->', res);
// }

var binaryTreePaths = (root) => {
  let res = [];
  if (!root) {
    return res;
  }
  let stack = [[root, '']];
  while (stack.length) {
    let [node, path] = stack.pop();
    if (!node.left && !node.right) {
      res.push(path + node.val);
    }
    if (node.left) {
      stack.push([node.left, path + node.val + '->']);
    }
    if (node.right) {
      stack.push([node.right, path + node.val + '->']);
    }
  }
  return res;
}