/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 
 // https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/

 var findAnagrams = function(s, p) {
  if (s.length < p.length) {
    return [];
  }
  let m1 = new Array(26).fill(0),
      m2 = new Array(26).fill(0);

  let res = [];

  for (let i = 0; i < p.length; ++i) {
    m1[s[i].charCodeAt() - 'a'.charCodeAt()]++;
    m2[p[i].charCodeAt() - 'a'.charCodeAt()]++;
  }

  if (m1.toString() === m2.toString()) {
    res.push(0);
  }

  for (let i = p.length; i < s.length; ++i) {
    m1[s[i].charCodeAt() - 'a'.charCodeAt()]++;
    m1[s[i - p.length].charCodeAt() - 'a'.charCodeAt()]--;

    if (m1.toString() === m2.toString()) {
      res.push(i - p.length + 1);
    }
  }

  return res;
};