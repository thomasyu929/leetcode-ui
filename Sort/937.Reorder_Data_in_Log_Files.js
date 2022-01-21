/**
 * @param {string[]} logs
 * @return {string[]}
 */

// https://leetcode.com/problems/reorder-data-in-log-files/

var reorderLogFiles = function(logs) {
  let digits = [];
  let letters = [];
  
  for (let log of logs) {
    let temp = log.split(' ')[1];
    if (Number.isInteger(+temp)) {
      digits.push(log);
    }
    else {
      letters.push(log);
    }
  }
  
  letters.sort((a, b) => {
    a = a.split(' ');
    b = b.split(' ');

    return a.slice(1).join(' ').localeCompare(b.slice(1).join(' ')) || a[0].localeCompare(b[0]);
  })
  
  return letters.concat(digits);
};