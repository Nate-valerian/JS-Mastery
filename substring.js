// Getting a Substring
// The best method for getting a substring of a string is str.slice(). This method allows you to extract a portion of a string based on specified start and end positions.

// str.slice(start, end)
// The str.slice() method returns the part of the string from start to (but not including) end. If the end parameter is omitted, slice() extracts to the end of the string.

// Let's see it in action with an example:

const exampleString = 'hotdog';

console.log(exampleString.slice(3, 6)); // "dog"

// Splitting Strings
// Sometimes, we might want to split a string into multiple substrings.
//  For that, we'll use a string method called split().

// The split() method divides a string into an array of substrings based
//  on a specified separator. Let's look at some examples.

// Splitting a Word into Characters
// To split a word into individual characters, you can use an empty
// string as the separator:

const exampleString = 'dog';

console.log(exampleString.split('')); // ["d", "o", "g"]

// Reverse, Repeat, & Trim a String
// Let's explore how to perform these common string operations.

// Reverse
// There isn't a built-in string method that reverses a string directly. However,
// we can use the knowledge we've previously gained! Remember how we can split a string
//  into an array of characters ? Arrays have a reverse() method.

// Here's the process:

// Split the string into an array of characters.
// Reverse the newly created array.
// Join the array back into a string.

const exampleString = 'test';

const reversedString = exampleString.split('').reverse().join('');
console.log(reversedString); // "tset"

// Repeat
// If you want to repeat a string a certain number of times,
//  you can easily do that using the string.repeat() method.

const dogSays = 'woof';

console.log(dogSays.repeat(5)); // "woofwoofwoofwoofwoof"

// Trim
// Sometimes, users might accidentally add extra spaces to their input,
//  such as emails or usernames. We can clean these empty spaces using
//  the trim() method.

const str = '       Hello World!        ';

console.log(str.trim()); // "Hello World!"
