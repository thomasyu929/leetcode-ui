/**
 * @param {number} n
 * @return {number}
 */

// https://leetcode-cn.com/problems/elimination-game/

var lastRemaining = function(n) {
  let left2Right = true;
  let a1 = 1, an = n, step = 1;

  while (n > 1) {
    if (left2Right) {
      a1 = a1 + step;
      an = n % 2 === 0 ? an : an - step;
    }
    else {
      a1 = n % 2 === 0 ? a1 : a1 + step;
      an = an - step;
    }

    left2Right = !left2Right;
    n >>= 1;
    step <<= 1;
  }

  return a1;
};