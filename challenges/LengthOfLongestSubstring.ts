/**
 * Problem: Longest Substring Without Repeating Characters
 *
 * Write a function that takes a string as input and returns the length of the longest substring without repeating characters.
 *
 *     For example:
 *     •	Input: "abcabcbb"
 *    •	Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *    •	Input: "bbbbb"
 *    •	Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *    •	Input: "pwwkew"
 *    •	Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 *
 * Approach:
 *
 *     This is a typical sliding window problem, and the optimal approach involves using two pointers (start and end) and a set to track the characters that have already been seen within the window.
 *
 *     Here’s how you can approach it:
 *     1.	Use two pointers (start and end) to represent a sliding window.
 * 2.	Use a set or a map to store characters within the window and check for duplicates.
 *     3.	If a duplicate character is found, move the start pointer to the right of the last occurrence of that character.
 * 4.	Keep track of the maximum length of the substring found.
 */

function lengthOfLongestSubstring(s: string): number {
   let charSet = new Set<string>()
    let start = 0;
   let maxLength: number = 0

    for(let end = 0; end < s.length; end++) {
        while(charSet.has(s[end])){
            charSet.delete(s[end]);
            start++
        }

        charSet.add(s[end]);
        maxLength = Math.max(maxLength, end - start + 1)
    }

    return maxLength
}

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))