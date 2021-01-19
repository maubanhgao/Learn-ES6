class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName  = lastName;
    }
    get fullName(){
        return this.firstName + ' ' + this.lastName;
    }

    set fullName(str){
        let names = str.split(" ");
        if (names.length === 2){
            this.firstName = names[0];
            this.lastName  = names[1];
        }else {
            throw 'Invalid name format';
        }
    }
}

let mary = new Person('Mary', 'Doe');
console.log(mary.fullName);
// Mary Doe