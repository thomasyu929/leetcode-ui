/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortEvenOdd = function(nums) {
  let oddArr = [];
  let evenArr = [];
  
  nums.forEach((num, i) => {
    if (i % 2 === 0) {
      evenArr.push(num);
    }
    else {
      oddArr.push(num);
    }
  })
  
  evenArr.sort((a, b) => a - b);
  oddArr.sort((a, b) => b - a);
  
  let res = [];
  let n = Math.min(evenArr.length, oddArr.length);
  
  for (let i = 0; i < n; ++i) {
    res.push(evenArr[i]);
    res.push(oddArr[i]);
  }
  if (n+1 === evenArr.length) {
    res.push(evenArr[n])
  }
  
  return res;
};