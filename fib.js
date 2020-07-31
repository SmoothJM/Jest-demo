
/**
 * 可能传入的值：
 * null, undefined, NaN, float, int, minus int,
 * string can be convert to int
 * string cannot be convert to int
 * 
 * @param {number} num 只能为正整数和可转化为正整数的字符串
 */
function fib(num){
    if(typeof Number(num) !== 'number' 
    || Number(num)<=0 
    || !Number.isInteger(Number(num))) return [];

    let arr = [];
    let first = 1;
    let second = 1;
    let sum = 0;

    if(num === 1) return [first];
    if(num === 2) return [first, second];
    if(num === 1 || num === 2) return 1;
    arr.push(first);
    arr.push(second);
    for(let i=3; i<=num; i=i+1) {
        sum = first + second;
        first = second;
        second = sum;
        arr.push(sum);
    }

    // return BigInt(sum);
    return arr;
}


function fibRec(num) {
    if(num === 1 || num === 2) return 1;
    return fibRec(num-1) + fibRec(num-2);
}




console.log(fibRec(46));
// console.log(fib(60));
// module.exports = fib;