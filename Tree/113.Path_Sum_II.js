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
 * @param {number} targetSum
 * @return {number[][]}
 */
// var pathSum = function(root, targetSum) {
//   let res = [];
//   if (!root) {
//     return res;
//   }
//   helper(res, [], targetSum, root);
//   return res;
// };

// var helper = (res, path, targetSum, node) => {
//   if (!node.left && !node.right) {
//     path.push(node.val);
//     if (path.reduce((a, b) => a + b, 0) === targetSum) {
//       res.push(path);
//     }
//     return;
//   }
//   if (node.left) {
//     helper(res, path.concat(node.val), targetSum, node.left);
//   }
//   if (node.right) {
//     helper(res, path.concat(node.val), targetSum, node.right);
//   }
// }

var pathSum = function(root, targetSum) {
  let res = [];
  if (!root) {
    return res;
  }
  let stack = [[root, targetSum - root.val, [root.val]]];
  while (stack.length) {
    let [node, sum, path] = stack.pop();
    
    if (!node.left && !node.right && sum === 0) {
      res.push(path);
    }
    
    if (node.left) {
      stack.push([node.left, sum - node.left.val, path.concat(node.left.val)]);
    }
    
    if (node.right) {
      stack.push([node.right, sum - node.right.val, path.concat(node.right.val)]);
    }
  }
  
  return res;
}