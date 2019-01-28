/**
 * 验证统一社会信用代码
 * @param {number | string} credNum
 * @return {boolean} 是否为统一社会信用代码
 */
function isCreditCode(credNum) {
    var ret = false;
    if (credNum.length === 18) {
        var reg = /^([0-9ABCDEFGHJKLMNPQRTUWXY]{2})([0-9]{6})([0-9A-Z]{8})([0-9|X]{1})([0-9ABCDEFGHJKLMNPQRTUWXY]{1})$/;
        if (reg.test(credNum)) {
            var str = '0123456789ABCDEFGHJKLMNPQRTUWXY'
            var ws = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28]
            var sum = 0
            for (var i = 0; i < 17; i++) {
                sum += str.indexOf(credNum.charAt(i)) * ws[i]
            }
            var c18 = 31 - (sum % 31)
            if (c18 === 31) {
                c18 = '0'
            }

            if (str.charAt(c18) === credNum.charAt(17)) {
                ret = true
            }
        }
    }
    return ret;
}

