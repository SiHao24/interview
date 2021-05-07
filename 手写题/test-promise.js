new Promise((resolve, reject) => {
  console.log('a: ', a)
}).catch(error => {
  console.log('error: ', error)
  console.log('错误')
}).then(() => {
  console.log('dsddsds')
}).then(() => {
  console.log('0000000')
}).catch(error => {
  console.log('error: ', error)
  console.log('错bbbbbb误')
})