// API介绍
/**
 * on(event, listener)：为指定事件注册一个监听器，接受一个字符串event和一个回调函数
 * emit(event, [arg1], [arg2]):按监听的顺序执行每个监听器
 * addListener(event, listener): on的同名函数
 * once(event, listener): 和on类似，但只触发一次，随后便解除时间监听
 * removeListener(event, listener): 移除指定事件的某个监听回调
 * removeAllListener([event]): 移除指定事件的所有监听回调
 * setMaxListeners(n): 用于提高监听器的默认限制的数量。（默认10监听回调个产生告警）
 * listeners(event): 返回指定事件的监听器数组
 */

 function EventEmitter() {
   this.listeners = {} // 存放事件监听器函数
   this.maxListener = 10 // 某个事件你能够添加的监听器的最大数量
 }


//  on 方法
 EventEmitter.prototype.on = function(event, cb) {
   var listeners = this.listeners
   if (listeners[event] && listeners[event].length >= this.maxListener) {
     throw console.error('监听器的最大数量时%d, 您已超出限制', this.maxListener)
   }

   if (listeners[event] instanceof Array) {
     if (listeners[event].indexOf(cb) === -1) {
       listeners[event].push(cb)
     }
   } else {
     listeners[event] = [].concat(cb)
   }
 }

 EventEmitter.prototype.addListener = EventEmitter.prototype.on


//  emit方法
EventEmitter.prototype.emit = function(event) {
  var args = Array.prototype.slice.call(arguments)
  args.shift()
  this.listeners[event].forEach(cb => {
    cb.apply(null, args)
  })
}

// removeListener方法
EventEmitter.prototype.removeListener = function(event, listener) {
  let listeners = this.listeners
  const arr = listeners[event] || []
  const index = arr.indexOf(listener)
  if (index !== -1) {
    listeners.splice(index, 1)
  }
}

// once方法
EventEmitter.prototype.once = function (event, listener) {
  var self = this
  function fn() {
    const args = [...arguments]
    listener.apply(null, args)
    self.removeListener(event, fn)
  }
  this.on(event, fn)
}


// removeAllListener方法
EventEmitter.prototype.removeAllListener = function (event) {
  this.listeners[event] = []
}

// setMaxListeners方法和listeners方法
EventEmitter.prototype.listeners = function (event) {
  return this.listeners[event]
}

EventEmitter.prototype.setMaxListeners = function (num) {
  this.maxListener = num
}