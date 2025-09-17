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