//simply one
function debounce(fn, wait) {
  let timeout;

  return function() {
    var context = this;
    var args = arguments;
    clearTimeout(timeout);

    timeout = setTimeout(function() {
      fn.apply(context, args);
    }, wait);
  }
}

// complexity one
function debounce(fn, wait, immediate) {
  let timeout, result;
  
  const _debounce = function() {
    let context = this;
    let arguments = arguments;

    if (timeout) {
      clearTimeout(timeout);
    }

    if (immediate) {
      let callNow = !timeout;
      timeout = setTimeout(function() {
        timeout = null;
      }, wait);
      if (callNow) {
        result = fn.apply(context, args);
      }
    }
    else {
      timeout = setTimeout(function() {
        fn.apply(context, args);
      }, wait);
    }

    return result;
  }

  _debounce.cancel = function() {
    clearTimeout(timeout);
    timeout = null;
  }

  return _debounce;
}