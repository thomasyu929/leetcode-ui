/**
 * @param {string} path
 * @return {string}
 */

// https://leetcode-cn.com/problems/simplify-path/

var simplifyPath = function(path) {
  let res = [];
  let i = 0;
  let n = path.length

  while (i < n) {
    while (path[i] === '/' && i < n) {
      i++;
    }
    if (i === n) {
      break;
    }
    let start = i;
    while (path[i] !== '/' && i < n) {
      i++;
    }
    let end = i;
    let str = path.substring(start, end);
    if (str === '..') {
      if (res.length) {
        res.pop();
      }
    }
    else if (str !== '.') {
      res.push(str);
    }
  }

  if (!res.length) {
    return '/';
  }

  return '/' + res.join('/');
};