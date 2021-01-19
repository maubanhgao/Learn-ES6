# set 

[TOC]

## 1. Giới thiệu về Set 

**ES6 cung cấp cho chúng ta một tập hợp mới gọi là SET. Tập hợp này lưu trữ các giá trị không trùng lặp. Cú pháp để tạo Set như sau**

> let setObject = new Set();

## 2. Các phương thức phổ biến của Set

- add(value) : thêm phần tử vào tập hợp.
- clear() : xoá hết các phần tử trong set.
- delete(value) : xoá một phần tử trong tập hợp.
- entries() : trả về một Iterator chứa các giá trị của một tập hợp.
- has(value) : kiểm tra xem giá trị có tồn tại trong tập hợp chưa. Trả về true nếu tồn tại.

## **3. Ví dụ Set**

một Set gồm các phần tử là ký tự như sau.

```js
let chars = new Set(['a', 'a', 'b', 'c', 'c']);
```

**Vì Set chỉ chứa các giá trị không trùng lặp.** 

```js
console.log(chars);

Kết quả là :

Set { 'a', 'b', 'c' }
```

**Để lấy kích thướt của Set dùng hàm size như sau**

```js
let size = chars.size;
console.log(size);//  3
```

**Để thêm một phần tử vào**

```js
chars.add('d');
console.log(chars);

Kết quả là :

Set { 'a', 'b', 'c', 'd' }
```

**Chúng ta có thể add nhiều phần tử liên tiếp như sau.**

```js
chars.add('e')
     .add('f');

Kết quả là :

Set { 'a', 'b', 'c', 'd','e','f' }
```

**Kiểm tra giá trị đã tồn tại trong Set chưa ta dùng phương thức has như sau.**

```js
let exist = chars.has('a'); 
console.log(exist);// true 
```

**Để xoá phần tử ra khỏi tập hợp Set ta dùng hàm delete như sau.**

```js
chars.delete('f'); 
console.log(chars); 
// Set {"a", "b", "c", "d", "e"} 
```

Để duyệt qua các phần tử ta dùng vòng lặp for of như sau.

Giả sử ta có tập hợp roles như sau.

```js
let roles = new Set();
roles.add('admin')
    .add('editor')
    .add('subscriber');
```

**Ta sử dụng vòng lặp for of để duyệt qua các phần tử như sau.**

```js
for (let role of roles) {
    console.log(role);
}

//Kết quả nhận được là : 

//admin
//editor
//subscriber
```

**Set cũng hỗ trợ các phương thức như keys(), values(), entries() như Map để duyệt qua các phần tử.**

```js
for (let [key, value] of roles.entries()) {
    console.log(key === value);
}

//kết quả nhận được :

//true
//true
//true
```

