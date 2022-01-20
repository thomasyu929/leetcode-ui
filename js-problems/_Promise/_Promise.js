/**
 * Based on Promise/A+ specification, implement Promise functionality
 */
class _Promise {

  constructor(fn) {
    if (typeof fn !== 'function') {
      throw new TypeError(`Promise resolver ${ fn } is not a function`)
    }

    // initial status, value and reason
    this.status = _Promise.PENDING;
    this.value = null;
    this.reason = null;

    // used for stack callback for fulfilled/rejected status
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    // bind this
    this.resolve = this.resolve.bind(this)
    this.reject = this.reject.bind(this)

    // execute fn
    try {
      fn(this.resolve, this.reject);
    }
    catch(error) {
      this.reject(error);
    }
  }

  // resolve
  resolve(value) {
    if (this.status === _Promise.PENDING) {
      this.status = _Promise.FULFILLED;
      this.value = value;

      this.onFulfilledCallbacks.forEach(callback => callback(value));
    }
  }

  // reject
  reject(reason) {
    if (this.status === _Promise.PENDING) {
      this.status = _Promise.REJECTED;
      this.reason = reason;

      this.onRejectedCallbacks.forEach(callback => callback(reason));
    }
  }

  then(onFulfilled, onRejected) {
    // onFulfilled / onRejected may not a function, in this case need to wrap them to a function
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : error => { throw error };

    // declare promise2, due to chain invoke need to return _Promise instance
    let promise2 = new _Promise((resolve, reject) => {
      // status pending
      if (this.status === _Promise.PENDING) {
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            }
            catch(error) {
              reject(error);
            }
          })
        });

        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            }
            catch(error) {
              reject(error);
            }
          })
        })
      }
      else if (this.status === _Promise.FULFILLED) {
        // can execute asynchronously by using 'macro-task' / 'micro-task' mechanism
        // such as 'setTimeout', 'setImmediate' / 'MutationObserver', 'process.nextTick'
        // 当前执行栈执行完毕时会立刻先处理所有微任务队列中的事件，然后再去宏任务队列中取出一个事件。同一次事件循环中，微任务永远在宏任务之前执行
        setTimeout(() => {
          try {
            const x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          }
          catch(error) {
            reject(error);
          }
        })
      }
      else if (this.status === _Promise.REJECTED) {
        setTimeout(() => {
          try {
            const x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          }
          catch(error) {
            reject(error);
          }
        })
      }
    })

    return promise2;
  }
}

// Declare constant which used for class _Promise
_Promise.PENDING = 'pending';
_Promise.FULFILLED = 'fulfilled';
_Promise.REJECTED = 'rejected';

// Declare function to resolve promise
function resolvePromise(promise, x, resolve, reject) {
  // avoid re-call;
  if (x === promise) {
    reject(new TypeError('Chaining cycle detected for promise'));
  }

  // called as flag to detect re-call
  let called = false;

  if (x instanceof _Promise) {
    x.then(value => {
      resolvePromise(promise, value, resolve, reject);
    }, reason => {
      reject(reason);
    })
  }
  else if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      const then = x.then;
      
      if (typeof then === 'function') {
        then.call(
          x,
          value => {
            if (called) return;
            called = true;

            resolvePromise(promise, value, resolve, reject);
          },
          reason => {
            if (called) return;
            called = true;

            reject(reason)
          }
        )
      }
      else {
        resolve(x);
      }
    }
    catch(error) {
      if (called) return;
      called = true;

      reject(error);
    }
  }
  else {
    resolve(x);
  }
}

_Promise.deferred = function() {
  let res = {};
  res.promise = new _Promise((resolve, reject) => {
    res.resolve = resolve;
    res.reject = reject;
  })

  return res;
}

module.exports = _Promise;


//
/**
 * Promise.resolve()
 * @params 
 */
myPromise.resolve = function (value) {
  if (value instanceof myPromise) {
      return value;
  } else if (value instanceof Object && 'then' in value) {
    return new myPromise((resolve, reject) => {
        value.then(resolve, reject);
    })
  }
    
  return new myPromise((resolve) => {
        resolve(value)
  })
}
