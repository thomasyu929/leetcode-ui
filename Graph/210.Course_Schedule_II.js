/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

// https://leetcode.com/problems/course-schedule-ii/

var findOrder = function(numCourses, prerequisites) {
  
  let res = [];
  let queue = [];
  let graph = new Map();
  let indegrees = new Array(numCourses).fill(0);
  
  for (let pair of prerequisites) {
    graph.set(pair[1], graph.has(pair[1]) ? graph.get(pair[1]).concat(pair[0]) : [pair[0]]);
    indegrees[pair[0]]++;
  }
  
  for (let i = 0; i < indegrees.length; ++i) {
    if (indegrees[i] === 0) {
      queue.push(i);
    }
  }
  
  while (queue.length) {
    let idx = queue.shift();
    res.push(idx);
    
    if (!graph.has(idx)) {
      continue;
    }
    
    for (let i of graph.get(idx)) {
      indegrees[i]--;
      if (indegrees[i] === 0) {
        queue.push(i);
      }
    }
  }
  
  return res.length !== numCourses ? [] : res;
};