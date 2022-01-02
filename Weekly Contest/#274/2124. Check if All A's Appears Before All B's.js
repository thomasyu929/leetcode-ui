/**
 * @param {string} s
 * @return {boolean}
 */
 var checkString = function(s) {
  let cnt = 0;
  let bshown = false;
  
  for (let c of s) {
    if (c === 'a') {
      if (bshown) {
        return false;
      }
      cnt++;
    }
    else {
      bshown = true;
    }
  }
  
  return true;
};