/**
 * 可能是整数，字符串(可转number)，字符串(number)，null, undefine, NaN
 * 超大数处理
 * 小数处理
 * @param {*} a 
 * @param {*} b 
 */
function add(a, b) {
    let aDec, bDec, maxDec;
    if (Number.isNaN(parseFloat(a)) || Number.isNaN(parseFloat(b))) {
        return null;
    } else {
        aDec = a.toString().split(".")[1];
        bDec = b.toString().split(".")[1];
        if (aDec !== undefined && bDec !== undefined) {
            aDec = aDec.length;
            bDec = bDec.length;
            maxDec = Math.pow(10, Math.max(aDec, bDec));
            return (a * maxDec + b * maxDec) / maxDec;
        } else {
            return a+b;
        }
    }
}

module.exports = add;