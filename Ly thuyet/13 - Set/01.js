// ES6 cung cấp cho chúng ta một tập hợp mới gọi là SET.
// Tập hợp này lưu trữ các giá trị không trùng lặp. Cú pháp để tạo Set như sau
let test = new Set();
test.add('a').add('b');
console.log(test); //Set { 'a', 'b' }
let chars = new Set(['a', 'a', 'b', 'c', 'c']);
console.log(chars);
// Set { 'a', 'b', 'c' }
chars.add('e')
    .add('f');
console.log("-------------");
let size = chars.size;
console.log(size);

console.log("-------------");
let exits = chars.has('a');
console.log(exits); // true

console.log("-------------");
chars.delete('f');
console.log(chars);

console.log("-------------");
chars.clear();
console.log(chars.size); // 0


