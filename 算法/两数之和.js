// 方法一：暴力解法
function twoSum1(nums, target) {
  const numsLength = nums.length
  const res = []
  for(let i = 0; i < numsLength; i++) {
    for (let j = i + 1; j < numsLength; j++) {
      if (nums[i] === target - nums[j]) {
        res.push([i, j])
      }
    }
  }
  console.log('res: ', res)
  return res
}


/**
 * 借用Map
 * 可以借用Map存储遍历过的元素及其索引，每遍历一个元素时，去Map中查看是否存在满足要求的元素
 * 如果存在的话 将其对应的索引从Map中取出和当前索引值组合为数组返回即可，如果不存在则将当前值作为键，当前索引作为值存入
 * 题目要求返回的是数组下标，索引Map中的键名是数组元素，键值为索引
 */

 function twoSum2 (nums, target) {
   const map = new Map()
   const numsLength = nums.length
   const res = []
   for (let i = 0; i < numsLength; i++) {
     const diff = target - nums[i]
     if (map.get(diff) !== undefined) {
      res.push([map.get(diff), i])
     }
     map.set(nums[i], i)
    }
   console.log('res: ', res)
   return res
 }

 const arrs = [1, 2, 3, 4, 5, 6]
twoSum2(arrs, 5)

