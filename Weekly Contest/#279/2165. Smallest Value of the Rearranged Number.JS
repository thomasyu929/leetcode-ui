/**
 * @param {number} num
 * @return {number}
 */
 var smallestNumber = function(num) {
  if (num === 0) {
    return num;
  }

  let res = 0;
  let zero = 1;
  let arr = [];
  let negative = num < 0;
  let n = Math.abs(num);

  while (n > 0) {
    let temp = n % 10
    if (temp === 0) {
      zero *= 10;
    }
    else {
      arr.push(temp);
    }
    n = Math.floor(n / 10);
  }
  if (negative) {
    arr.sort((a, b) => b - a);
    res = +arr.join('');
    return -1 * res * zero;
  }
  else {
    arr.sort((a, b) => a - b);
    let lead = arr.splice(0, 1);
    res = +[lead * zero, ...arr].join('');
    return res;
  }
};

/**
 * @param {number} num
 * @return {number}
 */
 var smallestNumber = function(num) {
  if (num === 0) {
    return num;
  }
  
  let str = num.toString();
  if (str[0] === '-') {
    return -1 * +str.slice(1).split('').sort((a, b) => b - a).join('');
  }
  else {
    let arr = str.split('').sort((a, b) => a - b);
    for (let i = 0; i < arr.length; ++i) {
      if (arr[i] !== '0') {
        [arr[i], arr[0]] = [arr[0], arr[i]];
        break;
      }
    }
    return +arr.join('')
  }
};