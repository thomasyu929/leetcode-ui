/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// https://leetcode.com/problems/delete-node-in-a-bst/

/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */

// general solution for binary-tree not just BST need to grab more solution
var deleteNode = function(root, key) {
  if (!root) {
    return null;
  }
  
  if (root.val === key) {
    if (!root.right) {
      return root.left;
    }
    else {
      let curr = root.right;
      while (curr.left) {
        curr = curr.left;
      }
      let temp = root.val;
      root.val = curr.val;
      curr.val = temp;
    }
  }
  
  root.left = deleteNode(root.left, key);
  root.right = deleteNode(root.right, key);
  
  return root;
};