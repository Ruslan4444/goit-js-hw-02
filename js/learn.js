
// // const hotel = {}; 
// // console.log({});
// const hotel = {
//     name: 'Sunset resort',
//     stars: 5,
//     capacity: 200,
// };
// console.log(hotel);
// console.log(hotel.name);
// console.log(hotel.stars);
// console.log(hotel.capacity);
// console.log(hotel.adress);

// // Інший запис доступу дло ключів обєкта

// console.log(hotel['name']);
// console.log(hotel['stars']);
// console.log(hotel['capacity']);

// const key = 'stars'; 
// console.log(hotel[key]);

// // Є можливість змінювати значення ключів обєкта
// hotel.stars = 3;
// console.log(hotel);

// // Можна добавити пустий масив у наш обєкт
// hotel.guests = [];
// console.log(hotel);

// // Обєкт це ссилка
// const a = { x: 1, y: 2 };
// const b = a;

// console.log(b === a);

// // Массив це підвид обєкта
// const arr = ['a', 'b', 'c'];
// console.log(arr);

// arr.hello = ':)';
// console.log(arr);

// Функція це підвид обєкта
// const fn = function () { };
// fn.hello = 'xD';
// console.log(fn.hello);

// Методи обєкта
// const hotel = {
//     name: 'Sunset resort',
//     stars: 5,
//     capacity: 200,
//     // updateName: function(newName) {
//     //     console.log('this', this);
//     //     this.name = newName;
//     // },
//     updateName(newName) {
//             this.name = newName;
//         console.log('this', this);
//         this.someMethod();
//     },
//     someMethod() {
//         console.log('Hello from someMethod');
//     }
//     };
//     // console.log(hotel);
//     // this - тільки в методі обєкта!!!
    
// hotel.updateName(hotel, 'Lagoon');
// hotel.someMethod();
    // const updateHotelName = function (hotel, newName) {
        //     hotel.name = newName;
        // };
        // console.log(hotel);
// const objA = {
//     x: 10,
//     objB: {
//         y: 5,
//     },
// }
// console.log(objA.x);
// // Достукатись до глубоких воастивостей - побудувати ланцюг
// console.log(objA.objB.y)

// Перебор через for...in и Object.keys|values|entries

const feedback = {
    good: 5,
    neutral: 10,
    bad: 3,
};

console.log(feedback);

// Стара школа

// let totalFeedback = 0;

// for (const key in feedback) {
//     console.log(key);

//     console.log(feedback[key]);

//     totalFeedback += feedback[key];
// }
// console.log('Total: ', totalFeedback);

// Новий метод перебору

// const keys = Object.keys(feedback);

// console.log(keys);

// // Кількість властивостей в обєкті
// console.log(keys.length);
// const values = Object.values(feedback);

// console.log(values.length);
// let totalFeedback = 0;
// for (const key of keys) {
//     console.log(key);
//     console.log(feedback[key]);

//     totalFeedback += feedback[key];
// }
// console.log('Total: ', totalFeedback);

// const values = Object.values(feedback);
// console.log(values);
// let totalFeedback = 0;

// for (const value of values) {
//     console.log(value);

//     totalFeedback += value;
// }
// console.log('Total: ', totalFeedback);

// console.log(Object.entries(feedback));





