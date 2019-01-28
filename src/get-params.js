/**
 * 获取url参数
 * @param {string} url url地址
 * @param {string} key 要获取的参数值
 * @return {string} 要获取的参数值，没有则返回null
 */
function getParams (url, key) {
    var reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)', 'i');
    var params = url.split('?')[1];
    var r = params.match(reg);
    if (r !== null) return unescape(r[2]);
    return null;
}