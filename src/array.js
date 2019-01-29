/**
 * 查找数组中的最大值
 * @param {array} array 目标数组
 * * @return {number} 最大值
 */
function arrayMax (array) {
    // 使用allay将Math.max挂载在null上执行数组，因为apply是传入一个数组参数的的
    return Math.max.apply(null, array);
}

/**
 * 查找数组中的最小值
 * @param {array} array 目标数组
 * @return {number} 最小值
 */
function arrayMin (array) {
    // 使用allay将Math.max挂载在null上执行数组，因为apply是传入一个数组参数的的
    return Math.min.apply(null, array);
}

/**
 * 合并数组
 * @param {array} array1 目标数组
 * @param {array} array2 需要合并的数组
 * @return {array} array1
 */
function arrayConcat (array1, array2) {
    // 使用allay将Math.max挂载在null上执行数组，因为apply是传入一个数组参数的的
    Array.prototype.push.apply(array1, array2);
    return array1
}