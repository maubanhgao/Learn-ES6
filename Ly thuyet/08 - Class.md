# class 

[TOC]

## 1. Tạo Class và đối tượng trong JS cách cũ 

**Trước khi có cách viết Class mới trong ES6, thì để tạo một class trong Javascript ta khai báo theo cách như sau**

```js
function Animal(type) {
    this.type = type;
}

Animal.prototype.identify = function() {
    console.log(this.type);
}

var cat = new Animal('Cat');
cat.identify(); // Cat
```

Chúng ta sử dụng function và prototype để tạo ra các đối tượng và thuộc tính cho một đối tượng.

## 2. Tạo Class và đối tượng trong ES6 

Trong ES6 chúng ta tạo class và đối tượng một cách tường minh hơn bằng cách sử dụng từ khoá **class để khai báo class**, sử dụng từ khoá **constructor để khai báo hàm dựng n**hư sau.

```js
class Animal {
    constructor(type) {
        this.type = type;
    }
    identify() {
        console.log(this.type);
    }
}

let cat = new Animal('Cat');
cat.identify();
```

## 3. Kiểm tra đối tượng trong ES6 

Chúng ta sử dụng **instance of để kiểm** tra xem đối tượng đó có phải là đối tượng chúng ta mong muốn không, có đúng kiểu dữ liệu ta yêu cầu không.

```js
let Animal = class {
    constructor(type) {
        this.type = type;
    }
    identify() {
        console.log(this.type);
    }
}

let duck = new Animal('Duck');

console.log(duck instanceof Animal); // true
console.log(duck instanceof Object); // true

console.log(typeof Animal); // function
console.log(typeof Animal.prototype); // function

```

## 4. Sử dụng Getter và Setter

**Chúng ta sử dụng từ khoá get và set để thực hiện việc lấy giá trị và set giá trị của đối tượng như sau.**

```js
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    set fullName(str) {
        let names = str.split(' ');
        if (names.length === 2) {
            this.firstName = names[0];
            this.lastName = names[1];
        } else {
            throw 'Invalid name format';
        }
    }
}

let mary = new Person('Mary', 'Doe');
console.log(mary.fullName); // Mary Doe
```

