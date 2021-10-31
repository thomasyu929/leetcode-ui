/**
 * Simplify Problem
 * Convert a number m to n with minimum operations. The operations allowed are:
 * 1. Multiply by 2;
 * 2. Subtract 1;
 */

// function convertMToN(m, n) {
//   if (m === n) {
//     return 0;
//   }
//   if (m < 0 && n > 0) {
//     return -1;
//   }
//   if (m > n) {
//     return m - n;
//   }
//   if (n % 2 === 0) {
//     return 1 + convertMToN(m, n / 2);
//   }
//   else {
//     return 1 + convertMToN(m, n + 1); //that's because n may equals 0;
//   }
// }


// TLE in javascript; check in future;

/**
 * @param {number[]} nums
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
 var minimumOperations = function(nums, start, goal) {
  // Noticed: -10^9 <= goal <= 10^9
  // Operations that set x to be out of the range 0 <= x <= 1000 are valid, but no more operations can be done afterward.
  let visited = new Array(1001).fill(false); // 0 <= x <= 1000 are valid;
  let res = 0;
  let queue = [start];
  
  while (queue.length) {
    let len = queue.length;
    
    // level-order
    while (len--) {
      let node = queue.shift();
      if (node === goal) {
        return res;
      }
      if (node > 1000 || node < 0 || visited[node]) {
        continue; // if node out of range [0, 1000], or already visited, no need to store operation value again;
      }
      visited[node] = true;
      for (let num of nums) {
        let a = node + num;
        let b = node - num;
        let c = node ^ num;
        for (let o of [a, b, c]) {
          queue.push(o);
        }
      }
    }
    // all posiable operation happened and then go to next operation. operations count plus 1;
    res++;
  }
  
  return -1;
};