function add(a, b, c) {
  return a + b + c
}


// 柯里化
function curry1 (fn, ...args) {
  return function (...arg) {
    if ([...args, ...arg].length >= fn.length) {
      return fn(...args, ...arg)
    } else {
      return curry1(fn, ...args, ...arg)
    }
  }
}

const Cur = curry1(add, 10, 100)
// console.log(Cur(100, 100))
// console.log(Cur(10))

function curry2(fn, ...rest) {
  return function () {
    return fn(...rest, ...arguments)
  }
}

var addCurry = curry2(add)
// console.log(addCurry(100))
// console.log(addCurry(10))
// console.log(addCurry(10, 100, 100))


function sub_curry(fn) {
  var args = [].slice.call(arguments, 1)
  return function () {
    return fn.apply(this, args.concat([].slice.call(arguments)))
  }
}

function curry3(fn, length) {
  length = length || fn.length
  var slice = Array.prototype.slice

  return function() {
    if (arguments.length < length) {
      var combined = [fn].concat(slice.call(arguments))
      return curry3(sub_curry.apply(this, combined), length - arguments.length)
    } else {
      return fn.apply(this, arguments)
    }
  }
}

const test3 = curry3(function (a, b, c) {
  return [a, b, c]
})

// console.log("test3('a', 'b', 'c'): ", test3('a', 'b', 'c'))
// console.log("test3('a', 'b')('c'): ", test3('a', 'b')('c'))
// console.log("test3('a')('b')('c'): ", test3('a')('b')('c'))
// console.log("test3('a')('b', 'c'): ", test3('a')('b', 'c'))

function curry4(fn, args) {
  var length = fn.length
  args = args || []

  return function () {
    var _args = args.slice(0), arg, i;
    for (i = 0; i < arguments.length; i++) {
      arg = arguments[i]
      _args.push(arg)
    }

    if (_args.length < length) {
      return curry4.call(this, fn, _args)
    } else {
      return fn.apply(this, _args)
    }
  }
}

function curryFinal(fn, args, holes) {
  var length = fn.length
  args = args || []
  holes = holes || []

  return function () {

  }
}

var currysss = fn => judge = (...args) => args.length === fn.length ? fn(...args) : (arg) => judge(...args, arg)
const test11 = currysss(add)
console.log(test11(1)(100, 22))