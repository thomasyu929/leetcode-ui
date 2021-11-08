/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */

// https://leetcode.com/problems/bulls-and-cows

var getHint = function(secret, guess) {
  let a = 0,
      b = 0;
  m = {};
  
  // first loop count bulls and store the number of position not guesst correct
  for (let i = 0; i < secret.length; ++i) {
    if (secret[i] === guess[i]) {
      a++;
    }
    else {
      m[secret[i]] = m[secret[i]] ? m[secret[i]]+1 : 1;
    }
  }

  // second loop get all not guess right postion but has right number;
  for (let i = 0; i < secret.length; ++i) {
    if (secret[i] !== guess[i] && m[guess[i]]) {
      b++;
      m[guess[i]]--;
    }
  }

  return `${a}A${b}B`;
};