/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */

// https://leetcode-cn.com/problems/heaters/

var findRadius = function(houses, heaters) {
  let m = houses.length, n = heaters.length, j = 0;
  let res = 0;

  houses.sort((a, b) => a - b);
  heaters.sort((a, b) => a - b);

  for (let i = 0; i < m; ++i) {
    let curr = houses[i];

    while (j < n - 1 && Math.abs(heaters[j] - curr) >= Math.abs(heaters[j+1] - curr)) {
      j++;
    }
    // after travesal, current heaters[j] is the left or right heater which is nearest one can cover current house;
    res = Math.max(res, Math.abs(heaters[j] - curr));
  }

  return res;
};