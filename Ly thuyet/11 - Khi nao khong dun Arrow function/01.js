// Phuong thuc trong doi tuong
const counterAR = {
    count: 0,
    next: () => ++this.count,
    current: () => this.count
};

console.log(counterAR);
//{ count: 0, next: [Function: next], current: [Function: current] }
console.log(counterAR.current()); //undefined
const counterNOTAR = {
    count: 0,
    next() {
        return ++this.count;
    },
    current(){
        return this.count;
    }
};

console.log(counterNOTAR);
// { count: 0, next: [Function: next], current: [Function: current] }
console.log(counterNOTAR.current()); // 0