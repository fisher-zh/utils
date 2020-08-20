const throttle = function(fn, delay, mustRunDelay){
    let timer = null;
    let start = '';
    // 这里是利用一个闭包来保存变量，避免污染全局变量
    return function(){
        const context = this,
        args = arguments,
        current = +new Date();
        clearTimeout(timer);
        if(!start){
            // 设置开始时间标记
            start = current;
        }
        if(current - start >= mustRunDelay){
            fn.apply(context, args);
            start = current;
        }
        else {
            timer = setTimeout(function(){
                fn.apply(context, args);
            }, delay);
        }
    };
 };
 