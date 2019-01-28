/**
 * 判断object的类型和常用方法
 * 
 */

// 如果object是一个数组，返回true。
var isArray = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
};


// 如果object是一个Function，返回true。
var isFunction = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Function]';
};


// 如果object是一个对象，返回true。[排除数组和函数]
var isObject = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
};


// 如果object是一个字符串，返回true。
var isString = function (obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
};


// 如果object是一个数值，返回true (包括 NaN)。
var isNumber = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Number]';
};


// 如果object是一个布尔值，返回true。
var isBoolean = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Boolean]';
};


// 如果object是一个Date类型，返回true。
var isDate = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Date]';
};


// 如果object的值是 null、undefined或者空，返回true。
var isNull = function (value) {
    return value === '' || value === undefined || value === null ? true : false;
};

/**
 * 如果对象包含给定的键，返回true。
 *
 * var a = {'name':'leo','age':25}
 * _.has(a,'age') => true
 * _.has(a,'e-mail') => false
 *
 */
var has = function (obj, key) {
    var _ = this,
        flag = false;

    if (isObject(obj)) {
        for (var v in obj) {
            if (v === key) flag = true;
        }
    }

    return flag;
};

/**
 * 获取object对象所有的属性名称。
 *
 * var a = {'name':'leo','age':25}
 * keys(a) => ['name','age']
 *
 */
var keys = function (obj) {
    var _ = this,
        outArr = [];

    if (isObject(obj)) {
        for (var p in obj) {
            if (has(obj, p)) outArr.push(p);
        }
    }

    return outArr;
};

/**
 * 返回object对象所有的属性值。
 *
 * var a = {'name':'leo','age':25}
 * values(a) => ['leo',25]
 *
 */
var values = function (obj) {
    var _ = this,
        outArr = [];

    if (isObject(obj)) {
        for (var v in obj) {
            if (has(obj, v)) outArr.push(obj[v]);
        }
    }

    return outArr;
};

/**
 * 把一个对象转变为一个[key, value]形式的数组。
 *
 * var a = {'name':'leo','age':25}
 * _.pairs(a) => [['name','leo'],['age',25]]
 *
 */
var pairs = function (obj) {
    var _ = this,
        objArr = [];

    if (isObject(obj)) {
        var keys = keys(obj),
            len = keys.length;

        objArr.length = len;

        for (var i = 0; i < len; i++) {
            objArr[i] = [keys[i], obj[keys[i]]];
        }
    }

    return objArr;
};

/**
 * 去除对象里的假值键
 *
 * var a = {'name':'leo','age':25,'e-mail':'','website':null}
 * _.objCompact(a) => {'name':'leo','age':25}
 *
 */
var objCompact = function (obj) {
    for (var v in obj) {
        if (!obj[v]) {
            delete obj[v];
        }
    }
    return obj;
};

/**
 * 返回一个object副本，只过滤出keys[数组]参数指定的属性值。
 *
 * var a = {'name':'leo','age':25,'e-mail':'','website':null}
 * pick(a,['name','leo']) => {'name':'leo'}
 *
 */
var pick = function (obj, keys) {
    var newObj = {};

    for (var v in keys) {
        if (obj.hasOwnProperty(keys[v])) {
            newObj[keys[v]] = obj[keys[v]];
        }
    }

    return newObj;
};

/**
 * 将对象合并为一个对象返回
 *
 * _.assign({'name':'leo'},{'age':25}) => {'name':'leo','age':25}
 *
 */
var assign = function (targetObj) {
    var _ = this,
        target = targetObj || {},
        objArr = arguments,
        len = objArr.length;

    for (var i = 1; i < len; i++) {
        for (var v in objArr[i]) {
            if (!has(target, objArr[i][v])) {
                target[v] = objArr[i][v];
            }
        }
    }

    return target;
};