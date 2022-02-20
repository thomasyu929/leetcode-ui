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
 var mergeNodes = function(head) {
  let cnt = 0;
  let temp = 0;
  let dummy = new ListNode(null);
  let prev = dummy;
  while (head) {
    if (head.val === 0) {
      cnt += 1;
      if (cnt > 1) {
        prev.next = new ListNode(temp);
        temp = 0;
        prev = prev.next;
      }
    }
    else {
      temp += head.val;
    }
    
    head = head.next;
  }
  
  return dummy.next;
};