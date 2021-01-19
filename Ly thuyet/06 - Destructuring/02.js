// Các trường hợp ngoại lệ
function getScores() {
    return [70, 80];
}

let [x, y, z] = getScores();
console.log(x); // 70
console.log(y); // 80
console.log(z); // undefined

function getScores1() {
    return [70, 80, 90, 100];
}

// Trong trường hợp hàm getScores trả về hơn 3 giá trị thì các giá trị bị dư ra sẽ bị loại bỏ đi
let [x1, y1, z1] = getScores1();

console.log(x1); // 70
console.log(y1); // 80
console.log(z1); // 90

/* Trong trường hợp getScores trả về hơn 3 giá trị
 chúng ta có thế sử dụng tham số Rest để chứa các giá trị bị dư*/
let [x2, y2, ...rest] = getScores1();

console.log(x2); // 70
console.log(y2); // 80
console.log(rest); // [ 90, 100 ]