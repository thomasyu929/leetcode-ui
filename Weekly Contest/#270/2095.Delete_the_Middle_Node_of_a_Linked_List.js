/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/

// var deleteMiddle = function(head) {
//   if (!head.next) {
//     return null;
//   }
//   let len = 0;
//   let curr = head,
//       node = head;
//   let prev = head;
//   while (node) {
//     len++;
//     node = node.next;
//   }
//   let mid = Math.floor(len / 2);
//   while (mid--) {
//     curr = curr.next;
//   }
//   while (curr.next) {
//     curr.val = curr.next.val;
//     prev = curr;
//     curr = curr.next;
//   }
//   prev.next = null;
  
//   return head;
// };

var deleteMiddle = function(head) {
  let dummy = new ListNode(null);
  dummy.next = head;
  let prev = dummy;
  let fast = slow = head;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  
  prev.next = prev.next.next;
  return dummy.next;
}