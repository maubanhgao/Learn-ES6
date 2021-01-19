//
function Car() {
    this.speed = 0;
    this.speedUp = function (speed) {
        this.speed = speed;
        let self = this;
        setTimeout(function () {
            console.log(self.speed);
        }, 1000);
    };
}

let car = new Car();
car.speedUp(50);