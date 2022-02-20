/**
 * @param {number} num
 * @return {number}
 */
 var countEven = function(num) {
  let res = 0;
  
  for (let i = 1; i <= num; ++i) {
    let str = i.toString().split('').reduce((a, b) => a + +b, 0);

    res += str % 2 === 0
  }
  
  return res;
};