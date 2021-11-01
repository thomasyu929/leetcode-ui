/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */

// https://leetcode.com/problems/next-greater-node-in-linked-list/

// Mononic stack O(n) O(n)

var nextLargerNodes = function(head) {
  let res = [];
  let stack = [];
  let index = 0;
  while (head) {
    while (stack.length && stack[stack.length - 1][0].val < head.val) {
      let [node, i] = stack.pop();
      res[i] = head.val;
    }
    stack.push([head, index]);
    res[index] = 0;
    index++;
    head = head.next;
  }
  
  return res;
};