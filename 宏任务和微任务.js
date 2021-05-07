setTimeout(function () { // 宏任务
  console.log('1');
});
new Promise(function (resolve) {
  console.log('2');
  resolve();
}).then(function () {
  console.log('3');
});
console.log('4');
setTimeout(function () {
  console.log('5');
  new Promise(function (resolve) {
    console.log('6');
    new Promise(function (resolve) {
        console.log('x1');
        resolve();
      }).then(function () {
        console.log('X2'); // 
      });
    setTimeout(function () {
      console.log('X3');
      new Promise(function (resolve) {
        console.log('X4');
        resolve();
      }).then(function () {
        console.log('X5');
      });
    })
    resolve();
  }).then(function () {
    console.log('7');
  });
})
setTimeout(function () {
  console.log('8');
});

宏任务队列['1', '']
new Promise同步执行，then微任务 微任务队列 [X2]

// 第一次
2
4
3

// 第二次
1

// 第三次
5
6
x1
x2
7
8
X3
X4
X5



mic = []
min = []

for(let i = 0;i<mic.length;i++){
  do[mic[i]]
  while(!min.length){
    doAll(min)
  }
}
