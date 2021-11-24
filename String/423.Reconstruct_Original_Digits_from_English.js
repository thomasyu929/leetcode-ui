/**
 * @param {string} s
 * @return {string}
 */
 
 // https://leetcode-cn.com/problems/reconstruct-original-digits-from-english/

 var originalDigits = function(s) {
  let res = [];
  const words = ['zero', 'two', 'four', 'six', 'eight', 'one', 'three', 'five', 'seven', 'nine'];
  const nums = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
  const chars = ['z', 'w', 'u', 'x', 'g', 'o', 'h', 'f', 's', 'i'];
  let counts = new Array(26).fill(0);

  for (let c of s) {
    counts[c.charCodeAt() - 'a'.charCodeAt()]++;
  }

  for (let i = 0; i < 10; ++i) {
    let cnt = counts[chars[i].charCodeAt() - 'a'.charCodeAt()];
    for (let j = 0; j < words[i].length; ++j) {
      // minor current alpha count
      counts[words[i][j].charCodeAt() - 'a'.charCodeAt()] -= cnt;
    }
    res.push(nums[i].toString().repeat(cnt));
  }

  return res.sort().join(''); 
};