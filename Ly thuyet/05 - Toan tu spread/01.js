//  /spred/: lay lan, truyen ba
const odd = [1, 3, 5];
const combined1  = [2, 4, 6, odd]; // [ 2, 4, 6, [ 1, 3, 5 ] ]
console.log(combined1);

console.log("-------------");
const  combined2 = [2, 4, 6, ...odd];
console.log(combined2);
// [ 2, 4, 6, 1, 3, 5 ]

console.log("-------------");
const  combined3 = [...odd, 2, 4, 6];
console.log(combined3); //[ 1, 3, 5, 2, 4, 6 ]