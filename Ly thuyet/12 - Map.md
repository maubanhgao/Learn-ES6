# map 

[TOC]

## 1. Giới thiệu về Map 

**ES6 cung cấp một dạng tập hợp mới gọi là Map.**

**Map sẽ lưu các phần tử theo KEY và VALUE. Cú pháp tạo Map trong ES6 như sau**

```js
let map = new Map([iterable]);
```

Ví dụ chúng ta tạo một map trong ES6 như sau

```js
let students = new Map();
```

## 2. Các phương thức có trong Map 

**Một số phương thức hữu ích của map là :**

- clear() : xoá các phần tử trong map.
- delete(key) : xoá phần tử xát định, dựa trên giá trị key.
- entries() : trả về một tập hợp
- get(key) : lấy phần tử xát định, dựa vào giá trị key.
- has(key) : kiểm tra xem giá trị key có tồn tại hay không. Nếu có giá trị key trong tập hợp sẽ trả về giá trị true.
- keys() : trả về một iterator (tập hợp) tất cả các KEY có trong map.
- set(key,value) : thêm giá trị cho key trong tập hợp.
- values() : trả về một iterator chứa tất cả các giá trị có map.

## 3. Ví dụ các phương thức trong Map

Tạo đối tượng Map. Giả sử có danh sách các users (người dùng như sau)

```js
let john = {name: 'John Doe'},
    lily = {name: 'Lily Bush'},
    peter = {name: 'Peter Drucker'};
```

Bây giờ tạo quyền cho mỗi users bằng cách dùng map như sau.

```js
let userRoles = new Map(); 
```

Tiếp đến ta set quyền cho user như sau.

```js
userRoles.set(john, 'admin'); 
```

Chúng ta sử dụng phương thức set để thiết lập john tương ứng với role là admin. Tiếp đến chúng ta có thể set quyền cho lily và peter như sau

```js
userRoles.set(lily, 'editor')
          .set(peter, 'subscriber');	
```

Ngoài cách làm ở trên chúng ta có thể truyền một iterable khi khởi tạo đối tượng map như sau.

```js
let userRoles = new Map([
    [john, 'admin'],
    [lily, 'editor'],
    [peter, 'subscriber']
]);	
```

Bây giờ nếu chúng ta muốn xem role của john là gì thì sử dụng phương thức get như sau.

```js
userRoles.get(john); // admin 
```

Nếu chúng ta truyền vào KEY mà không có trong Map thì sẽ nhận được giá trị undefined

```js
let foo = {name: 'Foo'};
userRoles.get(foo); //undefined
```

Kiểm tra xem **key có tồn tại hay không** bằng phương thức has như sau.

```js
userRoles.has(foo); // false
userRoles.has(lily); // true
```

Để lấy **kích thướt của map** thì ta sử dụng phương thức size như sau

```js
console.log(userRoles.size); // 3 
```

**Để duyệt qua các phần tử** ta sử dụng phương thức keys.

```js
for (let user of userRoles.keys()) {
    console.log(user.name);
}
// John Doe
// Lily Bush
// Peter Drucker
```

**Để duyệt qua các role có trong map**

```js
for (let role of userRoles.values()) {
    console.log(role);
}
// admin
// editor
// subscriber
```

**Để duyệt qua các phần tử gồm có key và value trong map thì sử dụng phương thức entries() như sau.**

```js
for (let elem of userRoles.entries()) {
    console.log(`${elem[0].name}: ${elem[1]}`);
}

// John Doe: admin
// Lily Bush: editor
// Peter Drucker: subscriber
```

**Chúng ta có thể áp dụng destruction để viết code như sau nhưng vẫn cho ra kết quả như trên**

```js
for (let [user,role] of userRoles.entries()) {
    console.log(`${user.name}: ${role}`);
}
```

**Chúng ta cũng có thể dùng vòng lặp forEach để duyệt qua các phần tử trong map như sau.**

```js
userRoles.forEach((role, user) =>
    console.log(`${user.name}: ${role}`)
);
```

**Chuyển đổi (convert) các KEY hoặc VALUE trong map thành mảng (Array) bằng cách sử dụng toán tử spread như sau.**

```js
var keys = [...userRoles.keys()];
console.log(keys);

kết quả 

[ { name: 'John Doe' },
  { name: 'Lily Bush' },
  { name: 'Peter Drucker' } ]
```

**Để convert các Value qua mảng ta làm như sau**

```js
var roles = [...userRoles.values()];
console.log(roles);

[ 'admin', 'editor', 'subscriber' ]
```

**Để xoá một phần tử trong map ta sử dụng phương thức delete như sau.**

```js
userRoles.delete(john); 
```

**Để xoá hết các phần tử ta sử dụng phương thức clear như sau.**

```js
userRoles.clear();
```