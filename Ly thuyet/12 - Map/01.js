// Map() sẽ lưu các phần tử theo KEY và VALUE.
let john = {name: 'John Doe'},
    lily = {name: 'Lidly Bush'},
    peter = {name: 'Peter Drucker'};
let userRoles = new Map();
userRoles.set(john, 'admin');
userRoles.set(lily, 'editor').set(peter, 'subscriber');
// hoac
let userRolesIterable = new Map([
    [john, 'admin'],
    [lily, 'editor'],
    [peter, 'subscriber']
]);

console.log(userRoles.get(john)); // admin
let foo = {name: 'Foo'};
console.log(userRoles.get(foo)); // undefined

console.log(userRoles.has(john)); // true
console.log(userRoles.has(foo)); // false
console.log(userRoles.size); // 3
console.log("-----------");
for (let user of userRoles){
    console.log(user);
}
// [ { name: 'John Doe' }, 'admin' ]
//     [ { name: 'Lidly Bush' }, 'editor' ]
//     [ { name: 'Peter Drucker' }, 'subscriber' ]

console.log("-----------");
for (let user of userRoles.keys()){
    console.log(user);
}
// { name: 'John Doe' }
// { name: 'Lidly Bush' }
// { name: 'Peter Drucker' }

console.log("-----------");
for (let user of userRoles .values()){
    console.log(user);
}
// admin
// editor
// subscriber

console.log("-----------");
for(let elem of userRoles.entries()){
    console.log(`${elem[0].name}: ${elem[1]}`);
}
// elem
// [ { name: 'John Doe' }, 'admin' ]
//     [ { name: 'Lidly Bush' }, 'editor' ]
//     [ { name: 'Peter Drucker' }, 'subscriber' ]

// return
// John Doe: admin
// Lidly Bush: editor
// Peter Drucker: subscriber

console.log("-----------");
for(let [user, role] of userRoles.entries()){
    console.log(`${user.name}: ${role}`);
}
// John Doe: admin
// Lidly Bush: editor
// Peter Drucker: subscriber

console.log("-----------");
userRoles.forEach((role, user) => // (values, keys)
    console.log(`${user.name}: ${role}`)
);
// John Doe: admin
// Lidly Bush: editor
// Peter Drucker: subscriber

console.log("-----------");
var roles = [...userRoles.keys()];
console.log(roles);
// [
//     { name: 'John Doe' },
//     { name: 'Lidly Bush' },
//     { name: 'Peter Drucker' }
// ]

console.log("-----------");
userRoles.delete(john);
for (let user of userRoles.entries()){
    console.log(user);
}
// [ { name: 'Lidly Bush' }, 'editor' ]
//     [ { name: 'Peter Drucker' }, 'subscriber' ]

console.log("-----------");
userRoles.clear(); //0
console.log(userRoles.size);