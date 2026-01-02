// Determine if a number is prime

function isPrime(number: number): boolean {

    if (number <= 1) {
        return false; // 0 and 1 are not prime numbers
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; // Found a divisor, so it's not prime
        }
    }

    return true; // No divisors found, so it's prime
}

console.log(isPrime(1))
console.log(isPrime(5))
console.log(isPrime(7))
console.log(isPrime(8))