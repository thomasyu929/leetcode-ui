/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

// https://leetcode.com/problems/reverse-nodes-in-k-group/

var reverseKGroup = function(head, k) {
  if (!head || !head.next) {
   return head;
  }
  let dummy = new ListNode(-1, head);
  let prev = dummy;
  while (head) {
    let i;
    let temp = head;
    for (i = 0; i < k; ++i) {
      if (!temp) {
        break;
      } 
      temp = temp.next;
    }
    if (i < k) {
      break;
    }
    
    for (let j = 0; j < k - 1; ++j) {
      let curr = prev.next;
      prev.next = head.next;
      head.next = head.next.next;
      prev.next.next = curr;
    }
    
    prev = head;
    head = head.next;
  }
  
  return dummy.next;
};