/**
 * @param {number} num
 * @return {boolean}
 */

// https://leetcode.com/problems/valid-perfect-square/

// not effciency
// var isPerfectSquare = function(num) {
//   if (num === 1) {
//     return true;
//   } 
//   let mid = Math.floor(num / 2);
//   while (mid > 1) {
//     if (num / mid === mid) {
//       return true;
//     }
//     mid--;
//   }
//   return false;
// };

// var isPerfectSquare = function(num) {
//   // traversal from 1 to n (which represent most near n * n = num)
//   for (let i = 1; i <= num / i; ++i) {
//     if (num === i * i) {
//       return true;
//     }
//   }
  
//   return false;
// }

// Dichotomy
var isPerfectSquare = function(num) {
  let left = 0,
      right = num;
  while (left <= right) {
    let mid = Math.floor((right - left) / 2) + left,
        temp = mid * mid;
    if (temp === num) {
      return true;
    }
    else if (temp > num) {
      right = mid - 1;
    }
    else {
      left = mid + 1;
    }
  }
  
  return false;
}