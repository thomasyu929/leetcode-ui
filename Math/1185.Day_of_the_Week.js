/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */

// https://leetcode-cn.com/problems/day-of-the-week/

var dayOfTheWeek = function(day, month, year) {
  const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];

  let days = day + 4;
  for (let i = 1971; i < year; ++i) {
    days += 365;

    if (i % 400 === 0 || (i % 4 === 0 && i % 100)) {
      days++;
    }
  }

  for (let i = 0; i < month - 1; ++i) {
    days += monthDays[i];
    if (i === 1 && (year % 400 === 0 || (year % 4 === 0 && year % 100))) {
      days++;
    }
  }

  days %= 7;

  return week[days];
};