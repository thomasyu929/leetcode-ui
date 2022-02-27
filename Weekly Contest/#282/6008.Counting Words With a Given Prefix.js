/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
 var prefixCount = function(words, pref) {
  let preLen = pref.length;
  let cnt = 0;

  for (let word of words) {
    if (word.substring(0, preLen) === pref) {
      cnt++;
    }
  }
  
  return cnt;
};