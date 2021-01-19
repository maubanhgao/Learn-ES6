// Phuong thuc prototype
function Counter() {
    this.count = 0;
}
Counter.prototype.next = () => {
    return ++this.count;
};

Counter.prototype.current = () => {
    return this.count;
};
const counter = new Counter();
console.log(counter.next()); // NaN

function CounterModify() {
    this.count = 0;
}
CounterModify.prototype.next = function () {
    return ++this.count;
};
CounterModify.prototype.current = function () {
    return this.count;
};

const couterModify = new CounterModify();
console.log(couterModify.next()); // 1