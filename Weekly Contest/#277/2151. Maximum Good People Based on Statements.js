/**
 * @param {number[][]} statements
 * @return {number}
 */

// https://leetcode.com/contest/weekly-contest-277/problems/maximum-good-people-based-on-statements/

var maximumGood = function(S) {
  let n = S.length;
  let states = new Array(n).fill(2);
  let res = [0];
  
  dfs(states, 0, 0);
  
  function dfs(s, i, cnt) {
    if (i === n) {
      if (check(s)) {
        res[0] = Math.max(res[0], cnt);
      }
      return;
    }
    
    s[i] = 0;
    dfs(s, i+1, cnt);
    s[i] = 1;
    dfs(s, i+1, cnt+1);
  }
  
  function check(s) {
    for (let i = 0; i < n; ++i) {
      if (s[i] === 1) {
        for (let j = 0; j < n; ++j) {
          if (S[i][j] !== 2 && S[i][j] !== s[j]) {
            return false;
          }
        }
      }
    }
    return true;
  }
  
  return res;
};

