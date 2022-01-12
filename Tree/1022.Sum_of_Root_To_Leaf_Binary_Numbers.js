/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/

/**
 * @param {TreeNode} root
 * @return {number}
 */
 var sumRootToLeaf = function(root) {
  res = [0];
  getPathValue(root, '' + root.val, res);
  
  return res[0];
};

var getPathValue = function (root, val, res) {
  if (!root.left && !root.right) {
    res[0] += parseInt(val, 2);
    return;
  }
  
  if (root.left) {
    getPathValue(root.left, val + root.left.val, res);
  }
  
  if (root.right) {
    getPathValue(root.right, val + root.right.val, res);
  }
}
