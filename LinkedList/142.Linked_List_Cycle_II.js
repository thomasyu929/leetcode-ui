/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// https://leetcode.com/problems/linked-list-cycle-ii
// 2(a + b) = a + n(b + c) + b;

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
  let slow = head,
      fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    
    if (fast === slow) {
      fast = head;
      while (fast !== slow) {
        fast = fast.next;
        slow = slow.next;
      }
      
      return fast;
    }
  }
  
  return null
};