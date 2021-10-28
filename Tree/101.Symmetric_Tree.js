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
 * @return {boolean}
 */
// var isSymmetric = function(root) {
//   return helper(root.left, root.right);
// };

// const helper = (node1, node2) => {
//   if (!node1 && !node2) return true;
//   if (!node1 || !node2) return false;
//   return node1.val === node2.val && helper(node1.left, node2.right) && helper(node1.right, node2.left);
// }

var isSymmetric = (root) => {
  // if (!root.left || !root.right)
  let queue1 = [root.left],
      queue2 = [root.right];
  while (queue1.length && queue2.length) {
    let node1 = queue1.shift();
    let node2 = queue2.shift();
    if (!node1 && !node2) continue;
    if ((node1 && !node2) || (!node1 && node2) || (node1.val !== node2.val)) return false;
    queue1.push(node1.left);
    queue1.push(node1.right);
    queue2.push(node2.right);
    queue2.push(node2.left);
  }
  return true;
}
