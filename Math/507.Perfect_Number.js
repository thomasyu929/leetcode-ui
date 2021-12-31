/**
 * @param {number} num
 * @return {boolean}
 */

// https://leetcode-cn.com/problems/perfect-number/

var checkPerfectNumber = function(num) {
  let sum = 1;
  for (let i = 2; i * i <= num; ++i) {
    let temp = num / i
    if (temp % 1 === 0) {
      sum += i + temp;
    }
  }

  return num !== 1 && num === sum;
};