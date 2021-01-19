# Giá trị mặc định cho tham số

[TOC]

## 1. Phân biệt tham số và đối số 

```js
function add(x, y) {
   return x + y;
}

add(100,200);
```

**Như vậy x và y được gọi là THAM SỐ**: sử dụng để định nghĩa phương thức

 **100 và 200 được gọi là ĐỐI SỐ**: Đối số là giá trị ta sẽ truyền cho phương thức.

## 2. Thiết lập giá trị mặc định cho phương thức 

```js
function say(message) {    
console.log(message); 
} 
say(); // undefined 
```

```js
function say(message) {
    message = typeof message !== 'undefined' ? message : 'Hi';
    console.log(message);
}

say();
```

Trong ES6 hỗ trợ chúng ta cách đặt giá trị mặc định cho tham số mà chúng ta không cần phải viết code để kiểm tra với **cú pháp** như sau.

> **function** fn(
>
> ​	param1=default1,
>
> ​	param2=default2,
>
> ​	..
>
> ) { }

VD

```js
function say(message='Hi') {
    console.log(message); 
} 
say(); // 'Hi' 
say(undefined); // 'Hi' 
say('Hello'); // 'Hello' 
```

## 3. Thiết lập giá trị mặc định bằng cách sử dụng tham số khác 

```js
function add(x = 1, y = x, z = x + y) {
    return x + y + z;
}

console.log(add()); // 4
```

Khi gọi phương thức add chúng ta có giá trị mặc định của x là 1, giá trị của y là 1 và giá trị của z là 2. Nhưng vậy khi gọi phép toán cộng ta sẽ có 1 + 1 + 2 nên kết quả nhận được sẽ là 4.

## 4. Thiết lập giá trị mặc định bằng cách sử dụng phương thức

```js
let taxRate = () => 0.1;
let getPrice = function( price, tax = price * taxRate() ) {
    return price + tax;
}

let fullPrice = getPrice(100);
console.log(fullPrice); // 110
```

Tham số tax trong phương thức là bằng price nhân với phương thức taxRate. Như vậy chúng ta có thể khai báo giá trị mặc định trong phương thức bằng cách gọi một phương thức khác.