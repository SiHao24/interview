Function.prototype.myCall1 = function (context, ...rest) {
  context.fn = this
  const result = context.fn(...rest) // εζ°εΊε

  delete context.fn

  return result
}
function test() {
  console.log(this.a)
}
const obj = {
  a: 2,
}
test.myCall1(obj)

