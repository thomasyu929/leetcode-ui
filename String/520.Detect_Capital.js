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

var detectCapitalUse = function(word) {
  let cap = word[0].toUpperCase();
  
  return word === word.toUpperCase() || word === word.toLowerCase() || (cap === word[0] && word.slice(1).toLowerCase() === word.slice(1));
};

