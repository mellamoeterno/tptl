//i want to talk about how arrow functions work as data transform and state
//state updater

// ============================================
// ARROW FUNCTIONS AS DATA TRANSFORMERS
// ============================================

// An arrow function is simply a shorter way to write a function.
//
// Traditional function:
//
// function double(number) {
//     return number * 2;
// }
//
// Arrow function:
//
// const double = (number) => {
//     return number * 2;
// };
//
// If there is only ONE expression, we can make it even shorter:
//
// const double = (number) => number * 2;
//
// IMPORTANT:
// The function does NOT automatically change the original data.
// It receives data -> transforms it -> RETURNS new data.



const numbers = [1, 2, 3, 4];


// --------------------------------------------
// .map()
// --------------------------------------------

// map() goes through every item in the array.
//
// For every item, it calls our arrow function:
//
// number => number * 2
//
// So:
//
// 1 -> 2
// 2 -> 4
// 3 -> 6
// 4 -> 8
//
// map() creates a NEW array.

const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers);
// [2, 4, 6, 8]

console.log(numbers);
// [1, 2, 3, 4]
//
// Notice:
//
// The original array stayed the same.
//
// The arrow function transformed each value
// and map() collected the returned values
// into a new array.