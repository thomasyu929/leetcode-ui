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
 * @return {number[]}
 */


// var preorderTraversal = function(root) {
//   let res = [];
//   if (!root) {
//     return res;
//   }
//   res.push(root.val);
//   res.push(...preorderTraversal(root.left));
//   res.push(...preorderTraversal(root.right));
  
//   return res;
// };

var preorderTraversal = (root) => {
  if (!root) {
    return [];
  }
  let res = [];
  let stack = [root];
  while (stack.length !== 0) {
    let node = stack.pop();

    res.push(node.val);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
  return res;
}