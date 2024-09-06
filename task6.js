// Find Prime Numbers: Write a function to find all prime numbers up to a given number.
//
// 	Example:
// findPrimes(10); // [2, 3, 5, 7]

function findPrimes(number){
    let primes = [];
    for(let i = 2; i <= number; i++) {
        if(isPrime(i)){
            primes.push(i)
        }
    }
    return primes;
}

function isPrime(number){
    for(let i=2; i < number; i++) {
        if(number % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(findPrimes(10));