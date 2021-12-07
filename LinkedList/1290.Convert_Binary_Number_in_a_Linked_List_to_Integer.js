/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
// var getDecimalValue = function(head) {
//   let bin = [];
//   let res = 0;
//   let count = 0;
//   while (head) {
//     bin.unshift(head.val);
//     count++;
//     head = head.next;
//   }
//   while(count) {
//     res += Math.pow(2, count - 1) * bin[count - 1];
//     count--;
//   }
//   return res
// }

var getDecimalValue = function(head) {
  let res = 0;
  while (head) {
    res = res * 2 + head.val;
    head = head.next;
  }
  
  return res;
}