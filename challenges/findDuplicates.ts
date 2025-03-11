/**
 * Problem: Find Duplicates in an Array
 *
 * Write a function that takes an array of numbers as input and returns an array containing all the duplicate numbers (numbers that appear more than once) in the original array.
 *
 * Example:
 *    •	Input: [1, 2, 3, 2, 4, 5, 1]
 *    •	Output: [2, 1] (since 1 and 2 appear more than once)
 *    •	Input: [5, 6, 7, 8]
 *    •	Output: [] (since there are no duplicates)
 *    •	Input: [10, 10, 10, 5, 5]
 *    •	Output: [10, 5] (since both 10 and 5 appear more than once)
 */

function findDuplicates(arr: number[]): number[] {
    const seen = new Set<number>()
    const duplicates = new Set<number>()

    for(let num of arr){
        if(seen.has(num)){
            duplicates.add(num)
        }else{
            seen.add(num)
        }
    }

    return Array.from(duplicates);
}

console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1]))