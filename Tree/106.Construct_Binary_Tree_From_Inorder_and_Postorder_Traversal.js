/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
 var buildTree = function(inorder, postorder) {
  if (!inorder.length || !postorder.length) {
    return null;
  }
  const value = postorder[postorder.length - 1];
  let i = 0;

  for (i = 0; i < inorder.length; i++) {
    if (inorder[i] === value) {
      break;
    }
  }
  const curr = new TreeNode(value);

  curr.left = buildTree(inorder.slice(0, i), postorder.slice(0, i));
  curr.right = buildTree(inorder.slice(i + 1, inorder.length), postorder.slice(i, postorder.length - 1));
  
  return curr;
};

// Optimize solution use map to store index, save time of loop in every recursive
var buildTree = function(inorder, postorder) {
  let m = {}
  for (let i = 0; i < inorder.length; ++i) {
    m[inorder[i]] = i; 
  }
  
  var helper = function(iLeft, iRight, pLeft, pRight) {
    if (iLeft > iRight || pLeft > pRight) {
      return null;
    }
    let value = postorder[pRight];
    let i = m[value];
    let curr = new TreeNode(value);

    curr.right = helper(i + 1, iRight, pLeft + i - iLeft, pRight -1);
    curr.left = helper(iLeft, i - 1 , pLeft, pLeft + i - iLeft - 1);

    return curr;
  }
  
  return helper(0, inorder.length - 1, 0, postorder.length - 1);
};

