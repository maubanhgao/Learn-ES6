let scores = [80, 90, 70];
for (const score of scores ){
    console.log(score); //80,90,70
}
console.log("--------------");
let colors = ['Red', 'Green', 'Blue'];
for (const [index, color] of colors){
    // khong su dung dau "" / ''
    console.log(`${color} is at index ${index}`);
}

// e is at index R
// r is at index G
// l is at index B

console.log("--------------");
let str = 'abc';
for (let c of str) {
    console.log(c);
}
// a
// b
// c

console.log("--------------");
let colorsCSS = new Map();
colorsCSS.set('red', '#ff0000');
colorsCSS.set('green', '#00ff00');
colorsCSS.set('blue', '#0000ff');
for (let color of colorsCSS) {
    console.log(color);
}
//      [ 'red', '#ff0000' ]
//     [ 'green', '#00ff00' ]
//     [ 'blue', '#0000ff' ]

console.log("--------------");
// let nums = new Set();
// nums.add(1).add(2).add(3);
// console.log(nums); // Set { 1, 2, 3 }

let nums = new Set([1, 2, 3, 1]);

for (let num of nums) {
    console.log(num);
}

// 1
// 2
// 3

console.log("--------------");

let ranks = ['A', 'B', 'C'];
for (let i = 0; i < ranks.length; i++) {
    console.log(ranks[i]);
}
// A
// B
// C
console.log("--------------");
for(let rank of ranks) {
    console.log(rank);
}
// A
// B
// C