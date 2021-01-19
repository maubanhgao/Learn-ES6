let names = ['John', 'Mac', 'Peter'];
// map() giúp tạo ra một mảng mới với các phần tử là kết quả từ việc thực thi một hàm lên từng phần tử của mảng được gọi.
let lengths = names.map(name => names.length);
console.log(lengths);
// [ 3, 3, 3 ]

function Car() {
    this.speed = 0;
    this.speedUp = function (speed) {
        this.speed = speed;
        setTimeout(function () {
            console.log(this.speed);
            // this.speed khong the lay gia tri speed trong ham speedUp()
            // do pham vi bien speed khong the tru cap va lay duoc o ham console.log()
        }, 1000);
    };
}
let car = new Car();
car.speedUp(5);