function quickSort(arr, low, high) {
    if (arr.length === 0
        || low < 0
        || high > arr.length
        || low >= high) return arr;
    for (let i = 0; i < arr.length; i = i + 1) {
        if (typeof arr[i] !== 'number' || isNaN(arr[i])) return arr;
    }
    let left = low;
    let right = high;
    let curr = arr[left];

    while (left < right) {
        while (left < right && arr[right] >= curr) {
            right = right - 1;
        }
        if (left === right) {
            break;
        }
        arr[left] = arr[right];
        arr[right] = curr;

        while (left < right && arr[left] <= curr) {
            left = left + 1;
        }
        if (left === right) {
            break;
        }
        arr[right] = arr[left];
        arr[left] = curr;
    }
    quickSort(arr, right + 1, high);
    quickSort(arr, low, right - 1);
    return arr;
}

function quickSortForLongArray(arr, low, high) {
    if (arr.length === 0
        || low < 0
        || high > arr.length
        || low >= high) return arr;
    for (let i = 0; i < arr.length; i = i + 1) {
        if (typeof arr[i] !== 'number' || isNaN(arr[i])) return false;
    }
    let stack = [];
    stack.push(low);
    stack.push(high);
    while (stack.length > 0) {
        let right = stack.pop();
        let left = stack.pop();
        let index = partition(arr, left, right);
        if(left<index-1) {
            stack.push(left);
            stack.push(index-1);
        }
        if(right> left+1) {
            stack.push(index+1);
            stack.push(right);
        }
    }
    return arr;
}


function partition(arr, left, right) {
    let curr = arr[left];
    while (left < right) {
        while (left < right && arr[right] >= curr) {
            right = right - 1;
        }
        arr[left] = arr[right];
        arr[right] = curr;

        while (left < right && arr[left] <= curr) {
            left = left + 1;
        }
        arr[right] = arr[left];
        arr[left] = curr;
    }
    return left;
}

function bubble(arr) {
    for(let i=0; i<arr.length; i=i+1){
        for(let j=0; j<arr.length-i-1; j = j+1){
            if(arr[j]>arr[j+1]){
                arr[j] = arr[j] + arr[j+1];
                arr[j+1] = arr[j] - arr[j+1];
                arr[j] = arr[j] - arr[j+1];
            }
        }
    }
    
    return arr;
}


let nums = [];
const min = -10000;
const max = 10000;
const length = 20000;
for (i = 0; i < length; i = i + 1) {
    nums.push(Math.floor(Math.random() * (max - min + 1) + min));
}

let start1 = new Date().getTime();
quickSortForLongArray(nums,0,nums.length-1);
let end1 = new Date().getTime();

let start2 = new Date().getTime();
bubble(nums);
let end2 = new Date().getTime();

console.log((end2-start2) - (end1-start1));




// module.exports = bubble;

// function quick(arr) {
//     if (!Array.isArray(arr)) return arr;
//     if (arr.length <= 100) {
//         return quickSort(arr, 0, arr.length - 1);
//     } else {
//         return quickSortForLongArray(arr, 0, arr.length - 1);
//     }
// }
// module.exports = quick;

// console.log(quick([5,10,2.2,2.2,7,34,-10,-20.5]));