/**
 * @param {number[][]} intervals
 * @return {number}
 */

// https://leetcode-cn.com/problems/meeting-rooms-ii/

// var minMeetingRooms = function(intervals) {
//   let starts = [], ends = [];
//   for (let i = 0; i < intervals.length; ++i) {
//     starts[i] = intervals[i][0];
//     ends[i] = intervals[i][1];
//   }

//   //sort start time and end time respectively
//   starts.sort((a, b) => a - b);
//   ends.sort((a, b) => a - b);

//   let pos = 0, res = 0;
//   for (let i = 0; i < starts.length; ++i) {
//     if (starts[i] < ends[pos]) {
//     // that means no rooms avaliable currently;
//       res++;
//     }
//     else {
//       pos++;
//     }
//   }

//   return res;
// };

// mini heap;
var minMeetingRooms = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let pq = new MinPriorityQueue();
  for (let interval of intervals) {
    // min priority queue top represent the earliest end meeting. if current meeting start time is larger than top of priority queue. 
    // that means we have room avaliable for this new meeting, and should pop the top one, because it's already used by the new one. 
    if (pq.size() && pq.front().element <= interval[0]) {
      pq.dequeue();
    }
    pq.enqueue(interval[1]);
  }

  return pq.size();
}