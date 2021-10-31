/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
 var nodesBetweenCriticalPoints = function(head) {
  let res = [-1, -1];
  if (!head.next) {
    return res;
  }
  let cps = [];
  let curr = 2;
  let prev = head;
  head = head.next;
  while (head.next) {
    if ((head.val > prev.val && head.val > head.next.val) || (head.val < prev.val && head.val < head.next.val)) {
      cps.push(curr);
    }
    curr++;
    prev = head;
    head = head.next;
  }
  if (cps.length > 1) {
    res[0] = Number.MAX_VALUE;
    res[1] = cps[cps.length - 1] - cps[0];
    for (let i = 0; i < cps.length - 1; i++) {
      res[0] = Math.min(res[0], cps[i + 1] - cps[i]);
    }
  }
  return res;
};