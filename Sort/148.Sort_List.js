/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// https://leetcode-cn.com/problems/sort-list/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var sortList = function(head) {
  if (!head || !head.next) {
    return head;
  }
  let slow = head, fast = head;
  let prev = slow;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  prev.next = null;
  return merge(sortList(head), sortList(slow));
};

var merge = function(l1, l2) {
  let dummy = new ListNode(null);
  let prev = dummy;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next;
    }
    else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }

  prev.next = l1 ? l1 : l2;

  return dummy.next;
}