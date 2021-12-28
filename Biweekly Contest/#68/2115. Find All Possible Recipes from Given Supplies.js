/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */

// https://leetcode.com/contest/biweekly-contest-68/problems/find-all-possible-recipes-from-given-supplies/

var findAllRecipes = function(recipes, ingredients, supplies) {
  let s = new Set();
  let graph = {};
  let indegrees = {};
  
  let res = [];
  let n = recipes.length;
  
  for (let supply of supplies) {
    s.add(supply);
  }
  
  for (let recipe of recipes) {
    indegrees[recipe] = 0;
  }
    
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < ingredients[i].length; ++j) {
      if (!s.has(ingredients[i][j])) {
        if (graph[ingredients[i][j]]) {
          graph[ingredients[i][j]].push(recipes[i]);
        }
        else {
          graph[ingredients[i][j]] = [recipes[i]];
        }
        
        indegrees[recipes[i]] += 1;
      }
    }
  }
  let queue = [];
  
  for (let recipe of recipes) {
    if (indegrees[recipe] === 0) {
      queue.push(recipe);
    }
  }  
  
  while (queue.length) {
    let len = queue.length;
    
    for (let i = 0; i < len; ++i) {
      let temp = queue.pop();
      
      res.push(temp);
      if (!graph[temp]) {
        continue;
      }
      for (let ing of graph[temp]) {
        indegrees[ing]--;
        if (indegrees[ing] === 0) {
          queue.push(ing);
        }
      }
    }
  }
  
  return res;
};