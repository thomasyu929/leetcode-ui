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

// https://leetcode.com/problems/reverse-nodes-in-even-length-groups/

var reverseEvenLengthGroups = function(head) {
  if (!head || !head.next) {
    return head;
  }
  let loop = head,
      prev = head;
  let count = 0;
  
  while (loop) {
    count += 1;
    let temp = loop;
    let k;

    for (k = 0; k < count; ++k) {
      if (!temp) {
        break;
      }
      temp = temp.next;
    }
    
    if (k < count) {
      count = k;
    }

    if (count % 2 > 0) {
      for (let i = 0; i < count; ++i) {
        if (!loop) {
          break;
        }
        prev = loop;
        loop = loop.next;
      }
    }
    else {
      for (let i = 0; i < count - 1; ++i) {
        if (!loop.next) {
          break;
        }
        let curr = prev.next;
        prev.next = loop.next;
        loop.next = loop.next.next;
        prev.next.next = curr;
      }
      prev = loop;
      loop = loop.next;
    }
  }
  
  return head;
};
