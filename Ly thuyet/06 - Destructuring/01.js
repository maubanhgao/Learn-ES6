// gán giá trị thuộc tính của một đối tượng hoặc một mảng vào trong các biến
function getScores() {
    return [70, 80, 90];
}
let scores = getScores();
console.log(scores); //[ 70, 80, 90 ]
let x = scores[0],
    y = scores[1],
    z = scores[2];
console.log(x); // 70
//Trong ES6 chúng ta hoàn toàn có thể gán các giá trị cho x,y,z
let [x1, y1,z1] = getScores();
console.log(x1); // 70
console.log(y1); // 80
console.log(z1); // 90