// const quick = require('./quickSort');
const bubble = require('./quickSort');
// test('sort normal array', () => {
//     expect(quick([5,10,2.2,2.2,7,34,-10,-20.5]))
//     .toEqual([-20.5,-10,2.2,2.2,5,7,10,34]);
// });

// test('parameter is null', () => {
//     expect(quick(null))
//     .toEqual(null);
// });

// test('parameter is undefine', () => {
//     expect(quick(undefined))
//     .toEqual(undefined);
// });

// test('arr includes null', () => {
//     expect(quick([2,3,null,5]))
//     .toEqual([2,3,null,5]);
// });

// test('arr includes undefined', () => {
//     expect(quick([2,3,undefined,5]))
//     .toEqual([2,3,undefined,5]);
// });

// test('arr includes NaN', () => {
//     expect(quick([2,3,NaN,5]))
//     .toEqual([2,3,NaN,5]);
// });

// test('arr includes string which can be conver to number', () => {
//     expect(quick([2,3,'1.1',5]))
//     .toEqual([2,3,'1.1',5]);
// });

// test('arr includes string which cannot be conver to number', () => {
//     expect(quick([2,3,'Jim',5]))
//     .toEqual([2,3,'Jim',5]);
// });

let nums = [];
const min = -10000;
const max = 10000;
const length = 10000;
for (i = 0; i < length; i = i + 1) {
    nums.push(Math.floor(Math.random() * (max - min + 1) + min));
}
function smallToHight(a, b) { return a - b; }

test('normal array which has long length', () => {
    expect(bubble(nums))
    .toEqual(nums.sort(smallToHight));
});