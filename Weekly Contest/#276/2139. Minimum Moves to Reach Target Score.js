/**
 * @param {number} target
 * @param {number} maxDoubles
 * @return {number}
 */
 var minMoves = function(target, maxDoubles) {
  let res = 0;
  
  while (target > 1 && maxDoubles > 0) {
    res += target % 2 + 1;
    target = Math.floor(target / 2);
    maxDoubles--;
  }
  
  return res + target - 1;
};