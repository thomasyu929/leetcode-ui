/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// https://leetcode-cn.com/problems/find-leaves-of-binary-tree/

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var findLeaves = function(root) {
  res = []
  while (root) {
    let leaves = [];
    root = remove(root, leaves);
    res.push(leaves);
  }

  return res;
};

var remove = (node, leaves) => {
  if (!node) {
    return null;
  }
  if (!node.left && !node.right) {
    leaves.push(node.val);
    return null;
  }
  node.left = remove(node.left, leaves);
  node.right = remove(node.right, leaves);

  return node;
}