// Find Keys with a Specific Value: Write a function to find all keys in an object that have a specific value.
//
//   Example:
// findKeys({ a: 1, b: 2, c: 1 }, 1); // ["a", "c"]

function findKeys(obj, value) {
    let keys = [];
    for(let key in obj){
        if(obj[key] === value){
            keys.push(key);
        }
    }
    return keys;
}

console.log(findKeys({ a: 1, b: 2, c: 1 }, 1));

