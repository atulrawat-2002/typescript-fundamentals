interface User {
    firstName: string;
    lastName: string;
    age: number
}

let me: User = {
    firstName: 'atul',
    lastName: 'rawat',
    age: 21
}
let you: User = {
    firstName: 'tarun',
    lastName: 'kamal',
    age: 17
}
let he: User = {
    firstName: 'rohan',
    lastName: 'arya',
    age: 16
}

let users: User[] = [ me, you, he ]

let ans:User[] = isLegal(users);

function isLegal(users: User[]):User[] {

    let invalids:User[] = [];

    for (let user of users) {
        if (user.age < 18) {
            invalids.push(user);
        }
    }

    return invalids;
}

console.log(ans);