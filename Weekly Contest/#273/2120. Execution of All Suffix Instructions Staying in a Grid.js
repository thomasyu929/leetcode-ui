/**
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */

// https://leetcode.com/contest/weekly-contest-273/problems/execution-of-all-suffix-instructions-staying-in-a-grid/

var executeInstructions = function(n, startPos, s) {
  const dirs = { 'U': [-1, 0], 'D': [1, 0], 'L': [0, -1], 'R': [0, 1] };
  let res = [];
  for (let i = 0; i < s.length; ++i) {
    let cnt = 0;
    let pos = [...startPos];
    for (let j = i; j < s.length; ++j) {
      offset = dirs[s[j]];
      pos[0] += offset[0];
      pos[1] += offset[1];

      if (pos[0] < 0 || pos[0] >= n || pos[1] < 0 || pos[1] >= n) {
        break;
      }
      cnt++;
    }
    
    res.push(cnt);
  }
  
  return res;
};