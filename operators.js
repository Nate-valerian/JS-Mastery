// Comparison Operators Demo in JavaScript

const x = 10;
const y = 5;
const z = "10"; // A string with the same value as x

// Greater than (>)
console.log("Is x > y? ", x > y); // true (10 is greater than 5)

// Greater than or equal to (>=)
console.log("Is x >= y? ", x >= y); // true (10 is greater than 5)

// Less than (<)
console.log("Is y < x? ", y < x); // true (5 is less than 10)

// Less than or equal to (<=)
console.log("Is y <= x? ", y <= x); // true (5 is less than 10)

// Loose equality (==) - Compares values, but ignores types
console.log("Is x == z? ", x == z); // true (10 == "10" because == allows type conversion)

// Strict equality (===) - Compares both value and type
console.log("Is x === z? ", x === z); // false (10 is a number, "10" is a string)

// Loose inequality (!=) - Checks if values are different, ignoring type
console.log("Is x != z? ", x != z); // false (10 == "10" due to type coercion)

// Strict inequality (!==) - Checks if values OR types are different
console.log("Is x !== z? ", x !== z); // true (10 is a number, "10" is a string)
