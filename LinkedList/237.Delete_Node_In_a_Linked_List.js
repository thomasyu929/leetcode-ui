/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

// https://leetcode.com/problems/delete-node-in-a-linked-list/

var deleteNode = function(node) {
  // O(n) O(1)
  // just replace current node value with next node value, until to the end, then remove end node.
  node.val = node.next.val;
  node.next = node.next.next;
};