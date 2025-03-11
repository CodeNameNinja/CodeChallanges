/**
 * Problem: Find All Factors of a Number
 *
 * Write a function that takes a number n and returns an array containing all the factors of that number. A factor of n is any number that divides n without leaving a remainder.
 *
 * Example:
 *    •	Input: 12
 *    •	Output: [1, 2, 3, 4, 6, 12]
 * (Since 1, 2, 3, 4, 6, and 12 divide 12 without leaving a remainder)
 *    •	Input: 7
 *    •	Output: [1, 7]
 * (Since 1 and 7 divide 7 without leaving a remainder)
 *    •	Input: 15
 *    •	Output: [1, 3, 5, 15]
 * (Since 1, 3, 5, and 15 divide 15 without leaving a remainder)
 */

function factor(n: number): number[] {
    const factors : number[] = [];

    for(let i = 0; i < Math.sqrt(n); i++){
        if(n % i === 0){
            factors.push(i)
        }

        if (i !== n / i) {
            factors.push(n / i);
        }
    }

    return factors.sort((a, b) => a - b);
}