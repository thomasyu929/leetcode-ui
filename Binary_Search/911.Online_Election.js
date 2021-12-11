/**
 * @param {number[]} persons
 * @param {number[]} times
 */

// https://leetcode-cn.com/problems/online-election/

var TopVotedCandidate = function(persons, times) {
  this.times = times;
  this.m = {};
  let n = persons.length,
      lead = 0;
  let count = new Array(n).fill(0);
  for (let i = 0; i < n; ++i) {
    // current time (i) persons[i] got 1 vote;
    if (++count[persons[i]] >= count[lead]) {
      lead = persons[i];
    }
    // count most vote person at current time
    this.m[times[i]] = lead;
  }
};

/** 
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function(t) {
  let left = 0, right = this.times.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (this.times[mid] <= t) {
      left = mid + 1;
    }
    else {
      right = mid
    }
  }

  return this.m[this.times[right - 1]];
};

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */