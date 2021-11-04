/**
 * @param {string} s
 * @return {string[]}
 */

// https://leetcode.com/problems/restore-ip-addresses/

var restoreIpAddresses = function(s) {
  let res = [];
  // string s; possiable ip address, results array, how many range that was already allocated
  helper(s, '', res, 0);
  return res;
};

var helper = (s, ip, res, n) => {
  if (n === 4) {
    // if already allocated 4 ranges and traversal s; 
    if(s.length === 0) {
      res.push(ip);
    }
  }
  else {
    // ip each ranging from 0 to 255, has three digits, need to loop 3 times.
    // each time check is possiable to as one part of ip address, if not, pass, or allocate next range;
    for (let i = 1; i < 4; ++i) {
      if (s.length < i) {
        break;
      }
      let val = parseInt(s.slice(0, i));
      if (val.toString().length !== i || val > 255) {
        continue;
      }
      helper(s.slice(i), ip + s.slice(0, i) + (n === 3 ? '' : '.'), res, n + 1);
    }
  }
}