/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// https://leetcode.com/problems/house-robber-iii/

/**
 * @param {TreeNode} root
 * @return {number}
 */
 var rob = function(root) {
  let res = dfs(root);
  return Math.max(...res);
};

var dfs = function dfs(root) {
  let res = [0, 0];
  if (!root) {
    return res;
  }
  let left = dfs(root.left);
  let right = dfs(root.right);
  
  res[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
  res[1] = left[0] + right[0] + root.val;
  
  return res;
}