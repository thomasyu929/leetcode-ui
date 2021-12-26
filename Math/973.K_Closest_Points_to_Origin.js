/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
// var kClosest = function(points, k) {
//   return points.sort((a, b) => distance(a[0], a[1]) - distance(b[0], b[1])).slice(0, k);
// };

var distance = function (x, y) {
  return x * x + y * y;
}

// Priority Queue
var kClosest = function(points, k) {
  let res = [];
  let pq = new MinPriorityQueue({
    compare: (a, b) => {
      return distance(a[0], a[1]) > distance(b[0], b[1]) ? 1 : -1;
    }
  });
  
  for (let point of points) {
    pq.enqueue(point);
  }
  
  while (k--) {
    res.push(pq.dequeue());
  }
  
  return res;
}