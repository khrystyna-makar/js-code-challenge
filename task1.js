// Find Maximum in Array: write a function to find the maximum element in an array

function max(arr) {
    return arr.reduce((cur, acc) => cur > acc ? cur : acc, arr[0]);
}

function max2(arr) {
    let max = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}


console.log(max([1, 18, 5, 3]) + '   ' + max2([1, 18, 5, 3]));