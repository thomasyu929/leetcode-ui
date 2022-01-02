/**
 * @param {number[]} time
 * @return {number}
 */

// https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/

var numPairsDivisibleBy60 = function(time) {
  let res = 0;
  let m = new Map();
  
  for (let t of time) {
    let temp = (60 - t % 60) % 60;
    
    res += m.get(temp) || 0;
    m.set(t % 60, m.get(t % 60) ? m.get(t % 60)+1 : 1);   // in case t equals 60
  }
  
  return res;
};