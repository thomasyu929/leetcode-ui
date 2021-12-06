/**
 * @param {number[]} digits
 * @return {number[]}
 */

// https://leetcode.com/problems/finding-3-digit-even-numbers/

var findEvenNumbers = function(digits) {
  let s = new Set();
  let n = digits.length;
  for (let i = 0; i < n; ++i) {
    let pos1 = i;
    if (digits[i] === 0) {
      continue;
    }
    for (let j = 0; j < n; ++j) {
      if (pos1 !== j) {
        let pos2 = j;
        for (let k = 0; k < n; ++k) {
          if (pos1 !== k && pos2 !== k) {
            let temp = digits[i] * 100 + digits[j] * 10 + digits[k];
            if (temp % 2 === 0) {
              s.add(temp);
            }
          }
        }
      }
    }

  }
  let res = Array.from(s);
  
  return res.sort((a,b) => a - b);
};