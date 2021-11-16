/**
 * @param {string} word
 * @return {boolean}
 */

//  https://leetcode-cn.com/problems/detect-capital/

var detectCapitalUse = function(word) {
  let uppers = 0;
  for (let a of word) {
    if (a.charCodeAt() < 97) {
      uppers++;
    }
  }

  return uppers === 0 || uppers === word.length || (word[0].charCodeAt() < 97 && uppers === 1);
};