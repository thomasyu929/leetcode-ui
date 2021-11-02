/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

// https://leetcode.com/problems/remove-linked-list-elements/submissions/

// var removeElements = function(head, val) {
//   if (!head) {
//     return head;
//   }
//   let dummy = new ListNode(-1, head);
//   let prev = dummy;
//   while (prev && prev.next) {
//     while (prev.next && prev.next.val === val) {
//       prev.next = prev.next.next;
//     }
//     prev = prev.next;
//   }
//   return dummy.next;
// };

// O(n) O(1);

var removeElements = function(head, val) {
  if (!head) {
    return head;
  }
  
  let curr = head;
  while (curr.next) {
    if (curr.next.val === val) {
      curr.next = curr.next.next;
    }
    else {
      curr = curr.next;
    }
  }
  
  return head.val === val ? head.next : head;
}