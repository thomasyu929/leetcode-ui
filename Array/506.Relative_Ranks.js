/**
 * @param {number[]} score
 * @return {string[]}
 */

// https://leetcode.com/problems/relative-ranks/

var findRelativeRanks = function(score) {
  const top = ["Gold Medal","Silver Medal","Bronze Medal"];
  let rank = [...score].sort((a, b) => b - a);
  let res = new Array(score.length);
  let m = {};
  for (let i = 0; i < score.length; ++i) {
    m[[rank[i]]] = i;
  }
  for (let i = 0; i < score.length; ++i) {
    const x = m[score[i]];
    res[i] = x > 2 ? x + 1 + "" : top[x];
  }

  return res;
};