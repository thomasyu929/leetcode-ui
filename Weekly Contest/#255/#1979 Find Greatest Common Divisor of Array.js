/**
Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.
*/

var findGCD = function(nums) {
  let max = Math.max(...nums),
      min = Math.min(...nums);
  
  while (min) {
    let temp = min;
    min = max % min;
    max = temp;
  }

  return max;
}