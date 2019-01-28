/**
 * 验证邮箱
 * @param {string} email
 */
function isEmail(email) {
    var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    if (reg.test(email)) {
        return true
    } else {
        return false
    }
}
