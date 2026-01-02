/**
 * Question
 * Write a function that prints numbers from 1 to N.
 *
 * If a number is divisible by 3, print "Fizz".
 * If a number is divisible by 5, print "Buzz".
 * If a number is divisible by both 3 and 5, print "FizzBuzz".
 *
 * function fizzBuzz(n) {
 *     // Your code here
 * }
 *
 * // Example Input/Output
 * fizzBuzz(15);
 * // Expected output:
 * // 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz
 */

function fizzBuzz(n: number) {
    // Your code here
    if ((n % 3 === 0) && (n % 5 === 0)) {
        return "FizzBuzz"
    }
    else if(n % 3 == 0){
        return "Fizz"
    }
    else if (n % 5 == 0) {
        return "Buzz"
    }
}

// console.log(fizzBuzz(15))

for(let i = 0; i < 20; i++){
    console.log(i + " :" + fizzBuzz(i))
}