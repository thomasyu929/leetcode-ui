/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// https://leetcode-cn.com/problems/remove-duplicates-from-an-unsorted-linked-list/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicatesUnsorted = function(head) {
  // map
  // 1. if first time traversal find same node. delete;
  // 2. if all node in map no-duplcate. return directly, no need to traversal second time;
  if (!head || !head.next) {
    return head;
  }
  let m = {},
      hasDuplicates = false;
  let dummy = new ListNode(-1, head);
  let prev = dummy;
  while (prev.next) {
    if (m[prev.next.val]) {
      m[prev.next.val] += 1;
      // will remove all this duplicate nodes except first one of current value by this step;
      prev.next = prev.next.next;
      hasDuplicates = true;
    }
    else {
      m[prev.next.val] = 1;
      prev = prev.next;
    }
  }

  // if not has duplicates nodes in list just return dummy.next;
  if (!hasDuplicates) {
    return dummy.next;
  }

  prev = dummy;
  while (prev.next) {
    if (m[prev.next.val] > 1) {
      prev.next = prev.next.next;
    }
    else {
      prev = prev.next;
    }
  }
  
  return dummy.next;
};