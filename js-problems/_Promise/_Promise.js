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

  /**
   * _Promise.resolve
   * @param {any} value parse to Promise.
   * @returns _Promise
   */
  static resolve(value) {
    if (value instanceof _Promise) {
      return value;
    }
      
    return new _Promise((resolve) => {
      resolve(value);
    })
  }

  /**
   * _Promise.reject
   * @param {any} reason of reject
   * @returns _Promise
   */
  static reject(reason) {
    return new _Promise((resolve, reject) => {
      reject(reason);
    })
  }

  /**
   * _Promise.prototype.catch
   * same as invoke .then(undefined || null, rejection)
   */
  catch(onRejected) {
    return this.then(undefined, onRejected);
  }

  /**
   * _Promise.prototype.finally
   * call function whatever fulfilled or rejected
   */
  finally(callback) {
    return this.then(callback, callback);
  }

  /**
   * _Promise.all
   * @param {iterable} promises accept Array
   * @returns
   */
  static all(promises) {
    return new _Promise((resolve, reject) => {
      if (Array.isArray(promises)) {
        let result = [];
        let count = 0;

        if (promises.length === 0) {
          return resolve(promises);
        }

        promises.forEach((item, i) => {
          _Promise.resolve(item).then(
            value => {
              count++;
              result[i] = value;

              count === promises.length && resolve(result);
            },
            reason => {
              reject(reason);
            }
          )
        })
      }
      else {
        return reject(new TypeError('Argument is not iterable'));
      }
    })
  }

  /**
   * _Promise.allSettled
   * @param {iterable} promises accept Array
   * @returns
   */
  static allSettled(promises) {
    return _Promise((resolve, reject) => {
      if (Array.isArray(promises)) {
        let res = [];
        let count = 0;

        if (promises.length === 0) {
          return resolve(promises);
        }

        promises.forEach((item, i) => {
          _Promise.resolve(item).then(
            value => {
              count++;
              res[i] = { status: 'fulfilled', value };

              count === promises.length && resolve(res);
            },
            reason => {
              count++;
              res[i] = { status: 'rejected', reason };

              count === promises.length && resolve(res);
            }
          )
        })
      }
      else {
        return reject(new TypeError('Argument is not iterable'));
      }
    })
  }

  /**
   * _Promise.any
   * @param {iterable} promises accept Array
   * @returns
   */
  static any(promises) {
    return _Promise((resolve, reject) => {
      if (Array.isArray(promises)) {
        let errors = [];
        let count = 0;

        if (promises.length === 0) {
          // AggregateError is experimental. use to integrate errors;
          return reject(new AggregateError('All promises were rejected'));
        }

        promises.forEach((item) => {
          _Promise.resolve(item).then(
            value => {
              resolve(value);
            },
            reason => {
              count++;
              errors.push(reason);

              count === promises.length && resolve(new AggregateError(errors));
            }
          )
        })
      }
      else {
        return reject(new TypeError('Argument is not iterable'));
      }
    })
  }

  /**
   * _Promise.race
   * @param {iterable} promises accept Array
   * @returns
   */
  static race(promises) {
    return new _Promise((resolve, reject) => {
      if (Array.isArray(promises)) {
        if (promises.length > 0) {
          promises.forEach((item) => {
            _Promise.resolve(item).then(resolve, reject);
          })
        }
      }
      else {
        return reject(new TypeError('Argument is not iterable'));
      }
    })
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

// test _Promise if follow Promise/A+ spec
_Promise.deferred = function() {
  let res = {};
  res.promise = new _Promise((resolve, reject) => {
    res.resolve = resolve;
    res.reject = reject;
  })

  return res;
}

module.exports = _Promise;
