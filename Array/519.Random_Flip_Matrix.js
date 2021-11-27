/**
 * @param {number} m
 * @param {number} n
 */
 // https://leetcode-cn.com/problems/random-flip-matrix/
 var Solution = function(m, n) {
  this.map = new Map();
  this.m = m, this.n = n;
  this.size = m * n;
};

/**
 * @return {number[]}
 */
Solution.prototype.flip = function() {
  const x = Math.floor(Math.random() * this.size);
  --this.size;
  const idx = this.map.get(x) || x; 
  // this.size when get smaller. the end point may already record in the map, so we need to find the mapping of this point;
  this.map.set(x, this.map.get(this.size) || this.size);
  return [Math.floor(idx / this.n), idx % this.n];
};

/**
 * @return {void}
 */
Solution.prototype.reset = function() {
  this.map.clear();
  this.size = this.m * this.n;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(m, n)
 * var param_1 = obj.flip()
 * obj.reset()
 */