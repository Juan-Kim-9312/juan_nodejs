var members = ['egoing', 'k8805', 'hoya'];
console.log(members[1]);


var roles = {
    'programmer' : 'egoing',
    'designer' : 'k8805',
    'manager' : 'hoya'
}

console.log(roles.designer);
console.log(roles['designer']);

for (var n in roles) {
    console.log('object => ', n, 'value => ', roles[n]);
}