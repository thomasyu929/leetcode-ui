/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */

// https://leetcode.com/problems/watering-plants/

var wateringPlants = function(plants, capacity) {
  let res = 0;
  let current = capacity;
  for (let i = 0; i < plants.length-1 ; ++i) {
    res++;
    current -= plants[i];
    
    if (current < plants[i+1]) {
      res += (i + 1) * 2;
      current = capacity;
    }
  }
  
  return res + 1;
};