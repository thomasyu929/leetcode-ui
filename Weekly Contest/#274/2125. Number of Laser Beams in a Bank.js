/**
 * @param {string[]} bank
 * @return {number}
 */
 var numberOfBeams = function(bank) {
  let devices = [];
  let res = 0;
  
  for (let i = 0; i < bank.length; ++i) {
    let count = 0;
    for (let c of bank[i]) {
      if (c === '1') {
        count++;
      }
    }
    
    if (count) {
      devices.push(count);
    }
  }
  
  for (let i = 1; i < devices.length; ++i) {
    res += devices[i] * devices[i-1];
  }
  
  return res;
};