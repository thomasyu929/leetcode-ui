/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */

// https://leetcode.com/problems/car-pooling/

var carPooling = function(trips, capacity) {
  let m = new Map();
  
  for (let t of trips) {
    m.set(t[1], m.get(t[1]) ? m.get(t[1]) + t[0] : t[0]);
    m.set(t[2], m.get(t[2]) ? m.get(t[2]) - t[0] : -t[0]);
  }
  
  m = new Map([...m.entries()].sort((a, b) => a[0] - b[0]))
  
  for (let v of [...m.values()]) {
    capacity -= v;
    
    if (capacity < 0) {
      return false;
    }
  }
  
  return true;
};