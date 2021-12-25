/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// https://leetcode-cn.com/problems/even-odd-tree/

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isEvenOddTree = function(root) {
  let nodes = [];
  queue = [root];
  while (queue.length) {
    let path = [];
    let len = queue.length;
    for (let i = 0; i < len; ++i) {
      let node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }

      if ((nodes.length % 2 === 1 && node.val % 2 === 0 && (path.length === 0 || path[path.length-1] > node.val))
        || (nodes.length % 2 === 0 && node.val % 2 === 1 && (path.length === 0 || path[path.length-1] < node.val))) {
        path.push(node.val);
      }
      else {
        return false;
      }
    }
    nodes.push(path);
  }

  return true
};