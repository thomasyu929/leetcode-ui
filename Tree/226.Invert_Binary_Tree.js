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
 * @return {TreeNode}
 */
// var invertTree = function(root) {
//   if (!root) return null;
//   let temp = root.left;
//   root.left = invertTree(root.right);
//   root.right = invertTree(temp);
//   return root;
// };

var invertTree = (root) => {
  if (!root) {
    return null;
  }
  let queue = [root];
  while (queue.length) {
    let node = queue.shift();
    let temp = node.left;
    node.left = node.right;
    node.right = temp;
    if (node.right) queue.push(node.right);
    if (node.left) queue.push(node.left);
  }
  
  return root;
}