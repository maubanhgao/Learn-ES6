function say(message) {
    console.log(message);
}
say(); // undefined

console.log("---------------");
function say1(message) {
    message = typeof message !== 'undefined' ? message : 'Hi';
    console.log(message);
}
say1();

console.log("---------------");
function say2(message='Hi') {
    console.log(message);
}
say2('Hello');
console.log("---------------");
function add(x = 1, y = x, z = x + y) {
    return x + y + z; // 1 + 1 + (1 + 1)
}
console.log(add());
console.log("---------------");
let taxRate = () => 0.1;
let getPrice = function (price, tax = price*taxRate()) {
    return price + tax;
}
let fullPrice = getPrice(100);
console.log(fullPrice);