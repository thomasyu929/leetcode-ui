/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// https://leetcode.com/problems/reorder-list/

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderList = function(head) {
  if (!head || !head.next) {
    return;
  }
  
  let slow = head, fast = head;
  
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  
  let l1 = head, l2 = slow.next;
  slow.next = null;
  let prev = null;
  
  while (l2) {
    let curr = l2;
    l2 = l2.next;
    curr.next = prev;
    prev = curr;
  }
  l2 = prev;
  while (l2) {
    let tmp = l1.next;
    l1.next = l2;
    l2 = l2.next;
    l1.next.next = tmp;
    l1 = tmp;
  }
};

// use stack to store linklist. will get it
