// // 1--> Given an array of numbers, use the map function with an arrow function to square each element of the array.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const squaredNumbers = numbers.map((num) => num * num);
// console.log(squaredNumbers);





// // 2--> Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators.
// function studentGrade(score){
//     return score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
// };
// console.log(studentGrade(5));





// // 3--> Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.
// const car = {
//     companyName: 'Toyota',
//     model: 'Camry',
//     year: 2020
// };
// function changeYear(year){
//     car.year = year;
// }
// changeYear(2024);
// const {model, year} = car;
// console.log(model, year);





// // 4--> Given an array of numbers, use the filter function to create a new array containing only the prime numbers.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const primeNumbers = numbers.filter(num => {
//     if (num <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// })
// console.log(primeNumbers);





// // 5--> State different use cases of map, filter and reduce functions.
// console.log("<<<<<<<<<<-- Map -->>>>>>>>>>")
// //Example: 1 (Transforming Data)-->
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const squaredNumbers = numbers.map(num => num * num);
// console.log("Example-1-result:", squaredNumbers);
// //Example: 2 (Extracting Values)-->
// const users = [
//     { name: 'John', age: 30 },
//     { name: 'Jane', age: 25 },
//     { name: 'Doe', age: 40 },
//     { name: 'Madie', age: 30 }
// ];
// const userNames = users.map(user => user.name);
// console.log("Example-2-result:", userNames, "\n\n\n");

// console.log("<<<<<<<<<<-- Filter -->>>>>>>>>>");
// //Example: 1 (Filtering Data)-->
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log("Example-1-result:", evenNumbers);
// //Example: 2 (Removing Unwanted Elements)-->
// const passingNumbers = numbers.filter(num => num > 5);
// console.log("Example-2-result:", passingNumbers, "\n\n\n");

// console.log("<<<<<<<<<<-- Reduce -->>>>>>>>>>");
// //Example: 1 (Aggregating Data)-->
// const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log("Example-1-result:", sum);
// //Example: 2 (Grouping Data)-->
// const ageGroup = users.reduce((group, person) => {
//     const age = person.age;
//     !group[age] && (group[age] = []);
//     group[age].push(person);
//     return group
// }, {});
// console.log("Example-2-result:", ageGroup);





// // 6--> Write an asynchronous function using async-await to fetch data from an API (you can use the JSONPlaceholder API) and log the result.
// async function fetchData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error fetching data:', error.message);
//     }
// }
// fetchData();





// 7--> Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing.
const people = [
    {name: 'John Doe', address: {street: '123 Main St', city: 'Anytown'}, contact: {phone: '123-456-7890'}},
    {name: 'Jane Doe', address: {street: '456 Elm St', city: 'Sometown'}}
];
people.map(person => {
    const phoneNumber = person.contact?.phone;
    console.log(`Phone number for ${person.name}:`, phoneNumber);
});