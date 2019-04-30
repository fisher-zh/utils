/**
 * 深拷贝函数
 * @param {object | array} source 要复制的源数据
 * @return {object | array} 返回复制后的数据
 */
function deepCopy (source, hash) {
    // 声明要返回的对象或者数组
    let target;
    const sourceType = type(source);
    // 判断源数据类型
    if (sourceType === 'Object') {
        target = {};
        for (let key in source) {
            if (type(source[key]) === 'Object' || type(source[key]) === 'Array') {
                target[key] = deepCopy(source[key]);
            } else if (type(source[key]) === 'Function') {
                const fnStr = source[key].toString();
                // 这里加上 return 避免直接使用 new Function(fnStr) 报错
                target[key] = new Function('return ' + fnStr)();
            } else {
                target[key] = source[key];
            }
        }
    } else if (sourceType === 'Array') {
        target = [];
        for (let i = 0; i < source.length; i++) {
            if (type(source[i]) === 'Object' || type(source[i]) === 'Array') {
                target[i] = deepCopy(source[i]);
            } else if (type(source[i]) === 'Function') {
                const fnStr = source[i].toString();
                // 这里加上 return 避免直接使用 new Function(fnStr) 报错
                target[i] = new Function('return ' + fnStr)();
            } else {
                target[i] = source[i];
            }
        }
    } else {
        return new Error('不支持的数据类型');
    }
    return target
}

/**
 * 判断某个值的类型
 * @param {*} value 要判断类型的值
 */
function type (value) {
    return Object.prototype.toString.call(value).slice(8, -1)
}

const a = {
    x: 123,
    y: 34,
    z: {
        m: 1,
        n: 2
    },
    arr: [1, 2, 3],
    fn: function () {
        console.log('123456')
    },
    fn2: () => {
        console.log(777777777777)
    }
}
a.a = a;

const b = deepCopy(a);
console.log(b);