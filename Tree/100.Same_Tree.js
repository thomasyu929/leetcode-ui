/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// var isSameTree = function(p, q) {
//   if (!p && !q) return true;
//   if (!p || !q) return false;
//   return q.val === p.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
// };

var isSameTree = function(p, q) {
  let stack = [p, q];

  while (stack.length) {
    let pnode = stack.pop(),
        qnode = stack.pop();
    if (!pnode && !qnode) continue;
    if ((!pnode && qnode) || (pnode && !qnode) || (pnode.val !== qnode.val)) {
      return false;
    }
    stack.push(pnode.right); stack.push(qnode.right);
    stack.push(pnode.left); stack.push(qnode.left);
  }
  
  return true;
}