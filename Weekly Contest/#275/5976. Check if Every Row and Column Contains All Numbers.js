/**
 * @param {number[][]} matrix
 * @return {boolean}
 */

// https://leetcode.com/contest/weekly-contest-275/problems/check-if-every-row-and-column-contains-all-numbers/

 var checkValid = function(matrix) {
  let n = matrix.length;
  for (let i = 0; i < n; ++i) {
    let s = new Set();
    
    for (let j = 0; j < n; ++j) {
      let len = s.size;
      s.add(matrix[i][j]);
      if (len === s.size) {
        return false;
      }
    }
    
    if (s.size !== n) {
      return false;
    }
  }
  
  for (let j = 0; j < n; ++j) {
    let s = new Set();
    for (let i = 0; i < n; ++i) {
      let len = s.size;
      s.add(matrix[i][j]);
      if (len === s.size) {
        return false;
      }
    }
    if (s.size !== n) {
      return false;
    }
  }
  
  return true
};