/**
 * @param {number[]} position
 * @return {number}
 */

// https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/

var minCostToMoveChips = function(position) {
  let even = 0,
      odd = 0;

  for (let pos of position) {
    if (pos % 2) {
      odd++;
    }
    else {
      even++;
    }
  }

  return Math.min(odd, even);
};