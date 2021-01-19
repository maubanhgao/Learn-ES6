# Arrow function

[TOC]

## 1. Arrow function trong ES6 

Arrow function là **một chức năng mới trong ES6** giúp chúng ta có thể **viết phương thức một cách ngắn gọn**. 

ví dụ ta có phương thức cộng 2 số viết theo cách truyền thống như sau.

```js
let add = function(x,y) {
  return x + y;
}
console.log(add(10,20)); // 30
```

áp dụng **Arrow function** chúng ta sẽ viết theo cách mới ngắn gọn hơn như sau.

```js
let add = (x,y) => x + y; 
console.log(add(10,20)); // 30; 
```

Ta sử dụng ký hiệu mũi tên (=>)này để khai báo chúng ta sử dụng kiểu Arrow function. Thay vì phải viết function(x,y) thì bây giờ ta không cần từ khoá function nữa mà chỉ viết ngắn gọn (x,y). Phần thân của phương thức return x + y sẽ thay bằng x + y.

**Trường hợp nếu phần thân của phương thức nằm trong block (khối lệnh) thì chúng ta phải cần thêm từ khoá return như sau**

```js
let add = (x, y) => { 

    return x + y; 
};
```

## 2. Cú pháp Arrow function với tham số nhiều hơn 2 

Arrow function bắt đầu bằng dấu mở ngoặc tròn ( tiếp đến là các tham số và đóng ngoặc ) tiếp sau đó là mũi tên arrow => và phần cuối cùng là các dòng code mình xử lý (expression)

> (p1, p2, ..., pn) => expression;

**Nếu ta ko dùng arrow function**

```js
let numbers = [4,2,6];
numbers.sort(function(a,b){ 
    return b - a; 
});
console.log(numbers); // [6,4,2]
```

**arrow function**

```js
let numbers = [4,2,6];
numbers.sort((a,b) => b - a);
console.log(numbers); // [6,4,2]
```

## 3. Cú pháp Arrow function với 1 tham số 

Trường hợp arrow function chỉ có 1 tham số thì ta khai báo như sau bắt đầu bằng dấu ngoặc tròn ( tiếp đến là tham số và kết thúc bằng dấu đóng ngoặc tron ) sau đó là dấu mũi tên => và cuối cùng là phần code xử lý (statement)

> (p1) => { statements }

```js
let names = ['John', 'Mac', 'Peter'];
let lengths = names.map(name => name.length);

console.log(lengths);
```

## 4. Cú pháp Arrow function với không tham số 

> () => { statements }
>

```js
let logDoc = () => console.log(window.document);
logDoc();
```

## 5. Sự khác nhau giữa Arrow function và function bình thường

Sự khác nhau về **cách dùng từ khoá this.** Anh có ví dụ sau đây, chúng ta có lớp Car và phương thức speedUp như sau.

```js
function Car() {
    this.speed = 0;

    this.speedUp = function (speed) {
        this.speed = speed;
        setTimeout(function () {
            console.log(this.speed); // undefined
        }, 1000);

    };
}

let car = new Car();
car.speedUp(50); // undefined
```

Khi chương trình chạy đến hàm setTimeout và khi ta console.log thì nhận giá trị speed là undefine. Như vậy this.speed trong hàm console.log của phương thức setTimeout không thể lấy được giá trị tham số speed trong hàm speedUp. Cái này là do phạm vi biến speed chỉ không thể truy cập và thấy được ở hàm console.log.

**Chúng ta sẽ sửa lại code ở trên bằng cách khai báo thêm biến let self = this trước khi thực hiện gọi hàm setTimeout như sau**

```js
function Car() {
    this.speed = 0;

    this.speedUp = function (speed) {
        this.speed = speed;
        let self = this;
        setTimeout(function () {
            console.log(self.speed);
        }, 1000);

    };
}

let car = new Car();
car.speedUp(50); // 50;
```

Không giống như function bình thường nếu chúng ta sử dụng **arrow method cho đoạn code trên thì ta không cần lo lắng về phạm vi (scope) hoặc showdows** . Đoạn code mới được viết như sau

```js
function Car() {
    this.speed = 0;

    this.speedUp = function (speed) {
        this.speed = speed;
        setTimeout(
            () => console.log(this.speed),
            1000);

    };
}

let car = new Car();
car.speedUp(50); // 50;
```