/**
- Array.prototype.flat() 用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响。
- 不传参数时，默认“拉平”一层，可以传入一个整数，表示想要“拉平”的层数。
- 传入 <=0 的整数将返回原数组，不“拉平”
- Infinity 关键字作为参数时，无论多少层嵌套，都会转为一维数组
- 如果原数组有空位，Array.prototype.flat() 会跳过空位。
 */

// ways of check element is Array
const arr = [1,2,3];

arr instanceof Array; // 网页中包含多个框架 / 多个全局环境，则会有多个构造函数
arr.constructor === Array; // 可以被重写，不保证一定是数组
Object.prototype.toString.call(arr).slice(8, -1).toLowerCase() === 'array' // '[object array]'
Array.isArray(arr);

// working on depth === 1
[].concat.apply([], arr);

// 1
// iterative queue
function _flat1(arr) {
  let queue = [...arr];
  let res = [];

  while (queue.length) {
    let val = queue.shift();

    if (Array.isArray(val)) {
      queue.push(...val);
    }
    else {
      res.push(val);
    }
  }

  return res;
}

// 2
// recursive
/**
 * Array.prototype.flat() 用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响。
 * @param {Array} arr
 * @param {Number} depth 
 * @returns
 */
function _flat2(arr, depth = 1) {
  if (depth <= 0) {
    return arr;
  }

  let res = [];

  arr.forEach(item => {
    if (Array.isArray(item)) {
      // arguments是很昂贵的操作，对象很大，每次递归调用都要重新创建。影响浏览器性能，影响闭包
      // arguments.callee(item, depth-1)
      res = res.concat(_flat2(item, depth-1));
    }
    else {
      res.push(item);
    }
  })

  return res;
}

// 3
// reduce
// arr.reduce((res, item) => Array.isArray(item) ? res.concat(item) : res.push(item), []);
function _flat3(arr, depth = 1) {
  if (depth <= 0) {
    return arr;
  }
  // return depth > 0 ? flat.. : arr.slice();
  return arr.reduce((res, item) => res.concat(Array.isArray(item) ?_flat3(item, depth-1) : item), []);
}

// 4
// Generator
function* _flat4(arr, depth = 1) {
  for (let item of arr) {
    if (Array.isArray(item) && depth > 0) {
      yield* _flat4(item, depth-1);
    }
    else {
      yield item;
    }
  }
}

// 5
// implement _flat on Array.prototype
Array.prototype._flat = function(depth = 1) {
  if (!Number(depth) || Number(depth) <= 0) {
    return this;
  }
  let arr = this.concat();

  while (depth > 0) {
    if (arr.some(item => Array.isArray(item))) {
      arr = [].concat.apply([], arr);
    }
    else {
      break;
    }
    depth--;
  }

  return arr;

  // return arr.reduce((res, item) => res.concat(Array.isArray(item) ? item._flat(depth-1) : item), []);
}

// ES5 对空位的处理，forEach(), filter(), reduce(), every(), some()都会跳过空位
// ES6 转换为 undefined
Array.prototype._flat = function(depth = 1) {
  let arr = this.concat();

  if (!Number(depth) || Number(depth) <= 0) {
    return arr.filter(item => item !== undefined);
    // return this;
  }

  return arr.reduce((res, item) => Array.isArray(item) ? res.concat(item._flat(depth-1)) : res.concat(item), []);
}

let test = [1,2,,3,[1,2,[1, ,2,3,[4, ,5]]]];
console.log(_flat3(test, -1));

// 调用 Generator 函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象
// 也就是遍历器对象（Iterator Object）。所以我们要用一次扩展运算符得到结果
let ans = [..._flat4(test)];
console.log(ans);

console.log(test._flat(2));




