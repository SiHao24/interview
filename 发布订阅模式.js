/**
 * 发布订阅模式
 */

 class EventEmmiter {
   constructor() {
     this.events = {}
   }

   on(name, fn) {
    if (this.events[name]) {
      this.events[name].push(fn)
    } else {
      this.events[name] = [fn]
    }
  }

  emit(name, ...args) {
    const cbs = this.events[name] || []
    cbs.forEach(cb => cb.apply(this, args))
  }

  off(name, fn) {
    const tasks = this.events[name]
    if (!fn) {
      this.events[name] = null
      delete this.events[name]
    } else {
      this.events[name] = (tasks || []).filter(tItem => tItem !== fn)
    }
  }

  once(name, fn) {
    const func = (...args) => {
      this.off(name, func)
      fn.apply(this, args)
    }
  }

}

const eventBus = new EventEmmiter()
const task1 = () => { console.log('task1'); }
const task2 = () => { console.log('task2'); }
const task3 = () => { console.log('task3'); }
const task4 = () => { console.log('task4'); }
eventBus.on('task', task1)
eventBus.on('task', task2)
eventBus.on('task1', task3)
eventBus.on('task1', task4)

console.log('eventBus: ', eventBus)

setTimeout(() => {
  eventBus.emit('task')
  eventBus.emit('task1', )
}, 1000)

setTimeout(() => {
  eventBus.off('task1', task3)
}, 2000)

setTimeout(() => {
  console.log('dsds: ', eventBus)
}, 5000)

console.log(eventBus)