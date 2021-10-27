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

// var postorderTraversal = function(root) {
//   let res = [];
//   if (!root) {
//     return res;
//   }
//   res.push(...postorderTraversal(root.left));
//   res.push(...postorderTraversal(root.right));
//   res.push(root.val);
  
//   return res;
// };

var postorderTraversal = (root) => {
  if (!root) {
    return [];
  }
  let res = [];
  let stack = [root];
  while (stack.length) {
    let node = stack[stack.length-1];
    if (node.left) {
      stack.push(node.left);
      node.left = null;
      
      // for postorder, current node, whatever left or right: not exist or already visited;
    }
    else if (node.right) {
      stack.push(node.right);
      node.right = null;
    }
    else res.push(stack.pop().val);
  }
  
  return res;
}