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
 var maxAncestorDiff = function(root) {
  return dfs(root, root.val, root.val);
};

var dfs = function (node, mx, mn) {
  if (!node) {
    return mx - mn;
  }
  
  mx = Math.max(mx, node.val);
  mn = Math.min(mn, node.val);
  
  return Math.max(dfs(node.left, mx, mn), dfs(node.right, mx, mn));
}