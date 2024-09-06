// Calculate Factorial: Write a function to calculate the factorial of a number.
//
// 	Example:
// factorial(5); // 120

function factorial(n){
    let rez = 1;
    for(let i = 2; i<=n; i++){
        rez *= i;
    }
    return rez;
 }

 console.log(factorial(5));

 function factorial2(n){
    if(n <= 1){
        return 1;
    }
    return n * factorial2(n-1);
 }

 console.log(factorial2(5));