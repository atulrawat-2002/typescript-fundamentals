interface Person {
    name: String
    age: number
}

interface newPerson extends Person  {email: string}

const me: newPerson = {
    name: 'Atul',
    age: 23,
    email: 'sdjks'
}

console.log(me)