// JS
let add = function (x, y) {
    return x + y;
};
console.log(add(10, 20));

// Arrow function
let add1 = (x1, y1) => x1 + y1;
console.log(add1(30, 78));

let numbers = [4,2,6];
numbers.sort(function (a, b) {
    return b - a;
});
console.log(numbers);

numbers.sort((a,b) => a - b);
console.log(numbers);