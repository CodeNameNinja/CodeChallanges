/**
 * Problem: Sort an Array of Numbers
 *
 * Write a function that takes an array of numbers as input and returns a new array where the numbers are sorted in ascending order.
 *
 * Example:
 *    •	Input: [5, 3, 8, 2, 1]
 *    •	Output: [1, 2, 3, 5, 8]
 *    •	Input: [10, 20, 5, 7, 15]
 *    •	Output: [5, 7, 10, 15, 20]
 *    •	Input: [1, 1, 1, 1]
 *    •	Output: [1, 1, 1, 1] (all the numbers are the same)
 */

function SortArray(n: number[]): number[] {
    return n.sort((a: number, b:number)  => a - b);
}

console.log(SortArray([5, 3, 8, 2, 1]))
console.log(SortArray([10, 20, 5, 7, 15]))
console.log(SortArray([1, 1, 1, 1]))