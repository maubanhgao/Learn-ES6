# mảng 

[TOC]

## 1. Giới thiệu về phương thức Array.of 

**Trong ES5 phiên bản củ, khi chúng ta khai báo một mảng với độ dài của mảng, thì javascript sẽ tạo ra một mảng có kích thước tương ứng với độ dài truyền vào nhưng chỉ chứa 1 phần tử**

```js
let numbers = new Array(2);
console.log(numbers.length); // 2
console.log(numbers[0]); // undefined
```

Ở ví dụ trên ta khai báo mảng có 2 phần tử nhưng khi lấy vị trí đầu tiên ta nhận được giá trị undefined. Cái này gây ra khó hiểu vì khi mình khai báo mảng có 2 phần tử Array(2) nhưng khi lấy phần tử đầu tiên lại không có.

Trường hợp thứ 2, khi ta truyền tham số vào là chuỗi chứ không phải number. Thì javascript sẽ tạo ra một mảng có phần tử đầu tiên là kích thướt của mảng như sau.

```js
numbers = new Array("2");
console.log(numbers.length); // 1
console.log(numbers[0]); // "2"
```

**Để cho việc khai báo mảng một cách rõ ràng hơn thì trong ES6 cung cấp cho chúng ta phương thức mới, đó là array.of với cú pháp như sau :**

> Array.of(element0[, element1[, ...[, elementN]]])

**Array.of cũng tương tự như Array tuy nhiên khi tạo mảng bằng Array.of thì luôn luôn có 1 giá trị trong mảng. Ví dụ như sử dụng Array.of như sau :**

```js
let numbers = Array.of(3);
console.log(numbers.length); // 1
console.log(numbers[0]); // 3
```

**Trong ví dụ trên ta truyền số lượng mảng là 3 thì phương thức array.of sẽ tạo một array có 1 phần tử**

```js
let chars = Array.of('A', 'B', 'C');
console.log(chars.length); // 3
console.log(chars); // ['A','B','C']
```

**Trong ví dụ trên ta tạo ra mảng có 3 phần tử A,B,C thì kích thướt của mảng sẽ là 3.**

## 2. Giới thiệu về phương thức Array.from 

**Trong phiên bản ES6 thì chúng ta sẽ sử dụng chức năng mới là Array.from để duyệt các phần tử như sau**

```js
function arrayFromArgs() {
    return Array.from(arguments);
}

// console.log(arrayFromArgs(1, 'A'));

// Kết quả

// [ 1, 'A' ]
```

**Chúng ta có thể sử dụng Array.from với hàm mapping như sau**

```js
function addOne() {
    return Array.from(arguments, x => x + 1);
}
// console.log(addOne(1, 2, 3));

// Kết quả

// [ 2, 3, 4 ]
```

**Sử dụng Array.from với This.**

```js
let doubler = {
    factor: 2,
    double(x) {
        return x * this.factor;
    }
}
let scores = [5, 6, 7];
let newScores = Array.from(scores, doubler.double, doubler);
console.log(newScores);

// Kết quả

// [ 10, 12, 14 ]
```

## 3. Giới thiệu về phương thức Array.find

**Trong phiên bản mới ES6 thì hỗ trợ cho chúng ta phương thức find.**

**Cú pháp như sau :**

> find(callback(element[, index[, array]])[, thisArg])

**Ví dụ** như ta có một mảng khách hàng có tên khách hàng và thẻ tín dụng như sau.

```js
let customers = [{
    name: 'ABC Inc',
    credit: 100
}, {
    name: 'ACME Corp',
    credit: 200
}, {
    name: 'IoT AG',
    credit: 300
}];
```

**Để tìm Khách hàng có thẻ tín dụng lớn hơn 100 ta làm như sau.**

```js
console.log(customers.find(c => c.credit > 100));

// Kết quả nhận được là

// { name: 'ACME Corp', credit: 200 }
```