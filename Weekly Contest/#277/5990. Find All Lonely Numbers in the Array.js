/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findLonely = function(nums) {
  let m = new Map();
  let res = [];
  
  for (let num of nums) {
    m.set(num, m.get(num) ? m.get(num) + 1 : 1);
  }
  
  for (let num of nums) {
    if (m.get(num) === 1 && !m.has(num + 1) && !m.has(num - 1)) {
      res.push(num);
    }
  }
  
  return res;
};