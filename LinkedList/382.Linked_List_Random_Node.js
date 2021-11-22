/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// https://leetcode.com/problems/linked-list-random-node/

/**
 * @param {ListNode} head
 */
 var Solution = function(head) {
  this.head = head;
};

/**
 * @return {number}
 */

// easy way is to count len then get random number and get the value in this list
// this way used reservoir sampling
Solution.prototype.getRandom = function() {
  let i = 0, val;
  let curr = this.head;
  
  while (curr) {
    i++;
    if (Math.floor(Math.random() * i) + 1 === i) {
      val = curr.val;
    }
    curr = curr.next;
  }
  
  return val;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */