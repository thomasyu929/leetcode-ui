/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */

//https://leetcode.com/contest/weekly-contest-272/problems/adding-spaces-to-a-string/

var addSpaces = function(s, spaces) {
  let count = 0;
  let arr = [];
  for (let i = 0; i < spaces.length; ++i) {
    if (i === 0) {
      arr.push(...s.substring(0, spaces[i]), ' ');
      s = s.substring(spaces[i]);
    }
    else {
      arr.push(...s.substring(0, spaces[i] - spaces[i-1]), ' ');
      s = s.substring(spaces[i] - spaces[i-1]);
    }
  }
  
  return arr.join('') + s;
};