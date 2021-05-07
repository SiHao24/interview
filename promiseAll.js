function promiseAll(promiseArray) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promiseArray)) {
      return reject(new Error('传入的参数必须是数组'))
    }

    const res = []
    const promisesNums = promiseArray.length
    let counter = 0
    for (let i = 0; i < promisesNums; i++) {
      Promise.resolve(promiseArray[i]).then(values => {
        counter++
        res[i] = values
        // 不能放在for循环里面，同步执行的
        if (counter === promisesNums) {
          resolve(res)
        }
      }).catch(e => reject(e))
    }
  })
}