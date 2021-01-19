function sum(...args) {
    let total = 0;
    for (const a of args){
        total += a;
    }
    return total;
}
console.log(sum(1, 2, 3));
console.log("-----------------");
//filter() dùng để tạo một mảng mới với tất cả các phần tử thỏa điều kiện của một hàm test.
// reduce() dùng để thực thi một hàm lên từng phần tử của mảng (từ trái sang phải) với một biến tích lũy để thu về một giá trị duy nhất.
function sum1(...args) {
    return args.filter(e => typeof e === "number")
        .reduce((prev, curr) => prev + curr);
}
console.log(sum1(1,2,3));