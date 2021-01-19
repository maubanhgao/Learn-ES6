# Khai báo hằng số

[TOC]

## 1. Khai báo hằng số 

**Trong ES6 chúng ta sử dụng từ khoá const để khai báo một hằng số. Hằng số là một giá trị không bao giờ thay đổi.**

> **const** CONSTANT_NAME = value;

**Tên biến của hằng số phải là các ký tự viết Hoa.** 

```js
const RATE = 0.1;
```

**Sự khác nhau giữa let và const là khi sử dụng const chúng ta không thể reassign (thay đổi giá trị của biến) như let thì chúng ta có thể làm được.** 

## 2. Object 

sử dụng const để đảm bảo các biến chỉ được phép đọc và không được thay đổi giá trị. Tuy nhiên đối với các thuộc tính của một đối tượng ta có thể thay đổi được.

```js
const person = { age: 20 }; 
person.age = 30; // OK console.log(person.age); 
// 30 

person = {age: 40}; // TypeError
```

## 3. Array 

```js
const colors = ['red'];
colors.push('green');
console.log(colors); // ["red", "green"]

colors.pop();
colors.pop();
console.log(colors); // []

colors = []; // TypeError
```

## 4. Vòng lặp

**Trong ES6 chúng ta có cú pháp mới để chạy vòng lặp duyệt qua các mảng gọi là for of.**

```js
let scores = [75, 80, 95];
for (let score of scores) {
    console.log(score);
}
```

Trong trường hợp chúng ta không có ý định modify (thay đổi) giá trị bên trong vòng lặp chúng ta có thể sử dụng từ khoá const trong vòng lặp như sau

```js
let scores = [75, 80, 95];
for (const score of scores) {
    console.log(score);
}
```

```js
for (const i = 0; i < scores.length; i++) { // TypeError
    console.log(scores[i]);
}
```

Chúng ta sẽ nhận lỗi là Uncaught TypeError: Assignment to constant variable vì biến i đã thay đổi giá trị.