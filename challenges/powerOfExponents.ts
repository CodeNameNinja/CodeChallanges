/**
 * Problem: Calculate Power of a Number
 *
 * Write a function that takes two numbers: base and exponent,
 * and returns the result of raising base to the power of exponent (i.e., base^exponent).
 *
 * Example:
 *    •	Input: 2, 3
 *    •	Output: 8
 * (Since 2^3 = 2 × 2 × 2 = 8)
 *    •	Input: 5, 0
 *    •	Output: 1
 * (Any number raised to the power of 0 is 1)
 *    •	Input: 7, 2
 *    •	Output: 49
 * (Since 7^2 = 7 × 7 = 49)
 *    •	Input: 10, -1
 *    •	Output: 0.1
 * (Since 10^(-1) = 1 / 10 = 0.1)
 */
function power(base: number, exponent: number): number {
    // If the exponent is 0, return 1 as base^0 = 1
    if (exponent === 0) {
        return 1;
    }

    let result = 1;

    // If exponent is positive, multiply base by itself 'exponent' times
    for (let i = 1; i <= Math.abs(exponent); i++) {
        result *= base;
    }

    // If exponent is negative, return the reciprocal of the result
    if (exponent < 0) {
        return 1 / result;
    }

    return result;
}


console.log(power(2, 3));  // Output: 8
console.log(power(5, 0));  // Output: 1
console.log(power(7, 2));  // Output: 49
console.log(power(10, -1));  // Output: 0.1
console.log(power(3, 4));  // Output: 81