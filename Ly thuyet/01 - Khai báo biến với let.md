# Khai báo biến bằng từ khoá let

[TOC]

## 1. Javascript let và global(toàn cục) 

**từ khoá var để khai báo biến thì phạm vi của nó sẽ là global (toàn cục)**

```js
var a = 10; console.log(window.a); // 10 
```

**Tuy nhiên nếu như ta sử dụng biến let để khai báo trong trường hợp sau**

```js
let b = 20; console.log(window.b); // undefined 
```

## 2. Callback function trong vòng lặp 

```js
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
```

Ta mong muốn là vòng lặp sẽ chạy từ 0 đến 4 và in các số là 0,1,2,3,4 mỗi giây. Nhưng thực tế khi chạy đoạn mã trên anh sẽ nhận được in ra số 5 trong 5 lần chạy. Vì sao lại như vậy.

Sau khi chạy 5 vòng lặp thì giá trị của i lúc này là bằng 5. Sau đó nó truyền số 5 này vào callback là setTimeout trong 1 giây. Chính vì nó dùng chung 1 biến i nên giá trị của 5 lần đó đều giống nhau cả.

**Để giải quyết được vấn đề này thì chúng ta sử dụng let như sau**

```js
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
```

## 3. Khai báo lại giá trị 

Sử dụng từ khoá var cho phép chúng ta khai báo lại giá trị của biến mà không bị báo lỗi

```js
var counter = 0;
var counter;
console.log(counter); // 0
```

**Tuy nhiên nếu chúng ta sử dụng let thì sẽ bị báo lỗi như sau**

```js
let counter = 0;
let counter;
console.log(counter);

// Uncaught SyntaxError: Identifier 'counter' has already been declared

```

## 4. Hoisting

```js
{
    console.log(counter); // 
    let counter = 10;    
}
```