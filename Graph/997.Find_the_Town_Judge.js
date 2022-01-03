/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */

// https://leetcode-cn.com/problems/find-the-town-judge/

// var findJudge = function(n, trust) {
//   let m = new Array(n+1).fill().map(() => [0, 0]);
//   for (let i = 0; i < trust.length; ++i) {
//     m[trust[i][1]][1] += 1;
//     m[trust[i][0]][0] += 1;
//   }

//   for (let i = 1; i <= n; ++i) {
//     if (m[i][0] === 0 && m[i][1] === n - 1) {
//       return i;
//     }
//   }

//   return -1;
// };

var findJudge = function(n, trust) {
  let arr = new Array(n+1).fill(0);
  
  for (let i = 0; i < trust.length; ++i) {
    arr[trust[i][1]]++;
    arr[trust[i][0]]--;
  }
  
  for (let i = 1; i < n + 1; ++i) {
    if (arr[i] === n - 1) {
      return i;
    }
  }

  return -1;
};