/**
 * @param {number[]} beans
 * @return {number}
 */
 var minimumRemoval = function(beans) {
  let n = beans.length;
  let prefix = new Array(n).fill(0);
  let suffix = new Array(n).fill(0);
  
  beans.sort((a, b) => a - b);
  
  prefix[0] = 0;
  suffix[n-1] = 0;
  for (let i = 1; i < n; ++i) {
    prefix[i] = prefix[i-1] + beans[i-1];
  }
  
  for (let i = n-2; i >= 0; --i) {
    suffix[i] = suffix[i+1] + (n - i -1) * (beans[i+1] - beans[i]);
  }
  console.log(suffix, prefix)
  let res = Number.MAX_VALUE;
  for (let i = 0; i < n; ++i) {
    res = Math.min(res, prefix[i] + suffix[i]);
  }
  
  return res;
};