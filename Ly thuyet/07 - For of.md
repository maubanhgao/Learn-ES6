# for of

[TOC]

## 1. Giới thiệu về For of 

ES6 cung cấp cho chúng ta một chức năng mới để duyệt qua các phần tử như Array, String, Map, Set hoặc các đối tượng thông qua vòng lặp for of.

> **for** (variable **of** iterable) {
>
>  // statements 
>
> }

Chúng ta có thể sử dụng từ khoá var, let, const để khai báo trước biến variable. iterable là object chứa dựng các phần tử.

## 2. Duyệt qua mảng 

```js
let scores = [80, 90, 70];

for (let score of scores) {
    score = score + 5;
    console.log(score);
} // kết quả là 85,95,75.
```

Nếu chúng ta muốn giá trị biến score không thay đổi thì sưer dụng từ khoá const thay vì let như sau

```js
let scores = [80, 90, 70];

for (const score of scores) {
    console.log(score);
} //kết quả nhận được là 80,90,70
```



## 3. Lấy vị trí của các phần tử trong mảng 

Để lấy được vị trí của các phần tử trong mảng chúng ta có thể sử dụng vòng for kết hợp với phương thức entries() của mảng như sau.

```js
let colors = ['Red', 'Green', 'Blue'];

for (const [index, color] of colors.entries()) {
    console.log(`${color} is at index ${index}`);
}

//Red is at index 0
//Green is at index 1
//Blue is at index 2
```

## 4. Duyệt qua chuỗi 

Chúng ta có thể sử dụng **for of** để duyệt qua các chuỗi như sau.

```js
let str = 'abc';
for (let c of str) {
    console.log(c);
}

//  a,b,c
```

## 5. Duyệt qua Map 

```js
let colors = new Map();

colors.set('red', '#ff0000');
colors.set('green', '#00ff00');
colors.set('blue', '#0000ff');

for (let color of colors) {
    console.log(color);
}
```

**Kết quả nhận được là :**

```js
[ 'red', '#ff0000' ]
[ 'green', '#00ff00' ]
[ 'blue', '#0000ff' ]
```

## 6. Duyệt qua Set 

**Chúng ta có thể sử dụng for of duyệt qua tập hợp Set như sau**

```js
let nums = new Set([1, 2, 3]);

for (let num of nums) {
    console.log(num);
}
```

## 7. Sự khác nhau for of và for in 

Chúng ta sử dụng **for in** để **duyệt** qua các **thuộc tính của một đối tượng**. **Nó không sử dụng để** duyệt các tập hợp như Array, Map hoặc Set

Không giống như vòng lặp for in vòng lặp **for of** được sử dụng để **duyệt tập hợp** hơn là duyệt các đối tượng.

## 8. Sự khác nhau for of và for

```js
let ranks = ['A', 'B', 'C'];

for (let i = 0; i < ranks.length; i++) {
    console.log(ranks[i]);
}
```

**ES6 cho ra đời for of để giảm đi độ phức tạp tránh lỗi xảy ra khi theo dõi index của mảng.** Nếu mảng lồng mảng thì độ phức tạp sẽ ít hơn vì chúng ta chỉ sử dụng giá trị trực tiếp (rank) mà không cần phải theo dõi index trong mảng.

```js
for(let rank of ranks) {
    console.log(rank);
}
```