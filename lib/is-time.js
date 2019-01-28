/**
 * 获取当前时间(年月日)
 *
 * type:CN中文格式
 *
 * _.getDate() => 2014-04-26
 * _.getDate('CN') => 2014年04月26日
 *
 */
var getDate = function (type) {
    var time = new Date(),
        year = time.getFullYear(),
        m = time.getMonth() + 1,
        month = m < 10 ? ('0' + m) : m,
        d = time.getDate(),
        day = d < 10 ? ('0' + d) : d,
        dateText = '';

    if (type === 'CN') {
        return dateText += year + '年' + month + '月' + day + '日';
    } else {
        return dateText += year + '-' + month + '-' + day;
    }
};


/**
 * 获取当前时间(时分秒)
 *
 * type:CN中文格式
 *
 * _.getTimes() => 17:06:25
 * _.getTimes('CN') => 17时06分25秒
 *
 */
var getTimes = function (type) {
    var time = new Date(),
        hours = time.getHours(),
        m = time.getMinutes(),
        minutes = m < 10 ? ('0' + m) : m,
        s = time.getSeconds(),
        seconds = s < 10 ? ('0' + s) : s,
        dateText = '';

    if (type === 'CN') {
        return dateText += hours + '时' + minutes + '分' + seconds + '秒';
    } else {
        return dateText += hours + ':' + minutes + ':' + seconds;
    }
};


/**
 * 根据日期[yyyy-mm-dd]获取星期，为空则获取当前时间星期
 *
 * _.getWeek() => 星期二
 * _.getWeek('2016-04-26') => 星期二
 *
 */
var getWeek = function (date) {
    var _ = this;
    date = date || (getDate('EN'));

    return '星期' + exNum(new Date(date).getDay());
};


/**
 * 来获得一个当前时间的整数时间戳
 *
 * _.now() => '20160426171141'
 *
 */
var now = function () {
    var _ = this,
        date = getDate('EN').toString(),
        times = getTimes('EN').toString();

    return (date.replace(/-/g, '') + times.replace(/:/g, ''));
};

/**
 * 将阿拉伯数字转为汉字数字
 *
 * var a = 2016
 * exNum(a) => 二零一六
 *
 */
var exNum = function (text) {
    var _ = this,
        charArr = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'],
        num = _.isNumber(text) ? text.toString() : _.getNum(text),
        numArr = num.split(''),
        len = numArr.length,
        result = '';

    for (var i = 0; i < len; i++) {
        result += charArr[parseInt(numArr[i])];
    }

    return result;
};