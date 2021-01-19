# Sử dụng Rest Param trong ES6

[TOC]

## 1. Giới thiệu về rest param 

**ES6 cung cấp cho chúng ta một loại tham số mới truyền trong phương thức được gọi là rest param.**

Có nghĩa là chúng ta **có thể truyền một mảng các tham số vào phương thức**. Để truyền được mảng các tham số của một phương thức **chúng ta dùng dấu 3 chấm** như sau.

> **function** fn(a,b,... args ) {
>
>  //... 
>
> }

Như các em thấy phương thức fn có tham số là a,b và … args. Thì **…args được gọi là rest param.** 

**Ví dụ** như chúng ta gọi hàm fn và truyền tham số sau

```js
fn(1,2); 
// Thì lúc này mảng …args sẽ là mảng rỗng [].
```

**Chú ý rest param luôn luôn ở vị trí là tham số sau cùng của phương thức.**

```js
function foo(a,...rest, b) {
 // error
}; => //Chúng ta phải đặt lại là foo(a,b,…rest)
```



## 2. Ví dụ rest param

```js
function sum(...args) {
    let total = 0;
    for (const a of args) {
        total += a;
    }
    return total;
}
 
sum(1, 2, 3); // return 6
```

Vì …agrs là một mảng nên ta cũng có thể sử dụng vòng lặp for để duyệt qua các phần tử hoặc dùng cách phương thức có sẳn của một array như filter

```js
function sum(...args) {
    return args.filter(e => typeof e === 'number')
        .reduce((prev, curr)=> prev + curr);
} 
```