// console.log(RATE);
//ReferenceError: Cannot access 'RATE' before initialization
const RATE = 0.1;
// const RED; // SyntaxError

console.log(RATE);

const person = {age: 20};
console.log(person);
// person = {age: 40}; // TypeError

console.log("---------------");
const colors = ['red'];
colors.push('green');
console.log(colors); // [ 'red', 'green' ]
colors.pop();
colors.pop();
console.log(colors); // []

// colors = []; TypeError
console.log("--------------------");
let scores = [75, 80, 95];
// for (var [i, score] of scores){ // TypeError
// //     console.log(i + ": " + score[i]);
// // }
for (let score of scores){
    console.log(score);
}