/**
 * new
 * 会产生一个新对象
 * 新对象能够访问到构造函数的属性，所需要重新指定他的原型
 * 构造函数可能会显式返回
 */

 function myNew(func, ...rest) {
   const obj = new Object()
   obj.__proto__ = func.prototype
   let ret = func.apply(obj, rest)

   return typeof ret === 'object' ? ret || obj : obj
 }