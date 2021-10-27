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

// var inorderTraversal = function(root) {
//   let res = [];
//   let stack = [];
//   while (true) {
//     while (root) {
//       stack.push(root);
//       root = root.left;
//     }
//     if (stack.length === 0) {
//       return res
//     }
//     let node = stack.pop();
//     res.push(node.val);
//     root = node.right;    
//   }
  
//   return res;
// };

var inorderTraversal = (root) => {
  let res = [];
  if (!root) {
    return [];
  }
  res.push(...inorderTraversal(root.left));
  res.push(root.val);
  res.push(...inorderTraversal(root.right));
  
  return res;
}