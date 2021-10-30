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

// Time: O(n); Space: O(n) -> space complexity depends on times of stack invoke, stack depth depends on Binary tree height, Worst case binary tree height equals the number of nodes;
// whatever recursive or iterative;

// var sumNumbers = function(root) {
//   let res = [0];
//   helper(root, root.val, res);
//   return res[0];
// };

// var helper = function(node, path, res) {
//   if (!node.left && !node.right) {
//     res[0] += path;
//   }
//   if (node.left) helper(node.left, path * 10 + node.left.val, res);
//   if (node.right) helper(node.right, path * 10 + node.right.val, res);
// }


var sumNumbers = (root) => {
  let res = 0;
  let stack = [root];
  while (stack.length) {
    let node = stack.pop();
    if (!node.left && !node.right) {
      res += node.val;
    }
    
    if (node.left) {
      node.left.val += node.val * 10;
      stack.push(node.left);
    }
    
    if (node.right) {
      node.right.val += node.val * 10;
      stack.push(node.right);
    }
  }
  
  return res;
}

