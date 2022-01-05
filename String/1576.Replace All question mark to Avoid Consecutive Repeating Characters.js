/**
 * @param {string} s
 * @return {string}
 */

// https://leetcode-cn.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/

var modifyString = function(s) {
  let arr = s.split('');
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === '?') {
      for (let j = 0; j < 3; ++j) {
        let temp = String.fromCharCode('a'.charCodeAt() + j);
        if ((i > 0 && arr[i-1] === temp) || (i < arr.length -1 && arr[i+1] === temp)) {
          continue;
        }
        else {
          arr[i] = temp;
          break;
        }
      }
    }
  }

  return arr.join('');
};