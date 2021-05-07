Function.prototype.myCall1 = function (context, ...rest) {
  context.fn = this
  const result = context.fn(...rest) // 参数序列

  delete context.fn

  return result
}
function test() {
  console.log(this.a)
}
const obj = {
  a: 2,
  test:test
}
test.myCall1(obj)

