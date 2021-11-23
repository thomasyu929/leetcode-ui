/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */

//https://leetcode-cn.com/problems/buddy-strings

// var buddyStrings = function(s, goal) {
//   if (s.length !== goal.length) {
//     return false;
//   }
//   if (s === goal) {
//     s1 = new Set(s);
//     return s1.size !== s.length;
//   }
//   let count = 0;
//   let prev1, prev2;
//   for (let i = 0; i < s.length; ++i) {
//     if (s[i] !== goal[i]) {
//       count++;
//       if (count === 1) {
//         prev1 = goal[i];
//         prev2 = s[i];
//       }
//       else if (count === 2) {
//         if (prev1 !== s[i] || prev2 !== goal[i]) {
//           return false;
//         }
//       }
//       else {
//         return false;
//       }
//     }
//   }

//   return count === 2;
// };

var buddyStrings = function(s, goal) {
  if (s.length !== goal.length) {
    return false;
  }
  let c1 = new Array(26).fill(0),
      c2 = new Array(26).fill(0);
  let count = 0;
  for (let i = 0; i < s.length; ++i) {
    let a = s[i].charCodeAt() - 'a'.charCodeAt(),
        b = goal[i].charCodeAt() - 'a'.charCodeAt();
    c1[a]++, c2[b]++;
    if (a !== b) {
      count++;
    }
  }

  let ok = false;
  for (let i = 0; i < c1.length; ++i) {
    if (c1[i] !== c2[i]) {
      return false;
    }
    if (c1[i] > 1) {
      ok = true;
    }
  }

  return count === 2 || (count === 0 && ok);
}