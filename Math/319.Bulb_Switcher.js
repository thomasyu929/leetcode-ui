/**
 * @param {number} n
 * @return {number}
 */

// https://leetcode-cn.com/problems/bulb-switcher/

// Time limit
// var bulbSwitch = function(n) {
//   if (n === 0) {
//     return 0;
//   }
//   let bulbs = new Array(n).fill(1);

//   for (let i = 1; i < n; i+=2) {
//     bulbs[i] = 0;
//   }
//   for (let i = 2; i < n - 1; ++i) {
//     for (let j = i; j < n; j+=i+1){
//       bulbs[j] = bulbs[j] === 0 ? 1 : 0;
//     }
//   }
//   if (n > 2) {
//     bulbs[n-1] = bulbs[n - 1] === 0 ? 1 : 0;
//   }

//   return bulbs.filter(v => v === 1).length;
// };

// Math solution
// var bulbSwitch = function(n) {
//   let res = 1;
//   while (res * res <= n) {
//     res++;
//   }
//   return res - 1;
// }

var bulbSwitch = function(n) {
  return Math.floor(Math.sqrt(n));
}
