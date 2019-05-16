/**
 * 格式化数字，给小于某位数的值加0
 * @param {number} val 要格式化的值
 * @param {*} len 给多少位数加0 比如len=2 那就是2位以下的前面补0
 */
function pad (val, len) {
    val = String(val);
    len = len || 2;
    while (val.length < len) {
        val = '0' + val;
    }
    return val;
}

/**
 * 遍历数组，只去数组每个元素的前n个字符
 * @param {array} arr 数据源数组
 * @param {*} sLen 取每个数组元素的前 sLen 个字符串
 */
function shorten (arr, sLen) {
    var newArr = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        newArr.push(arr[i].substr(0, sLen));
    }
    return newArr;
}
const masks = {
    'default': 'ddd MMM dd yyyy HH:mm:ss',
    shortDate: 'M/D/yy',
    mediumDate: 'MMM d, yyyy',
    longDate: 'MMMM d, yyyy',
    fullDate: 'dddd, MMMM d, yyyy',
    shortTime: 'HH:mm',
    mediumTime: 'HH:mm:ss',
    longTime: 'HH:mm:ss.SSS'
};
const formatFlags = {
    D: function (dateObj) {
        return dateObj.getDay();
    },
    DD: function (dateObj) {
        return pad(dateObj.getDay());
    },
    Do: function (dateObj, i18n) {
        return i18n.DoFn(dateObj.getDate());
    },
    d: function (dateObj) {
        return dateObj.getDate();
    },
    dd: function (dateObj) {
        return pad(dateObj.getDate());
    },
    ddd: function (dateObj, i18n) {
        return i18n.dayNamesShort[dateObj.getDay()];
    },
    dddd: function (dateObj, i18n) {
        return i18n.dayNames[dateObj.getDay()];
    },
    M: function (dateObj) {
        return dateObj.getMonth() + 1;
    },
    MM: function (dateObj) {
        return pad(dateObj.getMonth() + 1);
    },
    MMM: function (dateObj, i18n) {
        return i18n.monthNamesShort[dateObj.getMonth()];
    },
    MMMM: function (dateObj, i18n) {
        return i18n.monthNames[dateObj.getMonth()];
    },
    yy: function (dateObj) {
        return String(dateObj.getFullYear()).substr(2);
    },
    yyyy: function (dateObj) {
        return dateObj.getFullYear();
    },
    h: function (dateObj) {
        return dateObj.getHours() % 12 || 12;
    },
    hh: function (dateObj) {
        return pad(dateObj.getHours() % 12 || 12);
    },
    H: function (dateObj) {
        return dateObj.getHours();
    },
    HH: function (dateObj) {
        return pad(dateObj.getHours());
    },
    m: function (dateObj) {
        return dateObj.getMinutes();
    },
    mm: function (dateObj) {
        return pad(dateObj.getMinutes());
    },
    s: function (dateObj) {
        return dateObj.getSeconds();
    },
    ss: function (dateObj) {
        return pad(dateObj.getSeconds());
    },
    S: function (dateObj) {
        return Math.round(dateObj.getMilliseconds() / 100);
    },
    SS: function (dateObj) {
        return pad(Math.round(dateObj.getMilliseconds() / 10), 2);
    },
    SSS: function (dateObj) {
        return pad(dateObj.getMilliseconds(), 3);
    },
    a: function (dateObj, i18n) {
        return dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1];
    },
    A: function (dateObj, i18n) {
        return dateObj.getHours() < 12 ? i18n.amPm[0].toUpperCase() : i18n.amPm[1].toUpperCase();
    },
    ZZ: function (dateObj) {
        var o = dateObj.getTimezoneOffset();
        return (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4);
    }
};
const token = /d{1,4}|M{1,4}|yy(?:yy)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthNamesShort = shorten(monthNames, 3);
const dayNamesShort = shorten(dayNames, 3);
const i18n = {
    dayNamesShort: dayNamesShort,
    dayNames: dayNames,
    monthNamesShort: monthNamesShort,
    monthNames: monthNames,
    amPm: ['am', 'pm'],
    DoFn: function DoFn(D) {
        return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10];
    }
};

/***
 * Format a date
 * @method format
 * @param {Date|number} dateObj
 * @param {string} mask Format of the date, i.e. 'mm-dd-yy' or 'shortDate'
 */
const format = function (dateObj, mask, i18nSettings) {
    console.log(i18nSettings)
    // var i18n = i18nSettings || i18n;

    if (typeof dateObj === 'number') {
        dateObj = new Date(dateObj);
    }

    if (Object.prototype.toString.call(dateObj) !== '[object Date]' || isNaN(dateObj.getTime())) {
        throw new Error('Invalid Date in fecha.format');
    }

    mask = masks[mask] || mask || masks['default'];

    console.log(i18n)
    return mask.replace(token, function ($0) {
        return $0 in formatFlags ? formatFlags[$0](dateObj, i18n) : $0.slice(1, $0.length - 1);
    });
};

format(new Date())

var str = 'yyyyhhhjjxjxxx'
str.replace(/([xk])\1|[aA]|"[^"]*"|'[^']*'/g, function ($0) {
    console.log($0)
    return '111-'
})