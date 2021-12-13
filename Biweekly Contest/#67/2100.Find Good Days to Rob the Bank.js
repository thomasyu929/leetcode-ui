/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */

// https://leetcode.com/contest/biweekly-contest-67/problems/find-good-days-to-rob-the-bank/

 var goodDaysToRobBank = function(A, t) {
  let res = [];
  if (t === 0) {
    return [...new Array(A.length).keys()];
  }
  let before = [1], after = [1], n = A.length;
  
  let curr = 1;
  for (let i = 1; i < n; i++) {
    if (A[i] <= A[i-1]) {
      curr++;
    }
    else {
      curr = 1;
    }
    // count how many continous index of left / right
    before.push(curr);
  }
  
  curr = 1;
  for (let i = n-2; i >= 0; i--) {
    if (A[i+1] >= A[i]) {
      curr++;
    }
    else {
      curr = 1;
    }
    // need reverse
    after.unshift(curr);
  }
  
  for (let i = 0; i < n; i++) {
    // compare time+1, because count himself 
    if (t < before[i] && t < after[i]) {
      res.push(i);
    }
  }
  
  return res;
};