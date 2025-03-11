/**
 * Problem: Count Vowels in a String
 *
 * Write a function that takes a string as input and returns the number of vowels (a, e, i, o, u) in that string.
 *
 * Example:
 *    •	Input: "hello"
 *    •	Output: 2 (because ‘e’ and ‘o’ are vowels)
 *    •	Input: "world"
 *    •	Output: 1 (because ‘o’ is the only vowel)
 *    •	Input: "programming"
 *    •	Output: 3 (because ‘o’, ‘a’, and ‘i’ are vowels)
 */

function countVowelsInAString(s: string): number {
    const vowels = [
        'a',
        'e',
        'i',
        'o',
        'u'
    ]
    let count = 0;

    for (let i = 0; i < s.length; i++){
        if(vowels.indexOf(s[i]) !== -1 ){
            count++
        }
    }

    return count
}

console.log(countVowelsInAString('hello'))
console.log(countVowelsInAString('world'))
console.log(countVowelsInAString('programming'))