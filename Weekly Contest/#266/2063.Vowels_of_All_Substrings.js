/**
 * @param {string} word
 * @return {number}
 */

// https://leetcode.com/problems/vowels-of-all-substrings/

// var countVowels = function(word) {
//   let res = 0,
//       vowels = 'aeiou';
//   let n = word.length;
//   let counts = new Array(n).fill(0);
//   for (let i = 0; i < n; ++i) {
//     if(i === 0) {
//       counts[i] = n;
//     }
//     else {
//       let left = counts[i - 1] - i;
//       let right = n - i;
//       counts[i] = left + right;
//     }
//   }
  
//   for (let i = 0; i < n; ++i) {
//     if (vowels.indexOf(word[i]) >= 0) {
//       res += counts[i];
//     }
//   }
  
//   return res;
// };

// more conscise solution
var countVowels = function(word) {
  let res = 0,
      vowels = 'aeiou';
  let n = word.length;
  for (let i = 0; i < n; ++i) {
    if (vowels.indexOf(word[i]) >= 0) {
      // word[i] in [x, y], so there are i+1 choices for x and n-i choices for y.
      res += (n - i) * (i + 1);
    }
  }
  
  return res;
}