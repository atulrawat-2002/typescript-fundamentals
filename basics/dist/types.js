let me = {
    firstName: 'atul',
    lastName: 'rawat',
    age: 21
};
let you = {
    firstName: 'tarun',
    lastName: 'kamal',
    age: 17
};
let he = {
    firstName: 'rohan',
    lastName: 'arya',
    age: 16
};
let users = [me, you, he];
let ans = isLegal(users);
function isLegal(users) {
    let invalids = [];
    for (let user of users) {
        if (user.age < 18) {
            invalids.push(user);
        }
    }
    return invalids;
}
console.log(ans);
export {};
//# sourceMappingURL=types.js.map