var add = function() {
  var num = 0
  return function(a) {
      return num = num + a
  }
}

add(1)(2)