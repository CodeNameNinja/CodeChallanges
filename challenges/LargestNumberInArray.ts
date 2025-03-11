/**
 * Problem: Find the Largest Number in an Array
 *
 * Write a function that takes an array of numbers as input and returns the largest number in that array.
 *
 * Example:
 *    •	Input: [1, 5, 3, 9, 2]
 *    •	Output: 9
 *    •	Input: [100, 50, 25, 75]
 *    •	Output: 100
 *    •	Input: [-5, -1, -10, -2]
 *    •	Output: -1
 */

function largestNumberInArray(n: number[]): number {
    let largestNumber = n[0]

    for (let i = 0; i < n.length; i++) {
        if (n[i] > largestNumber) {
            largestNumber = n[i];
        }
    }

    return largestNumber;
}

console.log(largestNumberInArray([1, 5, 3, 9, 2]))
console.log(largestNumberInArray([100, 50, 25, 75]))
console.log(largestNumberInArray([-5, -1, -10, -2]))