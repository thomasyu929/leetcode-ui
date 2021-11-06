/**
 * @param {number[][]} intervals
 * @return {boolean}
 */

// https://leetcode-cn.com/problems/meeting-rooms/

var canAttendMeetings = function(intervals) {
  // 1 brute force
  //,.....
  // 2 sort by start time then check conflict
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < intervals.length - 1; ++i) {
    if (intervals[i][1] > intervals[i+1][0]) {
      return false;
    }
  }
  return true;
};