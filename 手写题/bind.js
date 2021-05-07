Function.prototype.myBind = function (context, ...rest) {
  const fn = this
  return function (...rest1) {
    return fn.apply(context,[...rest,...rest1])
  }
}
function test(){
  console.log(this.a, this.b)
}
const obj = {
 a: 1,
 b: 100
}
const T = test.myBind(obj, 1)
T()