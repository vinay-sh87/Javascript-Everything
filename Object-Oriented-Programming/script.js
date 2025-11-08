// object literal 
const person = {
    firstname: 'something',
    lastname: 'sharma',
    age: 9900,
    getFullName() {
        return `${this.firstname} ${this.lastname}`

    },
    increaseAge() {
        this.age++;
    }
};
person.increaseAge();
console.log(person);

// classes
class Person {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    getFullName() {
        return `${this.firstname} ${this.lastname}`;
    }
    increaseAge() {
        this.age++;
    }

    // static method 
    static compareAge(person1, person2) {
        return person1.age - person2.age;
    }
}

const pearson = new Person("Pearson", "", 30);
const jack = new Person("Jack", "", 23);
console.log(Person.compareAge(pearson, jack));