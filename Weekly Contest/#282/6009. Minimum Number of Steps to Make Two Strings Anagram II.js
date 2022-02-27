/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
  
  let arr = new Array(26).fill(0);
  
  for (let c of s) {
    arr[c.charCodeAt() - 'a'.charCodeAt()]++;
  }
  
  for (let c of t) {
    arr[c.charCodeAt() - 'a'.charCodeAt()]--;
  }
  
  let res = 0;
  
  for (let cnt of arr) {
    if (cnt !== 0) {
      res += Math.abs(cnt);
    }
  }
  
  return res;
};