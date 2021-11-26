/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
 
 // https://leetcode-cn.com/problems/search-in-a-binary-search-tree/

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
 // recursive
// var searchBST = function(root, val) {
//   if (root.val === val) {
//     return root;
//   }
//   else if (root.val > val) {
//     if (!root.left) return null;
//     return searchBST(root.left, val);
//   }
//   else {
//     if (!root.right) return null;
//     return searchBST(root.right, val);
//   }
// };

// iteration
var searchBST = function(root, val) {
  while (root && root.val !== val) {
    root = root.val > val ? root.left : root.right;
  }

  return root
}