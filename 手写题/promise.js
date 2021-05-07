/**
 * promise 
 */

 const PENDING = 'pending'
 const FULFILLED = 'fulfilled'
 const REJECTED = 'rejected'
 class MyPromise {
   constructor(func) {
     this.status = PENDING
     this.value = undefined
     this.reason = undefined
     this.resolvedTasks = []
     this.rejectedTasks = []
     this._resolve = this._resolve.bind(this)
     this._reject = this._reject.bind(this)

     try {
      func(this._resolve, this._reject)
     } catch(error) {
       this._reject(error)
     }
   }

   _resolve(value) {
     setTimeout(() => {
       this.status = FULFILLED
       this.value = value
       this.resolvedTasks.forEach(t => t(value))
     })
   }

   _reject(reason) {
     setTimeout(() => {
       this.status = REJECTED
       this.reason = reason
       this.rejectedTasks.forEach(t => t(reason))
     })
   }

   then(onFulfilled, onRejected) {
     return new MyPromise((resolve, reject) => {
      this.resolvedTasks.push(value => {
        try {
          const res = onFulfilled(value)
          if (res instanceof MyPromise) {
            res.then(resolve, reject)
          } else {
            resolve(res)
          }
        } catch(error) {
          reject(error)
        }
      })

      this.rejectedTasks.push(value => {
        try {
          const res = onRejected(value)
          if (res instanceof MyPromise) {
            res.then(resolve, reject)
          } else {
            reject(res)
          }
        } catch(error) {
          reject(error)
        }
      })
     })
   }

   catch(onRejected) {
     return this.then(null, onRejected)
   }
 }


 new MyPromise(resolve => {
   setTimeout(() => {
     resolve(1)
   }, 500)
 }).then(res => {
   console.log('res: ', res)
   return new MyPromise(resolve => {
     setTimeout(() => {
      resolve(2)
     }, 500)
   })
 }).then(res => {
   console.log('res1: ', res)
   throw new Error('an error')
 }).catch(err => console.log('error: ', err))
