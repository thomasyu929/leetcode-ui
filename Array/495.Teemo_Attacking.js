/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */

// https://leetcode.com/problems/teemo-attacking/

// var findPoisonedDuration = function(timeSeries, duration) {
//   let res = 0;
//   let curr = duration;
//   let start = 0;

//   for (let i = 1; i < timeSeries.length; ++i) {
//     if (timeSeries[i] !== timeSeries[i - 1]) {
//       if (timeSeries[i] - timeSeries[i - 1] > duration) {
//         res += curr;
//         start = i;
//         curr = duration;
//       }
//       else {
//         curr = timeSeries[i] - timeSeries[start] + duration;
//       }
//     }
//   }
//   res += curr;

//   return res;
// };

var findPoisonedDuration = function(timeSeries, duration) {
  let res = duration;
  for (let i = 1; i < timeSeries.length; ++i) {
    let diff = timeSeries[i] - timeSeries[i - 1];
    res += diff > duration ? duration : diff;
  }
  
  return res;
}
