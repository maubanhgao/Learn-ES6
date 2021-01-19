// cac phuong thuc trong CLASS
class CounterAAAA {
    constructor() {
        this.count = 0;
    };
    next = () => {
        return ++this.count;
    };
    current = () => {
        return this.count;
    }
}

let counteraaaa = new CounterAAAA();
console.log(counteraaaa.next()); // 1
console.log(counteraaaa.current()); // 1

class CounterBBBB {
    constructor( ) {
        this.count = 0;
    }
    // this.count = 0; //TypeError
    next() {
        return ++this.count;
    }
    current(){
        return this.count;
    }
}
const countBBBB = new CounterBBBB();
console.log(countBBBB.next()); // 1