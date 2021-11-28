/**
 * @param {number[][]} graph
 * @return {number[][]}
 */

// https://leetcode.com/problems/all-paths-from-source-to-target/

// BFS
// var allPathsSourceTarget = function(graph) {
//   let res = [],
//       queue = [[0]];
//   let n = graph.length;
  
//   while (queue.length) {
//     let path = queue.pop();
    
//     if (path[path.length - 1] === n - 1) {
//       res.push(path);
//     }
//     else {
//       for (let child of graph[path[path.length - 1]]) {
//         queue.push(path.concat(child));
//       }
//     }
//   }
  
//   return res;
// };

// DFS
var allPathsSourceTarget = function(graph) {
  let res = [];
  let n = graph.length;

  let dfs = function (path) {
    if (path[path.length - 1] === n - 1) {
      res.push(path);
    }
    for (let child of graph[path[path.length - 1]]) {
      dfs(path.concat(child));
    }
  }

  dfs([0]);

  return res;
}