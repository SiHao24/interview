/**
 * 防抖
 * 高频事件N秒之后只会触发一次，如果在N秒内触发，则重新计时
 */

 function debounce(func, deplay) {
   return function (...reset) {
    const context = this
    if (func.timer) clearTimeout(func.timer)
    func.timer = setTimeout(() => {
      func.apply(context, reset)
    }, deplay)
   }
 }