function throttle (fn, delay, mustRunDelay) {
    var timer = null;
    var start;
    // 这里是利用一个闭包来保存变量，避免污染全局变量
    return function () {
        var context = this;
        var args = arguments;
        var current = +new Date();
        clearTimeout(timer);
        if (!start) {
            // 设置开始时间标记
            start = current;
        }
        if (current - start >= mustRunDelay) {
            fn.apply(context, args);
            start = current;
        } else {
            timer = setTimeout(function () {
                fn.apply(context, args);
            }, delay);
        }
    };
};
