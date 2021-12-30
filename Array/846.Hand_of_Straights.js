/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */

https://leetcode-cn.com/problems/hand-of-straights/

var isNStraightHand = function (hand, groupSize) {
  hand.sort((a, b) => a - b);
  const map = hand.reduce((acc, n) => acc.set(n, (acc.get(n) || 0) + 1), new Map());
  for (const n of hand) {
      if (!map.get(n)) continue;
      for (let i = 0; i < groupSize; i++) {
          if (!map.get(n + i)) return false;
          else map.set(n + i, map.get(n + i) - 1);
      }
  }
  return true;
};