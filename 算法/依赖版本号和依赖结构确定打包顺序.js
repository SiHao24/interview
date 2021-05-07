function resolve(root) {
  function help(node) {
    let map = new Map()
    if (node && node.require) {
      for (let dep of node.required) {
        help(dep)
      }
    }

    let [fileName, v] = node.name.split('@')
    if (map.get(fileName)) {
      let v2 = map.get(fileName)
      if (compareVersion(v, v2) === 1) {
        map.set(fileName, v)
      }
    } else {
      map.set(fileName, v)
    }

    help(root)

    let res = [...map.keys()].map(fileName => {
      return `${fileName}${map.get(fileName) ? `@${map.get(fileName)}` : ''}`
    })

    return res
  }
}

resolve(tree2)