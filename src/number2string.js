function number2string() {
    if (!value) {
        return '--'
    }
    const num = Number(value);
    if (!num) {
        return '--'
    }
    const numStr = num + '';
    const arr = numStr.split('');
    let resultStr = '';
    for (let i = 0; i < arr.length; i++) {
        if ((arr.length - i) % 3 === 0 && i > 0 && i < arr.length - 1) {
            resultStr += ','
        }
        resultStr += arr[i];
    }
    return resultStr;
}
