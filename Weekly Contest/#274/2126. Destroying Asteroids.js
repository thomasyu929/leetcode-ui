/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */

// https://leetcode.com/contest/weekly-contest-274/

 var asteroidsDestroyed = function(mass, asteroids) {
  asteroids.sort((a, b) => a - b);
  
  for (let a of asteroids) {
    if (mass < a) {
      return false;
    }
    mass += a;
  }
  
  return true;
};