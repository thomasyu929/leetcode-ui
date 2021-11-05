/**
 * @param {number} n
 * @return {number}
 */

// https://leetcode.com/problems/arranging-coins/

// var arrangeCoins = function(n) {
//   let row = 1,
//       remain = n - 1;
//   while (remain >= row + 1) {
//     row++;
//     remain -= row;
//   }
//   return row
// };

// O(logn)
var arrangeCoins = function(n) {
  let left = 1, right = n;
  while (left < right) {
    let mid = Math.floor((right - left + 1) / 2) + left;
    let sum = mid * (mid + 1) / 2;
    if (sum > n) {
      right = mid - 1;
    }
    else {
      left = mid;
    }
  }
  
  return left;
}