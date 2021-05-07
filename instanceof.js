/**
 * instanceof
 */

 function myInstance(left, right) {
   let proto = Object.getPrototypeOf(left)

   while(true) {
    // proto === null 表示到原型链的顶端
     if (!left || !right || proto === null) return false
     if (proto === right.prototype) return true
     proto = Object.getPrototypeOf(proto)
   }
 }