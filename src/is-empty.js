/**
 * 验证是否是空数组和空对象
 * @param {array | object} obj
 */
function isEmpty(obj) {
    if (Object.prototype.toString.call(obj) === '[object Object]') {
        return isEmptyObj(obj)
    } else if (Object.prototype.toString.call(obj) === '[object Array]') {
        return isEmptyArr(obj)
    } else {
        return false
    }
}
/**
 * 是否是空数组
 * @param {arr} arr
 */
function isEmptyArr(arr) {
    if (arr.length === 0) {
        return true
    } else {
        return false
    }
}
/**
 * 是否是空对象
 * @param {obj} obj
 */
function isEmptyObj(obj) {
    for (var _ in obj) {
        return false
    }
    return true
}
