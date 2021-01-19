// ES6
class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log("walking on " + this.legs + " legs");
    }
}
class Bird extends Animal{
    // constructor(legs) {
    //     super(legs);
    // }
    fly(){
        console.log("flying");
    }
}
let bird = new Bird(2);
bird.walk();
bird.fly();

class Dog extends Animal {
    constructor() {
        super(4);
    }
    // walk() {
    //     console.log("go walking");
    // }
}

let bingo = new Dog();
bingo.walk();