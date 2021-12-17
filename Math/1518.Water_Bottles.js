/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */

// https://leetcode-cn.com/problems/water-bottles/

var numWaterBottles = function(numBottles, numExchange) {
  let res = numBottles;
  while (numBottles >= numExchange) {
    let a = Math.floor(numBottles / numExchange);
    let b = numBottles % numExchange;
    
    // we count how many new beer we got
    res += a;
    numBottles = a + b; 
  }

  return res;
};