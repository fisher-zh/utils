/**
 * 函数的柯里化
 * @param {function} fn 需要柯里化的函数
 * @param {any} currArgs 该参数可以为需要的定值，类型根据fn参数的类型来确定
 */
function curry (fn, currArgs) {
    return function() {
        let args = [].slice.call(arguments);
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

// 常用场景=================
const persons = [
    { name: 'kevin', age: 4 },
    { name: 'bob', age: 5 }
];

// 这里的 curry 函数，之前已实现
const getProp = curry(function (obj, index) {
    const args = [].slice.call(arguments);
    return obj[args[args.length - 1]];
});
const ages = persons.map(getProp('age')); // [4, 5]

// 解析
persons.map(function(currentValue, index, array) {})
// 当使用map处理的时候getProp其实有四个参数 即 getProp(currentValue, index, array, 'age')
// currentValue 数组中正在处理的当前元素。
// index可选  数组中正在处理的当前元素的索引。
// array可选  map 方法被调用的数组。