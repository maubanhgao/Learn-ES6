// Trong JS cu
function Animal(legs) {
    this.legs = legs;
}
Animal.prototype.walk = function () {
    console.log("walking on " + this.legs + " legs");
};
// ke thua
function Bird(legs) {
    Animal.call(this, legs);
}
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Animal;
Bird.prototype.fly = function () {
    console.log('flying');
};

let bird = new Bird(2);
bird.walk();
bird.fly();
// console.log();