Array.slice()
The slice() method can also be used to clone an array:


const numbers = [1, 2, 3, 4, 5];
const numbersCopy = numbers.slice();

console.log(numbersCopy); // [1, 2, 3, 4, 5]


Cloning Objects
Just like arrays, objects can be cloned using similar methods.

Spread Operator
Object.assign()
Spread Operator ...
You can clone objects using the spread operator:


const person = {
  name: 'Jon',
  age: 20,
};

const otherPerson = { ...person };

// Modify the cloned object
otherPerson.age = 21;

console.log(person); // { name: 'Jon', age: 20 }
console.log(otherPerson); // { name: 'Jon', age: 21 }


Object.assign()
The Object.assign() method can also be used to clone objects:




const A1 = { a: '2' };
const A2 = Object.assign({}, A1);

console.log(A2); // { a: "2" }
