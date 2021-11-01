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
 * @return {number[][]}
 */
 
 // O(n!) O(n)

 // https://leetcode-cn.com/problems/find-leaves-of-binary-tree/

// var findLeaves = function(root) {
//   res = []
//   while (root) {
//     let leaves = [];
//     root = remove(root, leaves);
//     res.push(leaves);
//   }

//   return res;
// };

// var remove = (node, leaves) => {
//   if (!node) {
//     return null;
//   }
//   if (!node.left && !node.right) {
//     leaves.push(node.val);
//     return null;
//   }
//   node.left = remove(node.left, leaves);
//   node.right = remove(node.right, leaves);

//   return node;
// }

var findLeaves = function(root) {
  let res = [];
  helper(root, res);
  return res;
}

var helper = function(node, res) {
  if (!node) {
    return -1;
  }
  let depth = 1 + Math.max(helper(node.left, res), helper(node.right, res));
  if (!res[depth]) {
      res[depth] = [];
  }
  res[depth].push(node.val);
  return depth;
}
