const user = {
    name: "Hexan",
    age: 25,
    isAdmin: true,
    greet: function () {
        console.log("Hi, I am " + this.name);
    }
};
console.log(user.name);
console.log(user['age']);
user.greet();

// ways to create objects
// 1. object literal
const car = {
    company: "Toyota",
    model: "Camry",
    year: 2022
};
console.log(car);

// 2. new Object() constructor
const person = new Object();
person.name = 'Jack';
console.log(person);

// 3. using function constructor 
function createUser(name, age) {
    this.name = name;
    this.age = age;
}
const user1 = new createUser('Alex', 34);
console.log(user1);
user1.greet = function () {
    console.log(`Hello this is ${this.name}`);
}
console.log(user1);
user1.greet();

// 4. Using class 
class Car {
    constructor(company, model, year) {
        this.company = company;
        this.model = model;
        this.year = year;
    }
    drive() {
        console.log(`${this.company} ${this.model} is driving`);
    }
}
const car1 = new Car('BMW', 'M4', 2022);
console.log(car1);
car1.color = 'black';
console.log(car1.hasOwnProperty('color'));
console.log(Object.getPrototypeOf(car1));
console.dir(Object.getPrototypeOf(car1.drive));
console.log(car1);

const car2 = new Car('Buggati', 'Veyron', 2023);
console.log(car2);

// adding properties for all car instances
Car.prototype.engine = 'V8'; // properties from prototype chain are not displayed in the first level 
console.log(car1, car2);
console.log(car1.engine);
console.log(car2.engine);
console.log(Car.prototype);
console.log(Object.getOwnPropertyDescriptors(Car.prototype));
console.log(Object.getOwnPropertyDescriptors(Car.prototype.engine));

Object.defineProperty(car1, 'color', {
    enumerable: false
});
console.log(car1); // we can't directly see color property
console.log(Object.getOwnPropertyDescriptors(car1));


// 5. Using Object.create()
const animal = Object.create(Object.prototype, {
    name: { value: 'Tiger', enumerable: true, writable: true, configurable: true },
    age: { value: 5, enumerable: true, writable: true, configurable: true }
});
console.log(animal);
console.log("name" in animal);

// looping through object 
for (let key in animal) {
    console.log(`${key}: ${animal[key]}`);
}

// copying object 
const newAnimal = { ...animal, sound: 'Roar' };
console.log(newAnimal);

// object destructuring 
const { name, age } = animal;
console.log(name, age);

// calculator 
const calculator = {
    add: (...args) => args.reduce((a, b) => a + b, 0),
    multiply: (...args) => args.reduce((a, b) => a * b, 1),
}
console.log(calculator.add(1, 2, 3, 4, 5));
console.log(calculator.multiply(1, 2, 3, 4, 5));


const cart = [
    { name: "Phone", price: 50000, quantity: 2 },
    { name: "Laptop", price: 90000, quantity: 1 },
    { name: "Tablet", price: 19000, quantity: 3 }
];
const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);
console.log(total);

const obj1 = cart.map(item => [item.name, item]);
console.log(obj1);

const obj2 = cart.reduce((acc, item) => {
    if (acc[item.name]) {
        acc[item.name].quantity += item.quantity;
    } else {
        acc[item.name] = { ...item };
    }
    return acc;
}, {});
console.log(obj2);

const obj3 = cart.reduce((acc, item) => {
    if (!acc[item.name]) acc[item.name] = [];
    acc[item.name].push(item);
    return acc;
}, {});
console.log(obj3)

// changing property descriptors
const obj = {
    a: 12,
    b: 23,
    c: 45
};
console.log(Object.getOwnPropertyDescriptors(obj));
Object.defineProperty(obj, 'a', {
    writable: false
});
console.log(Object.getOwnPropertyDescriptors(obj));
obj.a = 34;
console.log(obj.a);

Object.defineProperty(obj, 'b', {
    enumerable: false
});
console.log(obj);
console.log(Object.getOwnPropertyDescriptors(obj));
console.log(obj.b);

Object.defineProperty(obj, 'c', {
    configurable: false
});
console.log(Object.getOwnPropertyDescriptors(obj));
delete obj.c;
console.log(obj)