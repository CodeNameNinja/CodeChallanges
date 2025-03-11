/**
 * Problem: Check for Palindrome
 *
 * Write a function that checks whether a given string is a palindrome.
 *
 * A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward (ignoring spaces, punctuation, and capitalization).
 *
 * Example:
 *    •	Input: "madam"
 *    •	Output: true
 *    •	Input: "hello"
 *    •	Output: false
 *    •	Input: "A man a plan a canal Panama"
 *    •	Output: true
 */



function isPalindrome(s : string) : boolean {
    // Normalize the string by removing non-alphanumeric characters and converting to lowercase
    const cleanedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedString === cleanedString.split('').reverse().join('');
}

console.log(isPalindrome("mom"))
console.log(isPalindrome("dad"))
console.log(isPalindrome("dog"))
console.log(isPalindrome("A man a plan a canal Panama"))  // Should be true;