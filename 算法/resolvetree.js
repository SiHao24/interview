// 深度优先遍历依赖树
function resolve(root) {
  let res= []
  let map = new Map()
  function help(node) {
    if (node.require) {
      for (let dep of node.require) {
        help(dep)
      }
      if (!map.get(node.name)) {
        res.push(node.name)
      }
      map.set(node.name, true)
    }
  }
  help(root)

  return res
}