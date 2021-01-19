# Sử dụng Destructuring trong ES6

[TOC]

## 1. Giới thiệu về Destructuring 

**ES6 cung cấp cho chúng ta một chức năng mới được gọi là Destructuring tham số nghĩa là chúng ta có thể gán giá trị thuộc tính của một đối tượng hoặc một mảng vào trong các biến.**

```js
function getScores() {
   return [70, 80, 90];
}
let scores = getScores();
// Như vậy biến scores sẽ chứa mảng các giá trị 70,80,90.
//Để lấy các giá trị ra ta sử dụng index . Ví dụ scores[0] tương ứng với giá trị 70.
let x = scores[0], 
    y = scores[1], 
    z = scores[2];
```

Trong ES6 chúng ta hoàn toàn có thể gán các giá trị cho x,y,z là 70,80,90 chỉ cần 1 dòng code thay vì cách làm ở trên như sau

```js
let [x, y, z] = getScores(); 
```

Cách khai báo ở trên được gọi là Destructuring chúng ta khai báo biến [x,y,z] nó sẽ tương ứng với từng giá trị mảng trả về của hàm getScores(). Khi hàm thực thi xong các giá trị mảng (70,80,90) sẽ tự động gán vào biến x,y,z theo thứ tự tương ứng. Nếu chúng ta thêm console.log ta sẽ nhận các kết quả sau.

```js
let [x, y, z] = getScores();

console.log(x); // 70
console.log(y); // 80
console.log(z); // 90
```

Như vậy x sẽ được gán cho vị trí đầu tiên của mảng trong hàm getScores(). Lúc này vị trí đầu tiên là 70. Như vậy y sẽ được gán cho vị trí thứ 2 của mảng trong hàm getScores(). Lúc này vị trí thứ 2 là 80. Như vậy z sẽ được gán cho vị trí thứ 3 của mảng trong hàm getScores(). Lúc này vị trí thứ 3 là 90.

## 2. Các trường hợp ngoại lệ

Trong trường hợp hàm getScores chỉ trả về mảng có 2 giá trị, thì lúc này biến z sẽ nhận giá trị là undefined như sau

```js
function getScores() {
   return [70, 80];
}

let [x, y, z] = getScores();

console.log(x); // 70
console.log(y); // 80
console.log(z); // undefined

```

Trong trường hợp hàm getScores trả về hơn 3 giá trị thì các giá trị bị dư ra sẽ bị loại bỏ đi.

```js
function getScores() {
   return [70, 80, 90, 100];
}

let [x, y, z] = getScores();

console.log(x); // 70
console.log(y); // 80
console.log(z); // 90
```

Trong trường hợp getScores trả về hơn 3 giá trị chúng ta có thế sử dụng tham số **Rest để chứa các giá trị bị dư**

```js
let [x, y ,...args] = getScores();

console.log(x); // 70
console.log(y); // 80
console.log(args); // [90, 100]

```

