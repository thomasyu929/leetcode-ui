/**
 * @param {number[]} plants
 * @param {number} capacityA
 * @param {number} capacityB
 * @return {number}
 */

// https://leetcode.com/contest/weekly-contest-271/problems/watering-plants-ii/

var minimumRefill = function(plants, capacityA, capacityB) {
  let res = 0;
  let cA = capacityA, cB = capacityB;
  let left = 0, right = plants.length-1;
  while (left < right) {
    if (plants[left] > cA) {
      res++;
      cA = capacityA - plants[left];
    }
    else {
      cA -= plants[left];
    }
  
    if (plants[right] > cB) {
      res++;
      cB = capacityB - plants[right];
    }
    else {
      cB -= plants[right];
    }

    left++;
    right--;
  }

  if (plants.length % 2) {
    if (Math.max(cA, cB) < plants[left]) {
      res++;
    }
  }

  return res;
};