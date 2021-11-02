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

// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii

var deleteDuplicates = function(head) {
  if (!head || !head.next) {
    return head;
  }
  let dummy = new ListNode(-1, head);
  let prev = dummy;
  while (prev.next) {
    let curr = prev.next;

    while (curr.next && curr.val === curr.next.val) {
      curr = curr.next;
    }
    // if curr.next not exist it will make prev.next to null;
    if (curr !== prev.next) {
      prev.next = curr.next;
    }
    else {
      prev = prev.next;
    }
  }
  
  return dummy.next;
};