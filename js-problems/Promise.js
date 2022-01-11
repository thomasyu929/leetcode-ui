// Implementation based on Promise/A+ specification
var PENDING = 'pending';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';

function _Promise(fn) {
  this.status = PENDING;
  this.value = null;
  this.reason = null;

  this.onFulfilledCallbacks = [];
  this.onRejectedCallbacks = [];

  var that = this;

  function resolve(value) {
    if (that.status === PENDING) {
      that.status = FULFILLED;
      that.value = value;

      this.onFulfilledCallbacks.forEach(callback => {
        callback(value);
      })
    }
  }

  function reject(reason) {
    if (that.status === PENDING) {
      that.status = REJECTED;
      that.reason = reason;

      this.onRejectedCallbacks.forEach(callback => {
        callback(reason);
      })
    }
  }

  try {
    fn(resolve, reject);
  }
  catch(error) {  // why need to check at here?
    reject(error);
  }
}

_Promise.prototype.then = function(onFulfilled, onRejected) {
  var _onFulfilled = onFulfilled;
  
  if (typeof onFulfilled !== 'function') {
    _onFulfilled = function(value) {
      return value;
    }
  }

  var _onRejected = onRejected;

  if (typeof onRejected !== 'function') {
    _onRejected = function(reason) {
      throw reason;
    }
  }

  if (this.status === PENDING) {
    var _promise = new _Promise(function(resolve, reject) {
      that.onFulfilledCallbacks.push(function() {
        setTimeout(function() {
          try {
            if (typeof onFulfilled !== 'function') {
              resolve(that.value);
            }
            else {
              var x = _onFulfilled(that.value);
              resolvePromise(_promise, x, resolve, reject);
            }
          }
          catch(e) {
            reject(e);
          }
        }, 0)
      })

      that.onRejectedCallbacks.push(function() {
        setTimeout(function() {
          try {
            if (typeof onFulfilled !== 'function') {
              resolve(that.value);
            }
            else {
              var x = _onRejected(that.value);
              resolvePromise(_promise, x, resolve, reject);
            }
          }
          catch(e) {
            reject(e);
          }
        }, 0)
      })
    })

    return _promise;
  }

  if (this.status === FULFILLED) {
    var _promise = new _Promise(function(resolve, reject) {
      setTimeout(function() {
        try {
          if (typeof onFulfilled !== 'function') {
            resolve(that.value);
          }
          else {
            var x = _onFulfilled(that.value);
            resolvePromise(_promise, x, resolve, reject);
          }
        }
        catch(e) {
          reject(e);
        }
      }, 0)
    });

    return _promise;
  }

  if (this.status === REJECTED) {
    var _promise = new _Promise(function(resolve, reject) {
      setTimeout(function() {
        try {
          if (typeof onRejected !== 'function') {
            reject(that.reason);
          }
          else {
            _onRejected(that.reason);
            resolve();
          }
        }
        catch(e) {
          reject(e);
        }
      }, 0)
    });

    return _promise;
  }
}

function resolvePromise(promise, x, resolve, reject) {
  if (x === null) {
    return resolve(x);
  }

  if (promise === x) {
    return reject(new TypeError('The promise and the return value are the same'));
  }

  if (x instanceof _Promise) {
    x.then(function(y) {
      resolvePromise(promise, y, resolve, reject);
    }, reject);
  }
  else if (typeof x === 'object' || typeof x === 'function') {
    try {
      var then = x.then;
    }
    catch {
      return reject(error);
    }

    if (typeof then === 'function') {
      var called = false;

      try {
        then.call(x, function(y) {
          if (called) return;
          called = true;
          
          resolvePromise(promise, y, resolve, reject);
        }, function(r) {
          if (called) return;
          called = true;

          reject(r);
        })
      }
      catch(error) {
        if (called) return;

        reject(error);
      }
    }
  }
  else {
    resolve(x);
  }
}

// Promise.resolve
_Promise.resolve = function(param) {
  if (param instanceof _Promise) {
    return param;
  }

  return new _Promise(function(resolve) {
    resolve(param);
  })
}

// Promise.rejected
_Promise.reject = function(reason) {
  return new _Promise(function(resolve, reject) {
    reject(reason);
  })
}

// Promise.all
_Promise.all = function(promiseList) {
  var res = new _Promise(function(resolve, reject) {
    var count = 0;
    var list = [];
    var n = promiseList.length;

    if (n === 0) {
      return resolve(list);
    }

    promiseList.forEach(function(promise, i) {
      _Promise.resolve(promise).then(function(value) {
        count++;
        list[i] = value;

        if (count === n) {
          resolve(list);
        }
      }, function(reason) {
        reject(reason);
      })
    })
  })

  return res;
}

// Promise.race
_Promise.race = function(promiseList) {
  var res = new _Promise(function(resolve, reject) {
    var n = promiseList.length;

    if (n === 0) {
      return resolve();
    }
    else {
      for (var i = 0; i < n; ++i) {
        _Promise.resolve(promiseList[i]).then(function(value) {
          return resolve(value);
        }, function(reason) {
          return reject(reason);
        })
      }
    }
  })

  return res;
}

// Promise.prototype.catch
_Promise.prototype.catch = function(onRejected) {
  this.then(null, onRejected);
}


/**
 * test suite:
 * https://github.com/promises-aplus/promises-tests
 * using to test _Promise implementation functionality
 */
_Promise.deferred = function() {
  var result = {};
  result.promise = new _Promise(function(resolve, reject) {
    result.resolve = resolve;
    result.reject = reject;
  })

  return result;
}