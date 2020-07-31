const { cloneDeepWithoutLoc } = require("@babel/types");

let arr = [1,2,3,4,5,'hello'];

console.log(...arr);




// function fn(n) {
//     let nums = [];
//     let min = 2, max = 32;
//     if (Number.isInteger(parseInt(n))
//         && n >= 2 && n <= 32
//         && !Number.isNaN(n)
//         && Number.isInteger(parseFloat(n))
//     ) {

//         for (let i = 0; nums.length < n; i = i + 1) {
//             let num = Math.floor(Math.random() * (max - min + 1) + min);
//             if (nums.indexOf(num) === -1) {
//                 nums.push(num);
//             }
//         }

//     } else {
//         return [];
//     }


//     console.log(nums);

// }
// console.log('1: ')
// fn('10');
// console.log('2: ')
// fn('0');
// console.log('3: ')
// fn(0);
// console.log('4: ')
// fn('hello');
// console.log('5: ')
// fn('1.1');
// console.log('6: ')
// fn(1.1);
// console.log('7: ')
// fn(-10);
// console.log('8: ')
// fn('-10');
// console.log('9: ')
// fn([1,2,3]);
// fn(30)