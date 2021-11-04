/**
 * @param {number[][]} heightMap
 * @return {number}
 */

// https://leetcode.com/problems/trapping-rain-water-ii/

// Time: O(m * n *log(m + n));
// Space: O(m * n);

var trapRainWater = function(heightMap) {
  let m = heightMap.length,
      n = heightMap[0].length,
      res = 0,
      mx = Number.MIN_SAFE_INTEGER;
  let pq = new MinPriorityQueue();
  let visited = new Array(m).fill().map(() => new Array(n).fill(false));
  let dirs = [[0,1], [0, -1], [1, 0], [-1, 0]];
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (i === 0 || j === 0 || i === m-1 || j === n-1) {
        pq.enqueue(i * n + j, heightMap[i][j]);
        visited[i][j] = true;
      }
    }
  }
  while (pq.size()) {
    let { priority, element } = pq.dequeue();
    let rc = element;
    let r = Math.floor(rc / n), c = rc % n;
    // the element get from priority queue is the lowest element;
    mx = Math.max(mx, priority);
    for (let dir of dirs) {
      let x = r + dir[0], y = c + dir[1];
      if (x >= m || x < 0 || y >= n || y < 0 || visited[x][y]) {
        continue;
      }
      visited[x][y] = true;
      if (mx > heightMap[x][y]) {
        // mx represent current sea level, it must can contain water height which is lower than itself.
        res += mx - heightMap[x][y];
      }
      pq.enqueue(x * n + y, heightMap[x][y])
    }
  }

  return res;
};