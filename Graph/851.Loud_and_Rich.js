/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */

// https://leetcode-cn.com/problems/loud-and-rich/

var loudAndRich = function(richer, quiet) {
  let n = quiet.length;
  let findPoor = new Array(n).fill().map(() => []);
  let queue = [];
  let inDegree = new Array(n).fill(0);
  let res = new Array(n).fill(-1);

  for (let pair of richer) {
    if (findPoor[pair[0]]) {
      findPoor[pair[0]].push(pair[1])
    }
    else {
      findPoor[pair[0]] = [pair[1]]
    }

    inDegree[pair[1]]++;
  }

  for (let i = 0; i < n; ++i) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
    res[i] = i;
  }

  while (queue.length) {
    let curr = queue.shift();

    for (let next of findPoor[curr]) {
      if (quiet[res[next]] > quiet[res[curr]]) {
        res[next] = res[curr];
      }

      // be the richest person
      if (--inDegree[next] === 0) {
        queue.push(next);
      }
    }
  }

  return res;
};