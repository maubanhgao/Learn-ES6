function Car() {
    this.speed = 0;
    this.speedUp = function (speed) {
        this.speed = speed;
        setTimeout(() => console.log(this.speed), 1000);
    };
}

let car = new Car();
car.speed = 9;
car.speedUp(60);

/*
* Không giống như function bình thường nếu chúng ta sử dụng arrow method cho đoạn code trên thì ta không cần lo lắng về phạm vi (scope) hoặc showdows
*/