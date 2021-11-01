/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// https://leetcode-cn.com/problems/count-univalue-subtrees

/**
 * @param {TreeNode} root
 * @return {number}
 */
 var countUnivalSubtrees = function(root) {
  let res = [0];
  helper(root, res, -1);
  return res;
};

var helper = (node, res, val) => {
  if (!node) {
    return true;
  }
  // post order traversal
  // left node or right node not meet requirement will return false;
  // remember to use single '|' not '||', cause it will not invoke right method once left check return true; 
  if (!helper(node.left, res, node.val) | !helper(node.right, res, node.val)) {
    return false;
  }
  // if left and right both same value, results plus one;
  res[0]++;
  // check current node if has same value;
  return node.val === val;
}