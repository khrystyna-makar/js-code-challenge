// Find Missing Number in Sequence: Find the missing number in a sequence of consecutive numbers.
//
// 	Example:
// findMissing([1, 2, 4, 5]); // 3

function findMissing(arr){
    for(let i = 0; i < arr.length-1; i++){
        if(arr[i+1] - arr[i] === 2) {
            return arr[i]+1;
        }
    }
}

console.log(findMissing([1, 2, 3, 4, 5, 7]));