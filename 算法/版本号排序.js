// ['1.1.1.1.1.1', '6', '5.4.3', '2.3.1', '2.3.1.1'] 从大到小的版本号数组
/**
 * 
 * @param {*} v1 12.3.4.23
 * @param {*} v2 12.3.5
 */
function compareVersion(v1, v2) {
  let version1 = v1.split('.')
  let version2 = v2.split('.')
  let maxLen = Math.max(version1.length, version2.length)
  for (let i = 0; i < maxLen; i++) {
    // 补零
    let a = version1[i] || 0
    let b = version2[i] || 0
    a = Number(a)
    b = Number(b)
    if (a > b) {
      return -1
    } else if (a < b) {
      return 1
    }
  }

  // 没有 >  <` q
  return 0
}

let order = ['1.1.1.1.1.1', '6', '5.4.3', '2.3.1', '2.3.1.1']
console.log(order.sort(compareVersion))
