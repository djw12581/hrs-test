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
        console.log(number, n)
        return true
    } else {
        console.log(number, n)
        return false
    }
}

console.log(fn(21))

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
console.log(filterArr(['aaa',' ','asd']))