// 简单的时间格式化处理，目前fmt只支持 yyyy(年份) MM/M(月份) dd/d(日期) hh/h(小时) mm/m(分钟) ss/s(秒)

function formatDate(date, fmt) {
    // 简单处理date变量，增加容错性
    try {
        if (Number(date)) {
            date = Number(date);
        }
        date = new Date(date);
        if (!Date.parse(date)) {
            return '';
        }
    } catch (e) {
        console.error('formatDate error: ', e);
        return '';
    }
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    }
    for (let k in o) {
        let str = o[k] + '';
        if (new RegExp(`(${k})`).test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};

function padLeftZero(str) {
    return ('00' + str).substr(str.length);
}

/**
* 获取指定日期的某时某分某秒的时间戳
* @param {Date} date
* @param {Number} h
* @param {Number} m
* @param {Number} s
*/
function getZeroTime(date, h = 0, m = 0, s = 0) {
    let dateTmp = new Date(date);
    let dTmp = dateTmp.getFullYear();
    let mTmp = dateTmp.getMonth();
    let ddTmp = dateTmp.getDate();
    return new Date(dTmp, mTmp, ddTmp, h, m, s).getTime();
}

/**
* 将毫秒转成时分秒
*/
function time2Str(ms, stop) {
    let ansVal = '';
    let unitTmp = [
        {
            time: 24 * 3600000,
            text: '天'
        },
        {
            time: 3600000,
            text: '时'
        },
        {
            time: 60000,
            text: '分'
        },
        {
            time: 1000,
            text: '秒'
        },
        {
            time: 1,
            text: '毫秒'
        }
    ]
    for (let i = 0; i < unitTmp.length; i++) {
        let curUnit = unitTmp[i];
        let tmp = Math.floor(ms / curUnit.time);
        ms = ms % curUnit.time;
        if (tmp) {
            ansVal += tmp + curUnit.text
            if (stop) {
                break;
            }
        }
    }
    return ansVal;
}
export default formatDate;
