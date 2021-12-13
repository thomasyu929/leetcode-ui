/**
 * @param {string} street
 * @return {number}
 */

// https://leetcode.com/contest/biweekly-contest-66/problems/minimum-number-of-buckets-required-to-collect-rainwater-from-houses/

var minimumBuckets = function(street) {
  // put right first
  let res = 0;
  let arr = street.split('')
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === 'H') {
      if (i > 0 && arr[i-1] === 'B') {
        continue;
      }
      else if (i < arr.length-1 && arr[i+1] === '.') {
        arr[i+1] = 'B';
        res++;
      }
      else if (i > 0 && arr[i-1] === '.') {
        arr[i-1] = 'B';
        res++;
      }
      else {
        return -1;
      }
    }
  }

  return res;
};