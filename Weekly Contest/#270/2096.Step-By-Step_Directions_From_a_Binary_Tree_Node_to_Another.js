/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/

/**
 * @param {TreeNode} root
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
 var getDirections = function(root, startValue, destValue) {
  let res = '';
  let spath = find(root, startValue, '');
  let dpath = find(root, destValue, '');
  
  let i = 0;
  while (spath.length && dpath.length && spath[i] === dpath[i]) {
    i++;
  }
  
  for (let j = i; j < spath.length; ++j) {
    // if spath still exist, that proof start node level must lower than dest level;
    res += 'U';
  }
  
  return res + dpath.substring(i);
};

const find = (root, val, path) => {
  if (!root) {
    return '';
  }
  else if (root.val === val) {
    return path;
  }
  else {
    return find(root.left, val, path + 'L') + find(root.right, val, path + 'R');
  }
}