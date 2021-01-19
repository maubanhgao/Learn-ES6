let roles = new Set();
roles.add('admin').add('editor').add('subscriber');

for(let role of roles.entries()){
    console.log(roles);
}

// Set { 'admin', 'editor', 'subscriber' }
// Set { 'admin', 'editor', 'subscriber' }
// Set { 'admin', 'editor', 'subscriber' }

console.log("------------");
for (let role of roles.keys() ){
    console.log(roles);
}


console.log("------------");
for (let role of roles.values() ){
    console.log(roles);
}

// Set { 'admin', 'editor', 'subscriber' }
// Set { 'admin', 'editor', 'subscriber' }
// Set { 'admin', 'editor', 'subscriber' }
// ------------
//     Set { 'admin', 'editor', 'subscriber' }
// Set { 'admin', 'editor', 'subscriber' }
// Set { 'admin', 'editor', 'subscriber' }

console.log("------------");
for(let [key, value] of roles.entries()){
    console.log(key === value);
}
// true
// true
// true