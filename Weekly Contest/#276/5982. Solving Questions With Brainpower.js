/**
 * @param {number[][]} questions
 * @return {number}
 */

// https://leetcode.com/contest/weekly-contest-276/problems/solving-questions-with-brainpower/

var mostPoints = function(questions) {
  let n = questions.length;
  let dp = new Array(n);
  dp[n-1] = questions[n-1][0];
  
  for (let i = n - 2; i >= 0; --i) {
    if (i + questions[i][1] + 1 >= n) {
      dp[i] = Math.max(questions[i][0], dp[i+1]);
    }
    else {
      dp[i] = Math.max(questions[i][0] + dp[i + questions[i][1] + 1], dp[i+1]);
    }
  }
  
  return dp[0];
};