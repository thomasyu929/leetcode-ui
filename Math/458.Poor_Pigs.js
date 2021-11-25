/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */

// https://leetcode-cn.com/problems/poor-pigs/
// shannon theorem

var poorPigs = function(buckets, minutesToDie, minutesToTest) {
  let times = Math.floor(minutesToTest / minutesToDie) + 1;
  let res = Math.ceil(Math.log(buckets) / Math.log(times));
  return res;
};