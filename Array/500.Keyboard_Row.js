/**
 * @param {string[]} words
 * @return {string[]}
 */

// https://leetcode.com/problems/keyboard-row/

// var findWords = function(words) {
//   let res = [];
//   let row1 = new Set('qwertyuiop'.split(''));
//   let row2 = new Set('asdfghjkl'.split(''));
//   let row3 = new Set('zxcvbnm'.split(''));
//   for (let word of words) {
//     let one = 0,
//         two = 0,
//         three = 0;
//     for (let char of word) {
//       if (row1.has(char)) {
//         one = 1;
//       }
//       if (row2.has(char)) {
//         two = 1;
//       }
//       if (row3.has(char)) {
//         three = 1;
//       }
//       if (one + two + three > 1) {
//         break;
//       }
//     }
//     if (one + two + three === 1) {
//       res.push(word);
//     }
//   }

//   return res;
// };

var findWords = (words) => {
  let res = [];
  const lines = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
  let m = new Map();
  for (let i = 0; i < lines.length; ++i) {
    for (let char of lines[i]) {
      m.set(char, i);
    }
  }
 // Think about Lower case and Upper case
  for (let word of words) {
    let index = m.get(word[0].toLowerCase());
    for (let char of word) {
      if (m.get(char.toLowerCase()) !== index) {
        index = -1;
      }
    }
    if (index !== -1) {
      res.push(word);
    }
  }

  return res;
}