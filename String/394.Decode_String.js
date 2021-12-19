/**
 * @param {string} s
 * @return {string}
 */
// s is guaranteed to be a valid input.
// https://leetcode.com/problems/decode-string/

var decodeString = function(s) {
  let k = 0, curr = '';
  let stack = [];
  
  for (let c of s) {
    if (c === '[') {
      stack.push([curr, k]);
      curr = '';
      k = 0;
    }
    else if (c === ']') {
      let [prev, cnt] = stack.pop();
      curr = prev + curr.repeat(cnt);
    }
    else if (!isNaN(+c)) {
      k = k * 10 + +c;
    }
    else {
      curr += c;
    }
  }
  
  return curr;
};