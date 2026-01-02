/**
 * function removeDuplicates(arr) {
 * // Implement solution
 * }
 *
 * // Example usage
 * const numbers = [1, 2, 2, 3, 4, 4, 5];
 * console.log(removeDuplicates(numbers)); // Output: [1, 2, 3, 4, 5]
 */

function removeDuplicates(arr: number[]): number[] {
   return Array.from(new Set<number>(arr))
}

const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(numbers)); // Output: [1, 2, 3, 4, 5]