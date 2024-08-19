// Find Duplicates in Array: write a function to find all duplicate elements in an array.
// Example: findDuplicates([1, 2, 2, 3, 4, 4, 5]) - [2, 4]

function findDuplicates(arr) {
    let rez = [];
    for(let i = 0; i < arr.length; i++) {

        if(!rez.includes(arr[i]) && (arr.slice(0, i).includes(arr[i]) || arr.slice(i+1).includes(arr[i]))) {
            rez.push(arr[i]);
        }
    }
    return rez;
}

let x = findDuplicates([1, 2, 2, 3, 4, 4, 5])
console.log(x);
