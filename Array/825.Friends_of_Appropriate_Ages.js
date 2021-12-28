/**
 * @param {number[]} ages
 * @return {number}
 */

// https://leetcode-cn.com/problems/friends-of-appropriate-ages/

// var numFriendRequests = function(ages) {
//   ages.sort((a, b) => a - b);
//   let left = 0, right = 0;
//   let n = ages.length;
//   let res = 0;

//   // 0.5 * age[x] + 7 < age[y] <= age[x]  -->  age[y] = age[x] = 14;
//   for (let age of ages) {

//     // not meet requirements;
//     if (age <= 14) {
//       continue;
//     }

//     while (ages[left] <= 0.5 * age + 7) {
//       left++;
//     }

//     while (right < n - 1 && ages[right+1] <= age) {
//       right++;
//     }

//     res += right - left;
//   }

//   return res;
// };

var numFriendRequests = function(ages) {
  let cnts = new Array(121).fill(0);
  let pres = new Array(121).fill(0);
  let res = 0;
  
  for (let age of ages) {
    cnts[age]++;
  }

  for (let i = 1; i < 121; ++i) {
    pres[i] = pres[i-1] + cnts[i];
  }

  for (let i = 15; i < 121; ++i) {
    res += cnts[i] * (pres[i] - pres[Math.floor(0.5 * i + 7)] - 1);
  }

  return res;
}