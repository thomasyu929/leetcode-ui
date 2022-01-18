/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

// https://leetcode.com/problems/can-place-flowers/

var canPlaceFlowers = function(flowerbed, n) {
  let prev = -2;
  for (let i = 0; i < flowerbed.length; ++i) {
    if (flowerbed[i] === 0 && i - prev > 1) {
      if (i < flowerbed.length - 1 && flowerbed[i+1] === 1) {
        prev = i + 1;
        continue;
      }
      n--;
      prev = i;
    }
    else if (flowerbed[i] === 1) {
      prev = i;
    }
  }
  
  return n <= 0;
};