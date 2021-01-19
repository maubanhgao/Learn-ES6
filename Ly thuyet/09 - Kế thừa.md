# kế thừa

[TOC]

## 1. Kế thừa trong JS cách củ 

**Javascript**

```js
function Animal(legs) {
    this.legs = legs;
}

Animal.prototype.walk = function() {
    console.log('walking on ' + this.legs + ' legs');
}

function Bird(legs) {
    Animal.call(this, legs);
}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Animal;

Bird.prototype.fly = function() {
    console.log('flying');
}

var pigeon = new Bird(2);
pigeon.walk(); // walking on 2 legs
pigeon.fly(); // flying
```

## 2. Kế thừa trong JS trong ES6 

**Chúng ta sử dụng từ khoá extends để sử dụng kế thừa.**

```js
class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log('walking on ' + this.legs + ' legs');
    }
}

class Bird extends Animal {
    constructor(legs) {
        super(legs);
    }
    fly() {
        console.log('flying');
    }
}


let bird = new Bird(2);

bird.walk();
bird.fly();
```

## 3. Shadowing method

**Gọi phương thức cha từ phương thức con.**

**Ví dụ** chúng ta có lớp Dog kế thừa lớp động vật và **ghi đè lại phương thức walk()** như sau

```js
class Dog extends Animal {
    constructor() {
        super(4);
    }
    walk() {
        console.log(`go walking`);
    }
}

let bingo = new Dog();
bingo.walk(); // go walking
```

Bây giờ chúng ta muốn từ gọi phương thức walk trong lớp Aninal (lớp cha) thì chúng ta sử dụng từ khoá super như sau. Lúc này nó sẽ gọi hàm walk trong lớp Animal.

```js
class Dog extends Animal {
    constructor() {
        super(4);
    }
    walk() {
        super.walk(); // gọi lên phương thức walk của lớp Animal
        console.log(`go walking`);
    }
}

let bingo = new Dog();
bingo.walk();
```