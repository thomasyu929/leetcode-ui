/**
 * @param {number[]} cost
 * @return {number}
 */

// https://leetcode.com/problems/min-cost-climbing-stairs/

// var minCostClimbingStairs = function(cost) {
//   let dp = new Array(cost.length);
//   dp[0] = 0;
//   dp[1] = 0;
//   for (let i = 2; i <= cost.length; ++i) {
//     // it require to reach final index, should be cost.length + 1;
//     dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
//   }
//   return dp[cost.length];
// };

var minCostClimbingStairs = function(cost) {
  let n = cost.length;
  let dp = new Array(n);
  // dp[i] means the cost of reach i + 1;
  dp[0] = cost[0], dp[1] = cost[1];
  for (let i = 2; i < n; ++i) {
    dp[i] = cost[i] + Math.min(dp[i-1], dp[i-2]);
  }
  
  // compare last two value which is the minimum value;
  return Math.min(dp[n - 1], dp[n - 2]);
}

// we can use a b to save some space;