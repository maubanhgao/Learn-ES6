// Trong ES6
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
// Cat
let duck = new Animal('Duck');
//ể kiểm tra xem đối tượng đó có phải là đối tượng chúng ta mong muốn không
console.log(duck instanceof Animal); // true

console.log(duck instanceof Object); // true

console.log(typeof Animal); // function
console.log(typeof Animal.prototype); // object