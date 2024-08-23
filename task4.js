// Check for Palindrome: Write a function to check if a given string is a palindrome.
//
//   Example:
// isPalindrome("racecar"); // true

function isPalindrome(str) {
    let arr = str.split('');
    for(let i = 0; i < arr.length / 2; i++) {
        if (arr[i] != arr[arr.length - i - 1] ) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("raccar"));
console.log(isPalindrome("car"));
