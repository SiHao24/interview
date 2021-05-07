/**
 * 解析URL参数为对象
 */

 function parseParams() {
  const url = window.location.href
  const paramsStr = /.+\?(.+)$/.exec(url)[1]
  const paramsArr = paramsStr.split('&')
  let paramsObj = {}
  paramsStr.forEach(param => {
    if (/=/.test(param)) {
      let [key, value] = param.split('=')
      value = decodeURIComponent(value)
      value = /\d+$/.test(value) ? parseFloat(value) : value

      if (paramsObj.hasOwnProperty(key)) {
        paramsObj[key] = [].concat(paramsObj[key], value)
      } else {
        paramsObj[key] = value
      }
    } else {
      // 处理没有value的参数
      paramsObj[param] = true
    }
  })
 }