/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */

// https://leetcode.com/problems/accounts-merge/

var accountsMerge = function(accounts) {
  let n = accounts.length;
  let res = [];
  let visited = new Array(n).fill(0);
  let m = {};
  
  // record how many user of each email;
  for (let i = 0; i < n; ++i) {
    for (let j = 1; j < accounts[i].length; ++j) {
      if (m[accounts[i][j]]) {
        m[accounts[i][j]].push(i);
      }
      else {
        m[accounts[i][j]] = [i];
      }
    }
  }
  
  for (let i = 0; i < n; ++i) {
    if (visited[i]) {
      continue;
    }
    
    let queue = [i];
    let s = new Set();
    while (queue.length) {
      // whatever stack or queue not influence the result in this scenario. but the mind is BFS
      let temp = queue.shift();
      visited[temp] = 1;
      let mails = accounts[temp].slice(1);
      
      for (let mail of mails) {
        s.add(mail);
        
        for (let user of m[mail]) {
          if (visited[user]) {
            continue;
          }
          
          queue.push(user);
          visited[user] = 1;
        }
      }
    }
    res.push([accounts[i][0]].concat([...s].sort()));
  }
  
  return res;
};