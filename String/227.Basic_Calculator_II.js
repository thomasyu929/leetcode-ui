/**
 * @param {string} s
 * @return {number}
 */

// https://leetcode.com/problems/basic-calculator-ii/

var calculate = function(s) {
  let num = 0;
  let op = '+';
  let stack = [];
  
  for (let i = 0; i < s.length; ++i) {
    if (s[i].charCodeAt() >= 48) {
      num = num * 10 + +s[i];
    }
    if ((s[i].charCodeAt() < 48 && s[i] !== ' ') || i === s.length-1) {
      if (op === '+') {
        stack.push(num);
      }
      else if (op === '-') {
        stack.push(-num);
      }
      else {
        let val = stack.pop();
        if (op === '/') {
          stack.push(parseInt(val / num));
        }
        else {
          stack.push(val * num);
        }
      }
      op = s[i];
      num = 0;
    }
  }

  while (stack.length) {
    num += stack.pop();
  }
  
  return num;
};