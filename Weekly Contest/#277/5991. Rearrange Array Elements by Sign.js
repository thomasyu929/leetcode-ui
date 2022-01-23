/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var rearrangeArray = function(nums) {
  let negatives = nums.filter(n => n < 0);
  let positives = nums.filter(n => n > 0);
  let res = [];
  
  for (let i = 0; i < positives.length; ++i) {
    res.push(positives[i], negatives[i]);
  }
  
  return res;
};