class User {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log("hy there");
    }
}
class Employee extends User {
    constructor(name) {
        super(name);
        this.name = name;
    }
    greet() {
        return 'hy ' + this.name;
    }
}
export {};
//# sourceMappingURL=index.js.map