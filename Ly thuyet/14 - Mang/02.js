// Trong phiên bản ES5 để duyệt qua các phần tử trong mảng ta làm như sau:
function arrayFromArgs() {
    var results = [];
    for (var i = 0; i < arguments.length; i++ ){
        results.push(arguments[i]);
    }
    return results;
}

var fruits = arrayFromArgs('Apple', 'Oraange', ' Banana');
console.log(fruits);
// [ 'Apple', 'Oraange', ' Banana' ]

console.log("-----------");
// Trong phiên bản ES6 thì chúng ta sẽ sử dụng chức năng mới là Array.from để duyệt các phần tử như sau
function arrayFromArgsES6() {
    return Array.from(arguments);
}
console.log(arrayFromArgs(1, 'A'));
// [ 1, 'A' ]

console.log("-----------");
function addOne() {
    return Array.from(arguments, x => x + 1)  ;
}
console.log(addOne(1,2,3));
// [ 2, 3, 4 ]

console.log("-----------");
let doubler = {
    factor: 2,
    double(x) {
        return x * this.factor;
    }
};
let scores = [5, 6, 7];
let newScores = Array.from(scores, doubler.double, doubler);
console.log(newScores);
//[ 10, 12, 14 ]

console.log("-----------");


/**
 * rong ES5 phiên bản cũ
 * chúng ta muốn tìm kiếm giá trị trong mảng thì sử dụng hàm indexOf() và lastIndexOf()
 */

//Trong phiên bản mới ES6 thì hỗ trợ cho chúng ta phương thức find.
let customers = [{
    name: 'ABC Inc',
    credit: 100
}, {
    name: 'ACME Corp',
    credit: 200
},{
    name: 'IoT AG',
    credit: 300
}];

//Để tìm Khách hàng đầu tiên tín dụng lớn hơn 100 ta làm như sau.

console.log(customers.find(c => c.credit > 100));
// { name: 'ACME Corp', credit: 200 }
console.log("-----------");
console.log(customers.filter(c => c.credit > 100));
//[ { name: 'ACME Corp', credit: 200 }, { name: 'IoT AG', credit: 300 } ]

