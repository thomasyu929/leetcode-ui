/**
 * @param {number[]} nums
 * @return {number}
 */
 var minSwaps = function(nums) {
  let n = nums.length;
  let total = 0, curr = 0, mx = 0;
  
  for (let n of nums) {
    total += n;
  }
  
  let i = 0, j = 0;
  
  let arr = [...nums, ...nums];
  
  while (j < 2 * n) {
    curr += arr[j];
    
    if (j - i + 1 === total) {
      mx = Math.max(mx, curr);
      if (arr[i] === 1) {
        curr--;
      }
      i++;
    }
    
    j++;
  }
  
  return total - mx;
};