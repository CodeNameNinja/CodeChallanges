/**
 * Problem: Calculate Factorial of a Number
 *
 * Write a function that takes a number n and returns the factorial of that number.
 * The factorial of a number n (denoted n!) is the product of all positive integers less than or equal to n.
 *
 * Example:
 *    •	Input: 5
 *    •	Output: 120
 * (Since 5! = 5 × 4 × 3 × 2 × 1 = 120)
 *    •	Input: 3
 *    •	Output: 6
 * (Since 3! = 3 × 2 × 1 = 6)
 *    •	Input: 1
 *    •	Output: 1
 * (Since 1! = 1)
 *    •	Input: 0
 *    •	Output: 1
 * (By definition, 0! = 1)
 */

function factorial(n: number): number{
    let result = 1

    for(let i = 1; i <= n; i++){
        result *= i;
    }

    return result;
}

console.log(factorial(5))