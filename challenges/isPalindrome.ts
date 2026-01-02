function isPalindrome(str: string) {
    // Your code here

    const cleanString = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanString === cleanString.split('').reverse().join('')

}

// Example Input/Output
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man a plan a canal Panama"));