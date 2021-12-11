/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */

// https://leetcode.com/problems/jump-game-iii/

var canReach = function(arr, start) {
  if (arr[start] === 0) {
    return true;
  }
  
  let n = arr.length;
  let visited = new Array(n).fill(false);
  let queue = [start];
  visited[start] = true;
  
  while (queue.length) {
    let idx = queue.shift();
    if (idx + arr[idx] < n && !visited[idx + arr[idx]]) {
      if (arr[idx + arr[idx]] === 0) {
        return true;
      }
      visited[idx + arr[idx]] = true;
      queue.push(idx + arr[idx]);
    }
    if (idx - arr[idx] >= 0 && !visited[idx - arr[idx]]) {
      if (arr[idx - arr[idx]] === 0) {
        return true;
      }
      visited[idx - arr[idx]] = true;
      queue.push(idx - arr[idx]);
    }
  }
  
  return false;
};