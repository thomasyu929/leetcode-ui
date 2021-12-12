/**
 * @param {string} rings
 * @return {number}
 */

// https://leetcode.com/contest/weekly-contest-271/problems/rings-and-rods/

 var countPoints = function(rings) {
  if (rings.length < 6) {
    return 0;
  }
  let robs = new Array(10).fill().map(() => new Set());

  for (let i = 0; i < rings.length - 1; i+=2) {
    robs[+rings[i+1]].add(rings[i]);
  }
  let res = 0;
  for (let s of robs) {
    if (s.size === 3) {
      res++;
    }
  }
  
  return res;
};