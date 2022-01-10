/**
 * @param {string} num
 * @return {boolean}
 */

// https://leetcode-cn.com/problems/additive-number/

var isAdditiveNumber = function(num) {
  for (let i = 1; i < num.length; ++i) {
    let s1 = num.slice(0, i);
    if (s1.length > 1 && s1[0] === '0') {
      break;
    }

    for (let j = i + 1; j < num.length; ++j) {
      let s2 = num.slice(i, j);

      if (s2.length > 1 && s2[0] === '0') {
        break;
      }

      if (helper(num.slice(j), s1, s2)) {
        return true;
      }
    }
  }

  return false;
};


var helper = function(num, s1, s2) {
  if ((s1.length > 1 && s1[0] === '0') || (s2.length > 1 && s2[0] === '0')) {
    return false;
  }
  let str = (+s1 + +s2).toString();
  if (str === num) {
    return true;
  }

  if (str.length >= num.length || num.slice(0, str.length) !== str) {
    return false;
  }

  return helper (num.slice(str.length), s2, str);
}