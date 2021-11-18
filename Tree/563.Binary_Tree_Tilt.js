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
 
//  https://leetcode-cn.com/problems/binary-tree-tilt/

var findTilt = function(root) {
  // we should use post order traversal to solve this problem
  let res = [0];
  helper(root, res);
  return res[0];
};

var helper = function(root, res) {
  if (!root) {
    return 0;
  }
  let leftSum = helper(root.left, res);
  let rightSum = helper(root.right, res);

  res[0] += Math.abs(leftSum - rightSum);

  return leftSum + rightSum + root.val;
}