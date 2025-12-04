if (condition) {
    value if true
} else {
    value if false
}

// Ternary
condition ? value if true : value if false;

if (person.age > 18) {
    console.log('You can drive');
} else {
    console.log('You may not drive yet');
}

// And now let's transfer it to a ternary.
// I'll first write it out and then we're going to explore it in detail;

person.age > 18 ? console.log('You can drive') : console.log('You may not drive yet');
