//function - a block of code that gets executed when we call it in our code is function

function sayHii(user) {
    console.log(`Hii ${user}`);
}
sayHii('Henry');


function authentication(username, password) {
    if (username === 'admin' && password === '1011') return 'Login successful!';
    else return 'Invalid credentials!';
}

console.log(authentication('admin', '1011'));


// arrow functions
const calculateTotal = (cart) => {
    let total = 0;
    for (price of cart) {
        total += price;
    }
    return total;
}
console.log(calculateTotal([23, 4, 5, 6, 7]));


const filterByRole = (user, role) => {
    return user.filter(user => user.role === role);
}
const users = [
    { name: 'Henry', role: 'admin' },
    { name: 'George', role: 'developer' },
    { name: 'Kevin', role: 'developer' },
]
console.log((filterByRole(users, 'developer')));


const generatePassword = (length) => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }
    return password;
}
console.log(generatePassword(4));


function add(n1, n2) {
    return n1 + n2;
}
console.log(add()); // undefined + undefined = NaN

// default parameters
function multiplication(n1 = 1, n2 = 1) {
    return n1 * n2;
}
console.log(multiplication(5));


// rest or spread operator
// in case of parameter space -- called rest 
// in case of arrays and objects -- called spread 
const abc = (...val) => {
    let sum = 0;
    for (v of val) {
        sum += v;
    }
    return sum;
}
console.log(abc(1, 2, 3, 4, 5, 6, 6, 7, 7, 8));


// first class function -- functions that we can use like values 

function func(val) {
    val();
}

func(function () {
    console.log('Hii');
});


// high order function -- function which returns a function or accepts a function in it's parameter

const cart = [
    { name: 'shirt', price: 20 },
    { name: 'phone', price: 800 },
    { name: 'watch', price: 55 },
    { name: 'laptop', price: 1100 },
];
const expensiveItems = cart.filter(item => item.price > 50);
console.log(expensiveItems);

const repeatTask = (times, task) => {
    for (let i = 0; i < times; i++) {
        task(i);
    }
};
repeatTask(3, i => console.log(`Reminder ${i + 1} : drink water!`)); // i is the task or the callback 


// pure vs impure functions 
// pure function -- function that does not changes the outer values 
let val = 0;
function abcd() {
    console.log('Hii');
}

// impure function -- function that does change the outer values 
function f() {
    ++val;
}
f();
console.log(val)


// hoisting works in the case of normal function not in function expression (where a function is stored in a variable)
// closures
// function that returns a function and the function which is getting returned should use variable of parent function 
const outer = () => {
    let counter = 0;
    return inner = () => {
        ++counter;
        console.log(counter);
    }
}
const fun = outer();
fun();

// lexical scope -- scope where the variable is accessible
function a() {
    let x = 0; // lexical scope of x 134 -- 141 line
    function b() {
        let y = 0;
        function c() {
            let z = 0;
            console.log(x, y, z);
        }
    }
}

function createBankAccount() {
    let balance = 0;
    return {
        deposit(amount) { balance += amount; },
        withdraw(amount) { balance -= amount; },
        getBalance() { return balance; }
    }
}
const myAccount = createBankAccount();
myAccount.deposit(1000);
console.log(myAccount.getBalance());

// IIFE (Immediately Invoked Function Expression) -- function that runs as soon as it is defined.
(() => {
    console.log("IIFE");
})();

const appConfig = (() => {
    const apiKey = 'ABC122';
    const apiUrl = 'https://api.com';

    return {
        getKey: () => {
            return apiKey;
        },
        getUrl: () => {
            return apiUrl;
        }
    }
})();
console.log(appConfig.getKey()); // get data of apiKey using function
console.log(appConfig.getUrl()); // get data of apiUrl using function
// console.log(apiKey); // can't directly access

// Shoping cart module
const shopingCart = (() => {
    let cart = [];

    return {
        addItem: (item) => {
            cart.push(item);
        },
        getItems: () => {
            return cart;
        },
        clearCart: () => {
            cart = [];

        }
    }
})();
shopingCart.addItem('shirt');
shopingCart.addItem('phone');
console.log(shopingCart.getItems());
shopingCart.clearCart();
console.log(shopingCart.getItems());
