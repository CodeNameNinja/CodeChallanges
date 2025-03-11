/**
 * Problem: Merge Two Objects
 *
 * Write a function that takes two objects as input and merges them into one.
 * If the two objects have the same key,
 * the value from the second object should overwrite the value from the first object.
 *
 * input
 * let obj1 = { a: 1, b: 2 };
 * let obj2 = { a: 1, b: 3 , c: 4};
 *
 * output
 * { a: 1, b: 3, c: 4 }
 */

function mergeTwoObjects(obj: object, obj2: object): object {
    return {...obj, ...obj2}
}

console.log(mergeTwoObjects({ a: 1, b: 2 }, { a: 1, b: 3, c: 4 } ))