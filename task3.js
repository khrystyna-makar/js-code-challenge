// Find Pair with Sum: find a pair of numbers in an array that adds up to a given sum.
// Example: findPairWithSum([1, 2, 3, 4, 5], 9)  - [4, 5]

function findPairWithSum(arr, sum) {
    let rez = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] === sum){
                rez.push(arr[i]);
                rez.push(arr[j]);
            }
        }
    }
    return rez;
}

let x = findPairWithSum([1, 2, 3, 4, 5], 9)
console.log(x)