/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// https://leetcode.com/problems/add-binary/

var addBinary = function(a, b) {
  let biA = BigInt('0b' + a);
  let biB = BigInt('0b' + b);
  
  let res = biA + biB;
  return res.toString(2);
};


// other way is to use carry to count previous overflow value and add to current position;