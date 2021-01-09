// Завдання номер 1

// const arrayOfNumbers = [24, 11, 5, 127];

// // const getMinOfArray = numbers => {
// //     // return Math.min(...numbers);

// // };
// const getMinOfArray = numbers => Math.min(...numbers);
// const getMaxOfArray = numbers => Math.max(...numbers);

// console.log(getMinOfArray(arrayOfNumbers));
// console.log(getMaxOfArray(arrayOfNumbers));

// Task number 2

// const calculateAverage = (...args) => {
//     let sum = 0;
//     for (let i = 0; i < args.length; i++) {
//         sum += args[i];
//     }
//     const average = sum / args.length;
//     return average;

// };

// console.log(calculateAverage(1, 2, 3, 4));
// console.log(calculateAverage(14, 8, 2));
// console.log(calculateAverage(27, 43, 2, 8, 36));

// Task number 3

// const arr = ['HTML', 'JavaScript', 'Algol', 'CSS', 'Python', 'Basic'];

// const sortStringArray = stringArray => {
//     const sortedArray = stringArray.slice(0);

//     for (let i = sortedArray.length - 1; i > 0; i--) {
//         for (let j = 0; j < i; j++) {
//             if (sortedArray[j] > sortedArray[j + 1]) {

//                 [sortedArray[j], sortedArray[j + 1]] = [sortedArray[j + 1], sortedArray[j]];
//             }
//         }
//     }
//     return sortedArray;
// };


// console.table(arr);
// console.table(sortStringArray(arr));

// Task number 4

// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };

// const userEntries = Object.entries(user);

// // for (const entry of userEntries) {
// //     const [key, value] = entry;
// //     console.log(`${key}: ${value}`);
// // };

// // console.log(userEntries);
// for (const [key, value] of userEntries) {
//     console.log(`${key}: ${value}`);
// };

// Task number 5
const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};

// const showUserInfo = (name, age, hobby, premium) => {
//     const message = `name: ${name}, age: ${age}, hobby: ${hobby}, premium: ${premium}`;
//     console.log(message);
// };
// const { name, age, hobby, premium } = user;
// showUserInfo(name, age, hobby, premium);

// const showUserInfo = anyUser => {
//     const { name, age, hobby, premium } = anyUser;

//     const message = `name: ${name}, age: ${age}, hobby: ${hobby}, premium: ${premium}`;
//     console.log(message);
// };
const showUserInfo = ({name, age, hobby, premium}) => {

    const message = `name: ${name}, age: ${age}, hobby: ${hobby}, premium: ${premium}`;
    console.log(message);
};
showUserInfo(user);
showUserInfo({
    name: 'Alex',
    age: 35,
    hobby: 'Tennis',
    premium: false,
});
showUserInfo({ ...user });