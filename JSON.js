2. Creating a Deep Clone

To create a deep clone, we need to remove references from all nested
objects. One way to achieve this is by using JSON.stringify and JSON.parse.



const person = {
    firstName: 'Emma',
    car: {
        brand: 'BMW',
        color: 'blue',
        wheels: 4,
    }
};

const newPerson = { ...person };
newPerson.firstName = 'Mia';

console.log(person); // { firstName: 'Emma', car: { brand: 'BMW', color: 'blue', wheels: 4 } }
console.log(newPerson); // { firstName: 'Mia', car: { brand: 'BMW', color: 'blue', wheels: 4 } }
newPerson.car.color = 'red';

console.log(person); // { firstName: 'Emma', car: { brand: 'BMW', color: 'red', wheels: 4 } }
console.log(newPerson); // { firstName: 'Mia', car: { brand: 'BMW', color: 'red', wheels: 4 } }

const newPerson = JSON.parse(JSON.stringify(person));

newPerson.firstName = 'Mia';
newPerson.car.color = 'red';

console.log(person); // { firstName: 'Emma', car: { brand: 'BMW', color: 'blue', wheels: 4 } }
console.log(newPerson); // { firstName: 'Mia', car: { brand: 'BMW', color: 'red', wheels: 4 } }
