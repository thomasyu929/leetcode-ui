/**
 * @param {string} s
 * @return {string}
 */
// https://leetcode-cn.com/problems/to-lower-case/

 // except use built-in api
 var toLowerCase = function(s) {
  return [...s].map(c => {
    let code = c.charCodeAt();
    return code >= 65 && code <= 90
      ? String.fromCharCode(code + 32)
      : c;
  }).join('');
};