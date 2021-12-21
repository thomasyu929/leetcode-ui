/**
 * @param {string} date
 * @return {number}
 */

// https://leetcode-cn.com/problems/day-of-the-year/

var dayOfYear = function(date) {
  let [year, month, day] = date.split('-').map(s => +s);
  let mdays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    mdays[1]++;
  }
  let res = 0;

  for (let i = 0; i < month-1; ++i) {
    res += mdays[i];
  }

  return res + day;
};