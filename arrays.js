const names = ['Jon', 'Bob', 'David', 'Mark'];

// Array Push - Adds a new value to the end of the array.
names.push('Dean');
console.log(names); // ["Jon", "Bob", "David", "Mark", "Dean"]

// Array Pop - Deletes the last element of an array
const lastElement = names.pop();
console.log(lastElement); // "Dean"
console.log(names); // ["Jon", "Bob", "David", "Mark"]

// Array Shift - Deletes the first element of an array
const firstElement = names.shift();
console.log(firstElement); // "Jon"
console.log(names); // ["Bob", "David", "Mark"]

// Array Unshift - Adds a new value to the start of an array
names.unshift('Dean');
console.log(names); // ["Dean", "Bob", "David", "Mark"]

// Array Splice - It adds/removes values from any position of an array
names.splice(2, 0, 'Jenny', 'Johnny');
console.log(names); // ["Dean", "Bob", "Jenny", "Johnny", "David", "Mark"]

// Array Slice - Copies certain parts of an array into a newly created array
const slicedNames = names.slice(1, 3);
console.log(slicedNames); // ["Bob", "Jenny"]


let sum = 0;
const numbers = [65, 44, 12, 4];

numbers.forEach((number) => {
    sum += number;
});

console.log(sum); // 125


const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
];

var aStudents = students.filter(function(student) {
    return student.grade >= 90;
});

console.log("Students with an A: ", aStudents);



const dataListings = [
    { address: "2301 Grand Avenue", city: "Oklahoma", state: "TX", rooms: 1, price: 220000, floorSpace: 2000, homeType: "Ranch" },
    { address: "3205 Chucky Avenue", city: "Houston", state: "TX", rooms: 8, price: 500000, floorSpace: 5000, homeType: "Apartment" },
    { address: "1234 Numbers Avenue", city: "Dallas", state: "TX", rooms: 5, price: 300000, floorSpace: 3500, homeType: "Studio" }
];

const searchData = {
    city: "Oklahoma",
    homeType: "Ranch",
    rooms: 1
};

var newDataListings = dataListings.filter(item => {
    return (
        searchData.city === item.city &&
        searchData.homeType === item.homeType &&
        searchData.rooms === item.rooms
    );
});

console.log("Filtered Listings: ", newDataListings);


selectedEmployees

javascript
var employeesData = [
    { name: "Sebastian Zuñiga", overtime: 5 },
    { name: "Cardi Vee", overtime: 10 },
    { name: "George Lopez", overtime: 12 }
];
var selectedEmployees = employeesData.filter(function(employee) {
    return employee.overtime >= 7;
});
console.log(selectedEmployees);


var itemsInStore = ["fruits", "tvs", "ipods", "carpets"];
var customerRequestedItem = "tvs";

// Returns item if it is found and undefined if it is not
var targetItem = itemsInStore.find(function(item) {
    return item === customerRequestedItem;
});

console.log("Target item: " + targetItem); // "tvs"


var numbers = [10, 2, 5, 1, 9];

// Sort numbers in ascending order
numbers.sort((a, b) => a - b);

console.log(numbers); // [1, 2, 5, 9, 10]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // 55

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// a = 0, c = 1 => a = 1
// a = 1, c = 2 => a = 3
// a = 3, c = 3 => a = 6
// ...

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // 55

const values = [5, 2, 3, 1, 2];

const findMax = (acc, val) => (val > acc ? val : acc);

const maximumNumber = values.reduce(findMax);

console.log(maximumNumber); // 5


