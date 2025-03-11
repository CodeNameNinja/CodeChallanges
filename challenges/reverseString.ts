function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

const reversedString = reverseString('123');

console.log(reversedString);
