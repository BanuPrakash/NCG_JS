export default class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // instance method
    getName() {
        return this.name;
    }

    // getter
    get age() {
        return this.age;
    }
}