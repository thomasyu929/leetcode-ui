/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
 var divideString = function(s, k, fill) {
  let arr = s.split('');
  let res = [];
  
  while (arr.length >= k) {
    let group = arr.splice(0, k).join('');
    res.push(group);
  }

  
  if (arr.length && k - arr.length > 0) {
    let last = arr.join('') + fill.repeat(k - arr.length);
    res.push(last)
  }

  
  return res;
};