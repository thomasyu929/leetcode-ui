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

// https://leetcode.com/problems/reverse-linked-list/

// var reverseList = function(head) {
//   // prev represent previous node of current node;
//   let prev = null;
  
//   while (head) {
//     let curr = head;
//     head = head.next;
//     curr.next = prev;
//     prev = curr;
//   }
  
//   return prev;
// };

var reverseList = function(head) {
  if (!head) {
    return head;
  }
  let dummy = new ListNode(null, head);
  let prev = dummy;
  
  while (head.next) {
    let curr = prev.next;
    prev.next = head.next;
    head.next = head.next.next;
    prev.next.next = curr;
  }
  
  return dummy.next;
};