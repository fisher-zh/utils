/**
 * 验证手机号
 * @param {number | string} phone
 */
function isPhone(phone) {
    var reg = /^1[34578]\d{9}$/
    if (reg.test(phone)) {
        return true
    } else {
        return false
    }
}

