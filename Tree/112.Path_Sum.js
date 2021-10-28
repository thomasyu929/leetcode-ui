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
 * @return {boolean}
 */
// let res;
// var hasPathSum = function(root, targetSum) {
//   if (!root) {
//     return false;
//   }
//   res = 0;
//   helper(0, root, targetSum);
//   return res !== 0;
// };

// var helper = (sum, node, targetSum) => {
//   if (!node.left && !node.right) {
//     res += (sum + node.val) === targetSum ? 1 : 0;
//     return;
//   }
//   if (node.left) helper(sum + node.val, node.left, targetSum);
//   if (node.right) helper(sum + node.val, node.right, targetSum);
// }

// var hasPathSum = (root, targetSum) => {
//   if (!root) {
//     return false;
//   }
//   if (!root.left && !root.right && root.val === targetSum) {
//     return true;
//   }
//   return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
//   // use '||' because only need one path match the requirements it's enough.
// }

var hasPathSum = (root, targetSum) => {
  if (!root) return false;
  let stack = [root];
  while (stack.length) {
    let node = stack.pop();
    if (!node.left && !node.right && node.val === targetSum) {
      return true;
    }
    if (node.left) {
      node.left.val += node.val;
      stack.push(node.left);
    }
    if (node.right) {
      node.right.val += node.val;
      stack.push(node.right);
    }
  }
  
  return false;
}