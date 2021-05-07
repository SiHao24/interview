// 1、callback
// 2、promise
// 3、generate
// 4、async + await

function run(i) {
  if (i > 4) return
  console.log('red')
  setTimeout(() => {
    console.log('yellow')
    setTimeout(() => {
      console.log('green')
      setTimeout(() => {
        run(i + 1)
      }, 4000)
    }, 2000)
  }, 1000)
}

run(0)