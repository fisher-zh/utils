/**
 * 函数的柯里化
 * @param {function} fn 需要柯里化的函数
 * @param {any} currArgs 该参数可以为需要的定值，类型根据fn参数的类型来确定
 */
function curry (fn, currArgs) {
    return function() {
        let args = [].slice.call(arguments);
        console.log(arguments)
        // 首次调用时，若未提供最后一个参数currArgs，则不用进行args的拼接
        if (currArgs !== undefined) {
            args = args.concat(currArgs);
        }

        // 递归调用，当参数未达到要求的数量时，再次返回柯里化的函数
        if (args.length < fn.length) {
            return curry(fn, args);
        }

        // 递归出口，执行函数
        return fn.apply(null, args);
    }
}
// example==================
// function sum(a, b, c) {
//     console.log(a + b + c);
// }

// const fn = curry(sum, 1);
// const fn2 = fn(2)
// console.log(fn2)