# Khi nào nên không dùng Arrow function

[TOC]

## 1. Bắt và xử lý sự kiện 

tạo một thẻ input để lấy tên người dùng.

```js
<input type="text" name="username" id="username" placeholder="Enter a username">
```

tạo một thẻ div để hiển thị tên người dùng lấy được từ input

```html
<div id="greeting"></div>
```

viết đoạn mã javascript để lấy tên người dùng và gán vào thẻ div như sau

```js
const greeting = document.querySelector('#greeting');

const username = document.querySelector('#username');

username.addEventListener('keyup', () => {

  greeting.textContent = 'Hello ' + this.value;

});
```

**Tuy nhiên khi chương trình chạy sẽ nhận được kết quả là ‘Hello’ undefined.** 

Có nghĩa là this.value lấy không được giá trị trong hàm bắt sự kiện addEventListener. Như đã nói trong phần mở đầu arrow function không sở hữu phạm vi biến this của input, chính vì vậy mặc dùng ta ghi this.value thì ta ngầm định this này chính là của input nhưng thật sư không phải.

Để sửa lại đoạn code trên có thể bắt được sự kiện từ input thì ta phải dùng cách viết bình thường của javascript không dùng arrow function như sau.

```js
username.addEventListener('keyup', function () {
    input.textContent = 'Hello ' + this.value;
});
```

## 2. Các phương thức trong đối tượng 

**ví dụ có đối tượng Counter như sau.**

```js
const counter = {
  count: 0,
  next: () => ++this.count,
  current: () => this.count
};
```

**Đối tượng counter có 2 phương thức là next và current. Phương thức next để lấy giá trị tiếp theo và current là lấy giá trị hiện tại. 

gọi phương thức next của đối tượng counter như sau.

```js
console.log(counter.next());
```

Như vậy kết quả muốn muốn sẽ là 1. Tuy nhiên khi chương trình chạy anh sẽ nhận được kết quả là NaN. Nguyên nhân khi sử dụng this.count thì khi đó biến this này đang hiểu là đối tượng window chứ không phải là đối tượng counter. Để tránh biến this tham chiếu tới phạm vi toàn cục (global) thì ta sửa lại đoạn code trên như sau.

```js
const counter = {
    count: 0,
    next() {
        return ++this.count;
    },
    current() {
        return this.count;
    }
};
```

Chúng ta bỏ khai báo arrow function đi và viết theo cách viết bình thường

## 3. Các phương thức trong Class 

Tương tụ như trường hợp phương thức trong đối tượng thì phương thức trong class chúng ta cũng không dùng arrow function.

```js
class Counter {
  constructor() {
    this.count = 0;
  }
  next = () => {
    return ++this.count;
  }
  current = () => {
    return this.count;
  }
}
```

**Chúng ta không khai báo theo kiểu arrow function trong Class mà khai báo theo cách sau đây.**

```js
class Counter {
  constructor() {
    this.count = 0;
  }
  next() {
    return ++this.count;
  }
  current() {
    return this.count;
  }
}  
```



## 4. Phương thức prototype 

```js
function Counter() {
    this.count = 0;
}

Counter.prototype.next = () => {
    return this.count;
};

Counter.prototype.current = () => {
    return ++this.next;
}
```

Thì giá trị this.next và this.current đang tham chiếu tới đối tượng cục bộ (global) chứ không phải đối tượng counter. Chúng ta sẽ modify đoạn code trên lại như sau để this có thể tham chiếu đến counter.

```js
function Counter() {
    this.count = 0;
}

Counter.prototype.next = function () {
    return this.count;
};

Counter.prototype.current = function () {
    return ++this.next;
}
```

## 5. Sử dụng tham số là đối tượng arguments

```js
const concat = (separator) => {
    let args = Array.prototype.slice.call(arguments, 1);
    return args.join(separator);
}
```

**Thay vì dùng theo arrow function thì ta nên thay đổi lại như sau**

```js
function concat(separator) {
    let args = Array.prototype.slice.call(arguments, 1);
    return args.join(separator);
}
```