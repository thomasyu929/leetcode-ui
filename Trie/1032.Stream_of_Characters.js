/**
 * @param {string[]} words
 */

// https://leetcode.com/problems/stream-of-characters/

// Tire

var StreamChecker = function(words) {
  this.root = {};
  this.res = [];
  for (let word of words) {
    let node = this.root;
    for (let i = word.length-1; i >= 0; --i) {
      if (!node[word[i]]) {
        node[word[i]] = {};
      }
      node = node[word[i]];
    }
    node.end = word;
  }
};

/** 
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function(letter) {
  this.res.push(letter);
  let node = this.root;
  
  for (let i = this.res.length-1; i >= 0; --i) {
    if (!node[this.res[i]]) {
      return false;
    }
    node = node[this.res[i]];
    
    if (node.end) {
      return true;
    }
  }
  
  return false;
};

/** 
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */