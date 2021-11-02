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

// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

// var deleteDuplicates = function(head) {
//   let prev = head,
//       curr = head;
//   while (curr) {
//     if (prev.val === curr.val) {
//       curr = curr.next;
//     }
//     else {
//       prev.next = curr;
//       prev = prev.next;
//     }
//   }
//   if (prev) {
//     prev.next = null;
//   }
  
//   return head;
// };

// var deleteDuplicates = function(head) {
//   let curr = head;
//   while (curr && curr.next) {
//     if (curr.val === curr.next.val) {
//       // jump to next node if value same
//       curr.next = curr.next.next;
//     }
//     else {
//       // if value not same never mind
//       curr = curr.next;
//     }
//   }
//   return head;
// }

var deleteDuplicates = function(head) {
  if (!head || !head.next) {
    return head;
  }
  
  head.next = deleteDuplicates(head.next);
  return head.val === head.next.val ? head.next : head;
}
