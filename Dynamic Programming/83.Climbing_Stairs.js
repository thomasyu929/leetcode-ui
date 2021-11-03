/**
 * @param {number} n
 * @return {number}
 */

// https://leetcode.com/problems/climbing-stairs/

// var climbStairs = function(n) {
//   let dp = new Array(n);
//   dp[0] = 1;
//   dp[1] = 2;

//   for (let i = 2; i < n + 1; ++i) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }
  
//   return dp[n - 1];
// };

var climbStairs = function(n) {
  let a = 1,
      b = 1;
  while(n--) {
    b += a;       // b like dp[i-1] + dp[i-2]
    a = b - a;    // make a to dp[i-1]
  }
  
  return a;
}