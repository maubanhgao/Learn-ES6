/**
 * Trong ES5 phiên bản củ,
 * khi chúng ta khai báo một mảng với độ dài của mảng,
 * thì javascript sẽ tạo ra một mảng có kích thước tương ứng với độ dài truyền vào nhưng chỉ chứ 1 phần tử
 */
let numbersLen = new Array(2);
console.log(numbersLen.length); // 2
console.log(numbersLen[0]); // undefined

console.log("-------------");
numberStr = new Array("2");
console.log(numberStr.length); // 1
console.log(numberStr[0]); // 2

// ES6 cung cấp cho chúng ta phương thức mới, đó là array.of với cú pháp như sau :
console.log("-------------");
let numberOf = Array.of(3);
console.log(numberOf.length); // 1
console.log(numberOf[0]); // 3

console.log("-------------");
let chars = Array.of("A", "B", "C");
console.log((chars.length)); // 3
console.log(chars); // [ 'A', 'B', 'C' ]


