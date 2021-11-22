/**
 * @param {number[]} nums
 */

 // https://leetcode-cn.com/problems/shuffle-an-array
 var Solution = function(nums) {
  this.nums = nums;
  this.initial = [...nums];
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  this.nums = [...this.initial];
  return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  let n = this.nums.length;
  for (let i = 0; i < n; ++i) {
    let j = Math.floor(Math.random() * (n - i) + i);
    [this.nums[j], this.nums[i]] = [this.nums[i], this.nums[j]];
  }

  return this.nums;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */