/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */

// https://leetcode.com/problems/minimum-height-trees/

 var findMinHeightTrees = function(n, edges) {
  // most 2 possible node can be root for MHT
  if (n === 1) {
    return [0];
  }
  let adj = new Array(n).fill().map(() => new Set());
  let queue = [];
  
  for (let edge of edges) {
    // count each node indegree
    adj[edge[0]].add(edge[1]);
    adj[edge[1]].add(edge[0]);
  }
  
  for (let i = 0; i < n; ++i) {
    if (adj[i].size === 1) {
      queue.push(i);
    }
  }
  
  while (n > 2) {
    size = queue.length;
    n -= size;
    
    for (let i = 0; i < size; ++i) {
      let t = queue.shift();
      
      for (let a of adj[t]) {
        adj[a].delete(t);
        if (adj[a].size === 1) {
          queue.push(a);
        }
      }
    }
  }
  
  return queue;
  
};