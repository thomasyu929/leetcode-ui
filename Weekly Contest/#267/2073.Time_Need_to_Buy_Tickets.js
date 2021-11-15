/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */

// https://leetcode.com/problems/time-needed-to-buy-tickets/

// var timeRequiredToBuy = function(tickets, k) {
//   let res = 0;
//   for (let i = 0; i <= k; ++i) {
//     if (tickets[i] > 0) {
//       tickets[i]--;
//       res+= 1;
//     }
//   }
//   let times = tickets[k];
//   for (let i = 0; i < times; ++i) {
//     for (let j = 0; j < tickets.length; ++j) {
//       if (tickets[j] > 0) {
//         tickets[j]--;
//         res += 1;
//       }
//     }
//   }
  
//   return res;
// };

var timeRequiredToBuy = function(tickets, k) {
  let res = 0;
  for (let i = 0; i < tickets.length; ++i) {
    if (i <= k) {
      res += Math.min(tickets[i], tickets[k]);
    }
    else {
      res += Math.min(tickets[i], tickets[k] - 1);
    }
  }
  
  return res;
}