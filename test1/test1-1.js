// 给一个整数 判断是否为回文数 如 12321 1221 

var fn = function (number) {
    // 将整数转换为字符串
    var str = number + ''
    // 将字符串转数组
    var arr = str.split('')
    // 将数组的逆序合并成字符串与原数字相比较
    var n = arr.reverse().join('')
    // 比较是否相等
    if (number == n) {
        // console.log('比较的number和n的值', number, n)
        return true
    } else {
        // console.log('比较的number和n的值', number, n)
        return false
    }
}

console.log('参数12321 返回值为', fn(12321))
console.log('参数1221 返回值为', fn(1221))
console.log('参数12581 返回值为', fn(12581))

// 从排序好的数组中删除重复的数，返回新数组的长度

var filterArr = function (arr) {  
    // es6 set数据结构
    var o = new Set(arr)
    // es6 类数组转数组方法
    var newArr = Array.from(o)
    // 获取数组长度
    var l = newArr.length
    return l
}

console.log(`参数['aaa',' ','asd'] 返回值为`, filterArr(['aaa',' ','asd']))
console.log(`参数['aaa','aaa','asd'] 返回值为`, filterArr(['aaa','aaa','asd']))