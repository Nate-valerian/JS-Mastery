// Function Declaration
// A Function Declaration defines a named function.
// To create a function declaration, you use the function
//  keyword followed by the name of the function.

function name(parameters) {
  // statements
}

// Function Expression
// A Function Expression defines a named or anonymous function.
// An anonymous function is a function that has no name. In the example
// below, we are setting the anonymous function object equal to a variable.

let name = function(parameters) {
  // statements
}

// Arrow Function Expression
// An Arrow Function Expression is a shorter syntax for writing
// function expressions.
const name = (parameters) => {
  // statements
}

// Invoking a Function
// Functions execute when they are called. This process is known as invocation.
//  You can invoke a function by referencing the function name, followed by an
//  open and closed parenthesis: ( ).

// Let's explore an example.

// First, we’ll define a function named sayHi. This function will take one parameter,
//  name. When executed, the function will log that name back to the console:

function sayHi(name) {
  console.log(`Hi, ${name}`);
}

// To invoke our function, we call it while passing in the singular argument.
//  Here I am calling this function with the name Joe:

sayHi('Joe'); // Hi, Joe
