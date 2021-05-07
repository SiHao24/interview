const obj = {
  a: 1,
  [Symbol.toPrimitive]: function(hinit) {
    console.log('hinit: ', hinit)
    return obj.a++
  },
  valueOf: function(){
    return 2
  },
  toString: function () {
    return 3
  }
}

console.log(obj == 1 && obj == 2 && obj == 3)

var a = [1, 2, 3]
a.join = a.shift
console.log(a == 1 && a == 2 && a == 3)

var val = 0;
Object.defineProperty(window, 'a', {
  get: function() {
    return ++val;
  }
});
console.log(a == 1 && a == 2 && a == 3);