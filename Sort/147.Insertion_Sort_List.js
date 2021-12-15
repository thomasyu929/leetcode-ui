/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// https://leetcode.com/problems/insertion-sort-list/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var insertionSortList = function(head) {
  let dummy = new ListNode(null);
  while (head) {
    let curr = dummy;
    
    while (curr.next && curr.next.val <= head.val) {
      curr = curr.next;
    }
    let temp = curr.next;
    curr.next = head;
    head = head.next;
    curr.next.next = temp
  }
  
  return dummy.next;
};