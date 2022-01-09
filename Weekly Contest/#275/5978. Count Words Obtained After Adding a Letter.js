/**
 * @param {string[]} startWords
 * @param {string[]} targetWords
 * @return {number}
 */
 var wordCount = function(startWords, targetWords) {
  let m = startWords.length, n = targetWords.length;
  let res = 0;
  let s = new Set();

  for (let i = 0; i < m; ++i) {
    startWords[i] = startWords[i].split('').sort().join('');
    s.add(startWords[i]);
  }
  
  for (let i = 0; i < n; ++i) {
    targetWords[i] = targetWords[i].split('').sort().join('');
  }
  
  for (let target of targetWords) {
    for (let i = 0; i < target.length; ++i) {
      let tmp = target.split('');
      tmp.splice(i, 1);
      
      if (s.has(tmp.join(''))) {
        res++;
        break;
      }
    }
  }
  
  
  return res;
};