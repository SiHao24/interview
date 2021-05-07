/**
 * 节流
 * N秒内只触发一次
 */

//  时间戳
 function throttle(func, delay) {
   let previous = 0
   return function (...rest) {
    const context = this
    const now = +new Date()
    if (now - previous > delay) {
      func.apply(context, rest)
      previous = now
    }
   }
 }

//  标志位
function throttle2(func, delay) {
  let canRun = false

  return function (...rest) {
    let context = this
    if (!canRun) return
    canRun = false

    setTimeout(() => {
      fn.apply(context, reset)
      canRun = true
    }, delay);
  }
}

